import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { faTags, faUsers, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/CM-Logo.png";

function Nav({ link, icon, text }) {
    return (
        <li className="page">
            <NavLink to={link} className="botton">
                <FontAwesomeIcon icon={icon} className="icon" />
                <h2 className="textNav">{text}</h2>
            </NavLink>
        </li>
    );
}

export function HeaderAdminOfertante() {
    const navigate = useNavigate();

    return (
        <header className="header-container">
            <img onClick={() => navigate("/")} src={logo} alt="Logo CM" className="Logo" />
            <nav className="pages">
                <ul>
                    <Nav link="/gestion-ofertas" icon={faTags} text="Ofertas" />
                    <Nav link="/gestion-empleados" icon={faUsers} text="Empleados" />
                    <Nav link="/login" icon={faRightFromBracket} text="Cerrar sesión" />
                </ul>
            </nav>
        </header>
    );
}
