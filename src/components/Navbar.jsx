import React, { useState } from "react"
import "./Navbar.css"
import Hamburger from 'hamburger-react'

function Navbar() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
        <header>
            <nav>
                <div id="logo">
                    <h1>
                        <a href="index.html">
                            LOGO
                        </a>
                        
                    </h1>
                </div>
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }
                >
                    <ul id="navbar">
                        <li>
                            <a href="#" className="active">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div
                    className="menu-icon"
                    onClick={() => setShowMediaIcons(!showMediaIcons)}
                >
                   <Hamburger/>
                </div>
            </nav>
        </header>
        </>
    );
}
export default Navbar;
