import React from "react";
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
            {/* <span className="headerTitlesSm">Glow</span> */}
            <span className="headerTitlesLg">Blog</span>
            </div>
            <img className="headerImg"
             src="./img/photo4.avif" 
             alt="" />
        </div>

    )
}