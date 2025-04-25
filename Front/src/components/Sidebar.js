import React, { useState } from "react";
import "./Sidebar.css";
import Search from "./search/Search";
import SearchList from "./search/SearchList";

export default function SideBar() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((prev) => !prev);
    };
    
    return (
        <div className={`sidebar-wrapper ${open ? "open" : "closed"}`}>
            <div className="sidebar-content" style={{maxHeight: "100vh", overflowY: "auto",}}>
                <Search />
                <SearchList />
                <SearchList />
                <SearchList />
                <SearchList /><SearchList /><SearchList /><SearchList /><SearchList />
            </div>
            <div className="sidebar-toggle" onClick={handleToggle}>
                {open ? "←" : "→"}
            </div>
        </div>
    );
}