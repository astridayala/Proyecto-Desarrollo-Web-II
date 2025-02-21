import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom"
import { faTicket, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/CM-Logo.png";
import Login from "../pages/Login"

function Nav({link, icon, text}) {
    return(
        <li className="page">
            <NavLink to={link} className="botton">
                <FontAwesomeIcon icon={icon} className="icon"/>
                <h2 className="textNav">{text}</h2>
            </NavLink>
        </li>
    )
}

export function HeaderGeneral(){
    return(
        <header className="header-container">
            <img onClick={() => navigate("/cupones")} src={logo} alt="Logo CM" className="Logo"/>
            <nav className="pages">
                <ul className="link">
                    <Nav link="/cupones" icon={faTicket} text="Cupones" />
                    <Nav link="/login" icon={faCircleUser} text="Iniciar Sesion"/>
                </ul>
            </nav>
        </header>
    )
}