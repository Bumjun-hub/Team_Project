import React, { useEffect } from 'react';
import axios from 'axios';

const KakaoMap = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=ddc7ebc2fd58cd0c32ec8ffa3c665554&autoload=false";

        script.onload = () => {
            if (window.kakao?.maps) {
                window.kakao.maps.load(() => {
                    const container = document.getElementById('map');
                    const options = {
                        center: new window.kakao.maps.LatLng(36.2665, 127.9780), // 처음 좌표를 지도의 중심으로
                        level: 12, // 지도 확대 레벨 숫자가 커질수록 지도 축소
                    };
                    var map = new window.kakao.maps.Map(container, options); // 지도 생성


                    // 백엔드로부터 산 리스트 데이터를 받아오는 부분
                    axios.get("http://localhost:8080/track/get_track_list_all")
                        .then((res) => {
                            const data = res.data;

                            data.forEach((item) => {
                                const name = item.track_name;
                                const location = item.track_location;

                                // 데이터를 읽고 ,을 기준으로 lat과 lng로 위도 경도 나눔(숫자로 전환)
                                const [lat, lng] = location.split(',').map(Number);

                                //마커가 생성될 위치
                                const markerPosition = new window.kakao.maps.LatLng(lat, lng);

                                //마커 생성
                                const marker = new window.kakao.maps.Marker({
                                    position: markerPosition,
                                });

                                //마커를 지도에 표시
                                marker.setMap(map);

                                // 말풍선(InfoWindow) 생성
                                const infowindow = new window.kakao.maps.InfoWindow({
                                    content: `<div style="padding:5px;font-size:13px;">${name}</div>`,
                                });

                                // 🟡 마커에 마우스 올렸을 때 말풍선 표시
                                window.kakao.maps.event.addListener(marker, 'mouseover', () => {
                                    infowindow.open(map, marker);
                                });

                                // 🟡 마우스가 벗어나면 말풍선 닫기
                                window.kakao.maps.event.addListener(marker, 'mouseout', () => {
                                    infowindow.close();

                                })
                            })
                        })

                    // 지도의 지형도를 표시
                    map.addOverlayMapTypeId(window.kakao.maps.MapTypeId.TERRAIN);
                });
            } else {
                console.error("카카오 객체가 정의되지 않음");
            }
        };

        document.head.appendChild(script);
    }, []);






    return (
        <div
            id="map"
            style={{
                width: '100%',
                height: '100%',
                border: '1px solid #ccc',
                borderRadius: '8px',
            }}
        ></div>
    );
};

export default KakaoMap;
