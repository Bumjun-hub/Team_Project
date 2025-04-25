import { BiSearch, BiChevronDown, BiChevronUp, BiChevronLeft  } from "react-icons/bi";
import React, { useState } from "react";
import SearchFilter from "./SearchFilter"

export default function Search() {
    const [text, setText] = useState('');
    const [showFilter, setShowFilter] = useState(false);

    const SearchingStyle = {
        overflowY: "auto",
        display: "flex",
        borderBottom: "0.1px solid lightgray",
        fontSize: "16px"
    }

    const SearchingInputBox = {
        margin: "5% 0% 5% 3%",
        width: "70%",
        height: "30px",
        border: "0.3px solid black",
        fontSize: "16px"
    }

    const FilterButtonStyle = {
        padding: "6px 8px",
        height: "30px",
        margin: "5% 0% 5% 1%",
        backgroundColor: "#86ae27",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
        whiteSpace: "nowrap"
    }

    const SearchButtonStyle = {
        padding: "6px 8px",
        height: "30px",
        margin: "5% 3% 5% 1%",
        backgroundColor: "#86ae27",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
        whiteSpace: "nowrap"
    }

    return (
        <div>
            <div style={SearchingStyle}>
                <div style={SearchingInputBox}>&ensp;
                <BiSearch style={{marginTop: "4px"}}/>
                <input type="text" placeholder={`국립공원, 산, 코스 이름 검색`} value={text} onChange={(e) => {
                    setText(e.target.value);
                }} style={{border:"none", outline: "none", width:"86%", fontSize: "12px"}} />
                
                </div>
                <button style={FilterButtonStyle} onClick={() => setShowFilter(!showFilter)}>상세조건
                    {showFilter ? <BiChevronDown /> : <BiChevronUp />}
                </button>
                <button style={SearchButtonStyle}>검색</button>
            </div>
            {showFilter && (
                    <div style={{ margin: "0 5%" }}>
                        <SearchFilter style={{borderBottom: "0.1px solid lightgray"}} />
                    </div>
                )}
        </div>
    );
}