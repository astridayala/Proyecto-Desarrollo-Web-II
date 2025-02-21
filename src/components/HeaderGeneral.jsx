import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTicket, faCircleUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/CM-Logo.png";
import Login from "../pages/Login"

function Nav({ link, icon, text }) {
  return (
    <li className="page">
      <NavLink to={link} className="button">
        <FontAwesomeIcon icon={icon} className="icon" />
        <h2 className="textNav">{text}</h2>
      </NavLink>
    </li>
  );
}

export function HeaderGeneral() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header-container">
      <img onClick={() => navigate("/cupones")} src={logo} alt="Logo CM" className="Logo" />
      <nav className="pages">
        {/* Icono de hamburguesa para abrir/cerrar el menú en pantallas pequeñas */}
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          className="hamburger-icon"
          onClick={toggleMenu}
        />
        <ul className={`link ${menuOpen ? 'open' : ''}`}>
          <Nav link="/cupones" icon={faTicket} text="Cupones" />
          <Nav link="/login" icon={faCircleUser} text="Iniciar Sesion" />
        </ul>
      </nav>
    </header>
  );
}
