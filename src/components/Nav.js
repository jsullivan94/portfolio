import { useState } from "react";

import { FaHome, FaProjectDiagram, FaBars } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";


const [navOpen, setNavOpen] = useState(false)

function Nav() {
    return (
        <div className="sidebar"></div>
    )
}

export default Nav;