import { IoMdContact } from "react-icons/io";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const navData =
        [
            {
                title: 'Home',
                path: '#bio',
                icon: <FaHome className="link-icon"/>,
                cName: 'nav-item'
            },
            {
                title: 'Projects',
                path: '#projects',
                icon: <FaProjectDiagram className="link-icon" />,
                cName: 'nav-item'
            },
            {
                title: 'Contact',
                path: '#contact',
                icon: <IoMdContact className="link-icon" />,
                cName: 'nav-item'
            }
        ]

export default navData;