import { useState } from "react";
import { BsDot } from "react-icons/bs";

export default function Search() {

    const SearchingListStyle = {
        height: "130px",
        padding: "3%",
        borderBottom: "0.1px solid lightgray",
        borderTop: "0.1px solid lightgray",
        fontSize: "16px"
    }

    const SearchingBoxStyle = {
        height: "130px",
        padding: "5%",
        borderBottom: "0.1px solid lightgray",
        borderTop: "0.1px solid lightgray",
        backgroundColor: "lightgray",
        fontSize: "16px"
    }

    const TrailinfoStyle = {
        margin: "5px 3px",
        padding: "4px 5px",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderRadius: "10px",
        border: "0.2px solid gray",
        fontSize: "11px",
        fontWeight: "bold"
    }

    const Difficulty = {
        backgroundColor: "#4CAF50",
        fontSize: "10px",
        color: "white",
        height: "12px",
        textAlign: "center",
        padding: "1px 4px 2px 3px",
        borderRadius: "999px",
    }

    const TrackNameStyle = {fontWeight: "bold", color: "#3796f0"}

    const TrackNameInfoStyle = {color: "gray", fontSize: "14px"}
    const TrackDetailStyle = {fontSize: "14px", fontWeight: "bold"}

    const TrackInfoDataStyle = {color: "#333"}
    const TrackInfoColStyle = {color: "#555"}
    
    const TrackLengthStyle = {fontSize: "14px", fontWeight: "bold"}

    const [isHovering ,setIsHovering] = useState(true);
    
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div>
            <div style={isHovering ?  SearchingBoxStyle : SearchingListStyle}
                 onMouseOver={handleMouseOver}
                 onMouseOut={handleMouseOut}>
                <div>
                    <span style={TrackNameStyle}>가야산국립공원가야산소리길</span>
                    <span style={TrackNameInfoStyle}> 등산코스</span><br/>
                    
                    <span style={TrackDetailStyle}>track_detail_start</span>
                    <span style={TrackDetailStyle}>track_detail_end</span><br/>

                    <span style={TrackLengthStyle}>track_length Km</span><br/>

                    <div style={TrailinfoStyle} >
                        <span style={Difficulty}>쉬움</span>
                        <span style={TrackInfoDataStyle}> 1시간 29분</span><BsDot />
                        <span style={TrackInfoColStyle}>길이</span>
                        <span style={TrackInfoDataStyle}> 1시간 29분</span><BsDot />
                        <span style={TrackInfoColStyle}>고도</span>
                        <span style={TrackInfoDataStyle}> 1시간 29분</span>
                    </div>
                </div>
            </div>
        </div>
    );
}