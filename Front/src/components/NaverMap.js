import React, { useEffect } from 'react';
import axios from 'axios';

const NaverMap = () => {
  useEffect(() => {
    // 네이버 지도 API 스크립트 로드
    const script = document.createElement("script");
    script.src = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=vkxesou2dk";
    script.async = true;

    script.onload = () => {
      if (!window.naver || !window.naver.maps) {
        console.error("네이버 지도 객체를 불러오지 못했습니다.");
        return;
      }

      // 지도 생성
      const map = new window.naver.maps.Map('map', {
        center: new window.naver.maps.LatLng(37.5665, 126.9780), // 서울
        zoom: 10,
      });

      // 마커 불러오기
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
    <div
      id="map"
      style={{
        width: '100%',
        height: '600px',
        border: '2px solid #ccc',
        borderRadius: '10px',
        margin: 'auto'
      }}
    ></div>
  );
};

export default NaverMap;
