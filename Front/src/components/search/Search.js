import { BiSearch, BiChevronDown, BiChevronUp } from "react-icons/bi";
import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import "./Search.css";

export default function Search() {
    const [text, setText] = useState('');
    const [showFilter, setShowFilter] = useState(false);

    return (
        <div>
            <div className="searching-style">
                <div className="searching-input-box">
                    &ensp;
                    <BiSearch style={{marginTop: "4px"}}/>
                    <input 
                        type="text" 
                        placeholder="국립공원, 산, 코스 이름 검색" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        className="search-input"
                    />
                </div>
                <button className="filter-button" onClick={() => setShowFilter(!showFilter)}>
                    상세조건 {showFilter ? <BiChevronDown /> : <BiChevronUp />}
                </button>
                <button className="search-button">검색</button>
            </div>
            {showFilter && (
                <div className="filter-box">
                    <SearchFilter />
                </div>
            )}
        </div>
    );
}