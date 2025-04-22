import React, { useEffect } from 'react';

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
                        center: new window.kakao.maps.LatLng(36.2665, 127.9780),
                        level: 12,
                    };
                    const map = new window.kakao.maps.Map(container, options);
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
