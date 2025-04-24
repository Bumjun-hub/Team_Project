import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './../pages/Modal';


const NaverMap = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {


    // 네이버 지도 API 스크립트 로드
    const script = document.createElement("script");
    script.src = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=vkxesou2dk&submodules=geocoder,coord,animation";
    script.async = true;


    script.onload = () => {
      if (!window.naver || !window.naver.maps) {
        console.error("네이버 지도 객체를 불러오지 못했습니다.");
        return;
      }

      // 지도 생성
      const map = new window.naver.maps.Map('map', {
        center: new window.naver.maps.LatLng(36.2665, 127.3780),  // 초기위치
        zoom: 8,
      });

      // map 객체를 window에 저장 (zoonin zoomout 버튼에서 객체가 undefined로 표기되는 문제 수정)
      window.__naverMap__ = map;


      // InfoWindow 객체 생성
      const infoWindow = new window.naver.maps.InfoWindow({ content: '' });

      // 지도 클릭 시 위경도 및 좌표 변환 정보 출력
      window.naver.maps.Event.addListener(map, 'click', function (e) {
        const latlng = e.coord;
        const utmk = window.naver.maps.TransCoord.fromLatLngToUTMK(latlng);
        const tm128 = window.naver.maps.TransCoord.fromUTMKToTM128(utmk);
        const naverCoord = window.naver.maps.TransCoord.fromTM128ToNaver(tm128);

        utmk.x = parseFloat(utmk.x.toFixed(1));
        utmk.y = parseFloat(utmk.y.toFixed(1));

        infoWindow.setContent([
          '<div style="padding:10px;width:380px;font-size:14px;line-height:20px;">',
          '<strong>LatLng</strong> : ' + latlng.toString() + '<br />',
          '<strong>UTMK</strong> : ' + utmk.toString() + '<br />',
          '<strong>TM128</strong> : ' + tm128.toString() + '<br />',
          '<strong>NAVER</strong> : ' + naverCoord.toString() + '<br />',
          '</div>'
        ].join(''));
        infoWindow.open(map, latlng);

        console.log(latlng.toString());
        // console.log('UTMK:', utmk.toString());
        // console.log('TM128:', tm128.toString());
        // console.log('NAVER:', naverCoord.toString());
      });




      // 마커 불러오기 (국립공원 위치 마커)
      axios.get("http://localhost:8080/track/get_track_list_all")
        .then((res) => {
          const data = res.data;
          data.forEach((item) => {
            const name = item.track_name;
            const location = item.track_location;
            if (!location) return;

            const [lat, lng] = location.split(',').map(Number);
            const position = new window.naver.maps.LatLng(lat, lng);

            const marker = new window.naver.maps.Marker({
              position,
              map,
              title: name,
              animation: window.naver.maps.Animation.DROP
            });

            const infowindow = new window.naver.maps.InfoWindow({
              content: `<div style="padding:5px;font-size:13px;">${name}</div>`,
            });

            window.naver.maps.Event.addListener(marker, "mouseover", () => {
              infowindow.open(map, marker);
            });

            window.naver.maps.Event.addListener(marker, "mouseout", () => {
              infowindow.close();
            });

            // 마커 클릭시 마커를 중심으로 카메라 이동 + 줌
            window.naver.maps.Event.addListener(marker, "click", () => {
              map.morph(position, 14);

            });


            // 마커 클릭시 마커 위아래 바운스 애니메이션
            window.naver.maps.Event.addListener(marker, "click", function () {
              if (marker.getAnimation() !== null) {
                marker.setAnimation(null);

              } else {
                marker.setAnimation(window.naver.maps.Animation.BOUNCE);
              }
              setShowModal(true);
            });



          });
        })
        .catch((error) => {
          console.error("마커 데이터 요청 실패", error);
        });



      const redMarkers = [];

      // 마커 불러오기 (트랙시작점)
      axios.get("http://localhost:8080/api/test")
        .then((res) => {
          const data = res.data;

          data.forEach((item) => {
            const { latitude, longitude, trackName } = item;
            if (!latitude || !longitude) return;
            const position = new window.naver.maps.LatLng(latitude, longitude);

            const marker = new window.naver.maps.Marker({
              position,
              map: null,
              title: trackName,
              icon: {
                content: '<div style="width:12px;height:12px;border-radius:50%;background:red;border:2px solid black;"></div>',
                size: new window.naver.maps.Size(12, 12),
                anchor: new window.naver.maps.Point(6, 6),

              }
            });

            redMarkers.push(marker); // 빨간점들(트랙시작지점위치 마커)을 배열에 저장



            const infowindow = new window.naver.maps.InfoWindow({
              content: `<div style="padding:5px;font-size:13px;">테스트${trackName}</div>`,
            });

            window.naver.maps.Event.addListener(marker, "mouseover", () => {
              infowindow.open(map, marker);
            });

            window.naver.maps.Event.addListener(marker, "mouseout", () => {
              infowindow.close();
            });

            // 마커 클릭시 마커를 중심으로 카메라 이동 + 줌
            window.naver.maps.Event.addListener(marker, "click", () => {
              map.morph(position, 14);
              setShowModal(true);

            });

            // 줌 변경 이벤트
            window.naver.maps.Event.addListener(map, "zoom_changed", function () {
              const zoom = map.getZoom();
              redMarkers.forEach((m) => {
                if (zoom >= 12) {
                  m.setMap(map);

                } else {
                  m.setMap(null);
                }
              })

            })





          });
        })
        .catch((error) => {
          console.error("마커 데이터 요청 실패", error);
        });
    };




    document.head.appendChild(script);

    // 클린업
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        id="map"
        style={{
          width: '100%',
          height: '100%',
          border: '2px solid #ccc',
          borderRadius: '10px',
          margin: 'auto'
        }}
      ></div>

      <Modal show={showModal} onHide={() => setShowModal(false)} />
    </>
  );


};

export default NaverMap;
