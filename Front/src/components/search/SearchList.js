import { useState } from "react";
import { BsDot } from "react-icons/bs";
import "./SearchList.css";

export default function SearchList() {
    const [isHovering ,setIsHovering] = useState(true);
    
    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    return (
        <div>
            <div className={isHovering ? "searching-box" : "searching-list"}
                 onMouseOver={handleMouseOver}
                 onMouseOut={handleMouseOut}>
                <div>
                    <span className="track-name">가야산국립공원가야산소리길</span>
                    <span className="track-name-info"> 등산코스</span><br/>
                    
                    <span className="track-detail">track_detail_start</span>
                    <span className="track-detail">track_detail_end</span><br/>

                    <span className="track-length">track_length Km</span><br/>

                    <div className="trail-info">
                        <span className="difficulty">쉬움</span>
                        <span className="track-info-data"> 1시간 29분</span><BsDot />
                        <span className="track-info-col">길이</span>
                        <span className="track-info-data"> 1시간 29분</span><BsDot />
                        <span className="track-info-col">고도</span>
                        <span className="track-info-data"> 1시간 29분</span>
                    </div>
                </div>
            </div>
        </div>
    );
}