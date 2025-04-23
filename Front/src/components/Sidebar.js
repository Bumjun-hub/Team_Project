import React, { useState } from "react";
import "./Sidebar.css";

export default function SideBar() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className={`sidebar-wrapper ${open ? "open" : "closed"}`}>
            <div className="sidebar-content">
                <p>당일치기/1박2일 checkbox</p>
                <p>소요시간</p>
                <p>트랙 난이도 </p>
                <p></p>
            </div>
            <div className="sidebar-toggle" onClick={handleToggle}>
                {open ? "←" : "→"}
            </div>
        </div>
    );
}