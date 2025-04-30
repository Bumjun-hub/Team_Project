import { useEffect, useState } from "react";
import './NationalParkInfo.css';
import imgMountain from "../sample_data/SampleMap1.png";
import Weather from '../components/Weather';
import axios from 'axios';

const NationalParkInfo = () => {
    const national_park_no =1;
    const national_park_office_no = 1;
    const weather_no =1;

    const [useParkInfo, setParkInfo] = useState({
        national_park_name: "",
        national_park_introduce: "",

        national_park_office_name : "",
        national_park_office_address : "",
        national_park_office_phone : "",

        allReviews: [],

        location_x : 0,
        location_y : 0,
    });

    useEffect(() => {
        // 산 이름, 산 설명 저장
        axios.get("/national_park/get_one_object", {params:{national_park_no}})
        .then((national_park) => {
            const data = national_park.data
            const national_park_introduce = data.national_park_introduce;
            const national_park_name = data.national_park_name;
            setParkInfo((prev) => ({
                ...prev,
                national_park_name,
                national_park_introduce
            }));
        })
        .catch((error) => {
            console.error("국립공원 데이터 요청 실패", error);
        });
        // 국립공원 정보 저장
        axios({
            method:"get"
            , url:"/national_park_office/get_list_national_park"
            , params:{national_park_no:national_park_no}
        })
        .then((national_park_office) => {
            const data = national_park_office.data
            const national_park_office_name = data[0].national_park_office_name;
            const national_park_office_address = data[0].national_park_office_address;
            const national_park_office_phone = data[0].national_park_office_phone;
            setParkInfo((prev) => ({
                ...prev,
                national_park_office_name,
                national_park_office_address,
                national_park_office_phone
            }));
        })
        .catch((error) => {
            console.error("국립공원 사무실 데이터 요청 실패", error);
        });
        // 기상 좌표 저장
        axios.get("/weather/get_one_object_national_park_no", {params:{national_park_no:national_park_no}})
        .then((weather) => {
            const data = weather.data
            const location_x = data.weather_location_x;
            const location_y = data.weather_location_y;
            
            setParkInfo((prev) => ({
                ...prev,
                location_x,
                location_y
            }));
        })
        .catch((error) => {
            console.error("기상 데이터 요청 실패", error);
        });

        // 리뷰 전체 배열을 저장
        axios.get("/review/get_list_national_park", {params:{national_park_no}}) 
        .then((review) => {
            const data = review.data
            const allReviews = data.map((item) => item.review_content);
            setParkInfo((prev) => ({
                ...prev,
                allReviews
            }));
        })
        .catch((error) => {
            console.error("리뷰 데이터 요청 실패", error);
        });
    }, [national_park_no]);

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(prev => !prev);

    return (
        <>
            <div className="ModalImageWrapper">
                <img src={imgMountain} alt="설악산 사진" className="MapImage" />
            </div>

            <div className="Modalbody">
                <div className="ParkInfo">
                    
                    </div>
                    <strong>{useParkInfo.national_park_name}</strong><br />
                    <div className="ParkInfoBubble">
                        {useParkInfo.national_park_introduce}
                    </div>

                    <div className="ParkContact">
                    <strong>{useParkInfo.national_park_office_name}</strong><br />
                        주소 : {useParkInfo.national_park_office_address}<br />
                        연락처 : {useParkInfo.national_park_office_phone}
                    </div>
                    <div className="WeatherSection">
                        <strong>날씨</strong>
                        <div className="WeatherTags">
                            {/* weather: {useParkInfo.location_x}, {useParkInfo.location_y} */}
                            {/* <Weather location_x={useParkInfo.location_x} location_y={useParkInfo.location_y} /> */}
                        </div>
                    </div>
                    
                    <div className="ReviewSection">
                        <div className="CourseInfo">
                            <strong>리뷰 ({useParkInfo.allReviews.length})</strong>
                            <div className="ReviewButtons">
                                <button className="MoreLink" onClick={toggleExpand}>
                                {isExpanded ? "접기" : "자세히"}
                                </button>
                            </div>
                        </div>

                        {useParkInfo.allReviews.map((text, idx) => (
                        <div key={idx} className={`SpeechBubble ${!isExpanded ? "CutText" : ""}`}>
                            {text}
                        </div>
                        ))}
                    </div>
                
            </div>
        </>
    );
};

export default NationalParkInfo;