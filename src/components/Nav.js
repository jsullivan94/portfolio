import navData from "./NavData";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { FaGithubSquare, FaLinkedin, FaBars, FaArrowLeft } from "react-icons/fa";

function Nav() {
    const [navOpen, setNavOpen] = useState(false)

    function handleClick() {
        setNavOpen(() => !navOpen)
    }

    const links = navData.map((item) => {
        return (
            <li className={item.cName}>
                <NavHashLink to={item.path} smooth>
                    {item.icon}
                    <span>{item.title}</span>
                </NavHashLink>
            </li>
        )
    })
    
    return (
        <div className="navbar">
            <div className="nav-bars">
                <FaBars onClick={handleClick} />
            </div>   
            <nav className={navOpen ? "nav-open" : "nav-closed"}>
                <div className="nav-items">
                    <FaArrowLeft onClick={handleClick} className="nav-x" />
                    {links}
                    <div className="nav-icons">
                        <FaGithubSquare className="nav-icon" />
                        <FaLinkedin className="nav-icon" />
                    </div>
                </div>
            </nav>
        </div>
        
    )
}

export default Nav;