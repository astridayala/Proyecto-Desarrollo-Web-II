import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { faBuilding, faList, faUsers, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/CM-Logo.png";
import GestionEmpresas from "../pages/GestionEmpresas";
import GestionRubros from "../pages/GestionRubros";
import GestionClientes from "../pages/GestionClientes"

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

export function HeaderGeneralAdmin() {
    const navigate = useNavigate();

    return (
        <header className="header-container">
            <img onClick={() => navigate("/gestion-empresas")} src={logo} alt="Logo CM" className="Logo" />
            <nav className="pages">
                <ul>
                    <Nav link="/gestion-empresas" icon={faBuilding} text="Empresas" />
                    <Nav link="/gestion-rubros" icon={faList} text="Rubros" />
                    <Nav link="/gestion-clientes" icon={faUsers} text="Clientes" />
                    <Nav link="/login" icon={faRightFromBracket} text="Cerrar sesión" />
                </ul>
            </nav>
        </header>
    );
}
