import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom"
import { faUtensils, faSprayCanSparkles, faPlaneDeparture, faNotesMedical, faGift, faRightFromBracket, faTicket, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/CM-Logo.png";

function Nav({link, icon, text}) {
    return(
        <li className="page">
            <NavLink to={link} className="botton">
                <FontAwesomeIcon icon={icon} className="icon"/>
                <h2>{text}</h2>
            </NavLink>
        </li>
    )
}

function HeaderCliente(){
    const navigate = useNavigate()

    return(
        <header className="header-container">
            <img onClick={() => navigate("/")} src={logo} alt="Logo CM" className="Logo"/>
            <nav className="pages">
                <ul>
                    <Nav link="/comida" icon={faUtensils} text="Comida"/>
                    <Nav link="/belleza" icon={faSprayCanSparkles} text="Belleza"/>
                    <Nav link="/viajes" icon={faPlaneDeparture} text="Viajes"/>
                    <Nav link="/salud" icon={faNotesMedical} text="Salud"/>
                    <Nav link="/things" icon={faGift} text="Things"/>
                    <Nav link="/cupones" icon={faTicket} text="Mis Cupones"/>
                    <Nav link="/perfil" icon={faUser} text="Mi Perfil"/>
                    <Nav link="/login" icon={faRightFromBracket} text="Cerrar sesión"/>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderCliente;