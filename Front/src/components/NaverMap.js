import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DetailModal from './../pages/DetailModal';


const NaverMap = () => {
  const [showModal, setShowModal] = useState(false);

  // 초기 모달 상태
  const [showTab, setShowTab] = useState('course');
  useEffect(() => {

    // 트랙 마커 불러오기
    const redMarkers = [];
    const blueMarkers = [];

    // 네이버 지도 API 스크립트 로드
    const naverApiKey = process.env.REACT_APP_NAVER_MAP_KEY;
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${naverApiKey}&submodules=geocoder,coord,animation`;
    script.async = true;

    script.onload = () => {
      if (!window.naver || !window.naver.maps) {
        console.error("네이버 지도 객체를 불러오지 못했습니다.");
        return;
      }

      // 지도 생성
      const map = new window.naver.maps.Map('map', {
        center: new window.naver.maps.LatLng(36.9665, 127.1780),
        zoom: 8,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT
        }
      });

      window.__naverMap__ = map;

      // const infoWindow = new window.naver.maps.InfoWindow({ content: '' });

      // 국립공원 마커 불러오기
      axios.get("/national_park/get_all_list")
        .then((res) => {
          const data = res.data;
          data.forEach((item) => {
            const name = item.national_park_name;
            const position = new window.naver.maps.LatLng(item.national_park_latitude, item.national_park_longitude);

            const marker = new window.naver.maps.Marker({
              position,
              map,
              title: name,
            });

            blueMarkers.push(marker);


            const infowindow = new window.naver.maps.InfoWindow({
              content: `<div style="padding:5px;font-size:13px;">${name}</div>`,
            });

            window.naver.maps.Event.addListener(marker, "mouseover", () => {
              infowindow.open(map, marker);
            });

            window.naver.maps.Event.addListener(marker, "mouseout", () => {
              infowindow.close();
            });

            window.naver.maps.Event.addListener(marker, "click", () => {
              map.morph(position, 12);
              setShowModal(true);
              setShowTab('park');
              blueMarkers.forEach((m) => m.setAnimation(null));
              redMarkers.forEach((m) => m.setAnimation(null));

              // 클릭시 바운스 애니메이션
              if (marker.getAnimation() !== null) {
                marker.setAnimation(null);

              } else {
                marker.setAnimation(window.naver.maps.Animation.BOUNCE);

              }
            })


          });



        })
        .catch((error) => {
          console.error("국립공원 마커 요청 실패", error);
        });




      axios.get("/track/get_all_list")
        .then((res) => {
          const data = res.data;
          data.forEach((item) => {
            const trackName = item.track_name;
            const position = new window.naver.maps.LatLng(item.track_latitude, item.track_longitude);

            const marker = new window.naver.maps.Marker({
              position,
              map: null,
              title: trackName,
              icon: {
                url: process.env.PUBLIC_URL + '/img/marker.png',
                size: new window.naver.maps.Size(24, 24),
                scaledSize: new window.naver.maps.Size(24, 24),
                anchor: new window.naver.maps.Point(12, 24),
              }
            });

            redMarkers.push(marker);

            const infowindow = new window.naver.maps.InfoWindow({
              content: `<div style="padding:5px;font-size:13px;">${trackName}</div>`,
            });

            window.naver.maps.Event.addListener(marker, "mouseover", () => {
              infowindow.open(map, marker);
            });

            window.naver.maps.Event.addListener(marker, "mouseout", () => {
              infowindow.close();
            });

            window.naver.maps.Event.addListener(marker, "click", function () {
              map.morph(position, 15);
              redMarkers.forEach((m) => {
                m.setAnimation(null);
              });
              setShowModal(true);
              setShowTab('course');


              if (marker.getAnimation() !== null) {
                marker.setAnimation(null);

              } else {
                marker.setAnimation(window.naver.maps.Animation.BOUNCE);

              }
            })


          });

          // 줌에 따라 빨간 점 보이기
          window.naver.maps.Event.addListener(map, 'zoom_changed', function () {
            const zoom = map.getZoom();
            redMarkers.forEach((m) => {
              if (zoom >= 12) {
                m.setMap(map);
              } else {
                m.setMap(null);
              }
            });
          });
        })
        .catch((error) => {
          console.error("트랙 마커 요청 실패", error);
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
      {showModal && (
        <DetailModal show={showModal} onHide={() => setShowModal(false)}
          showTab={showTab} />
      )}

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
    </>
  );
};

export default NaverMap;
