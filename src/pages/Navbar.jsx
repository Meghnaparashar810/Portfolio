import React, { useState } from 'react'
import "./Navbar.css"


function Navbar() {
    const [menuopen, SetMenuopen] = useState("")
    return (
        <div>
            <nav>
                <div classame="logo">
                    Meghna Suthar
                </div>
                <ul>
                    <li><a href=""> Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#project"> Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact"> Contact</a></li>
                </ul>
                <button className='resume' > <a
                    href="./meghnaparashar Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="resume-btn"
                >
                    Resume
                </a> </button>


                <button className="menu-btn"
                    onClick={() => SetMenuopen(!menuopen)}>☰</button>
                {menuopen && (
                    <div className="mobile-menu">
                        <a href="">Home</a>
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a href="#project">Projects</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact">Contact</a>
                        <a href="/meghnaparashar Resume.pdf">Resume</a>
                    </div>
                )}

            </nav>
        </div>
    )
}

export default Navbar
