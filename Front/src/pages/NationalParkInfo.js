import { useState } from "react";
import './NationalParkInfo.css';
import imgMountain from "../sample_data/SampleMap1.png";
import Weather from '../components/Weather';

const NationalParkInfo = () => {
    const allReviews = [
        "힘들어요 ㅠㅠ",
        "정말 멋진 풍경입니다!",
        "코스가 잘 정비되어 있어요.",
        "가족여행에 딱이에요."
    ];

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(prev => !prev);

    return (
        <>
            <div className="ModalImageWrapper">
                <img src={imgMountain} alt="설악산 사진" className="MapImage" />
            </div>

            <div className="Modalbody">
                <div className="ParkInfo">
                    <strong>설악산 국립공원 사무소</strong><br />
                    </div>
                    <div className="ParkInfoBubble">
                        설악산은 매우 아름다운 산 입니다.
                    </div>

                    <div className="ParkContact">
                        강원도 설악산리 8842-1123  053)1111-1111
                    </div>
                    <div className="WeatherSection">
                        <strong>날씨</strong>
                        <div className="WeatherTags">
                            <Weather />                    
                        </div>
                    </div>
                    
                    <div className="ReviewSection">
                        <div className="CourseInfo">
                        <strong>리뷰 ({allReviews.length})</strong>
                        <div className="ReviewButtons">
                            <button className="MoreLink" onClick={toggleExpand}>
                            {isExpanded ? "접기" : "자세히"}
                            </button>
                        </div>
                        </div>

                        {allReviews.map((text, idx) => (
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