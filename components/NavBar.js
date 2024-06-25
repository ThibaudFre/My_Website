"use client"
import { useState } from "react";
import Link from "next/link";


const NavBar = () => {
    const [clickNavBar, setClickNavBar] = useState(false);
    const openCloseNav = () => {
        setClickNavBar(!clickNavBar)
    }
    return <>
        <nav className={`horizonNav ${clickNavBar === false ? "navNotOpen" : "navOpen"}`}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/portfolio">My Projects</Link></li>
                <li><Link href="/experiences">Experiences</Link></li>
                <li><Link href="/aboutMe">About me</Link></li>
            </ul>
        </nav>
        <div className="navButton" onClick={openCloseNav}>
            {clickNavBar === false ?
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
            }
        </div>
    </>


}

export default NavBar