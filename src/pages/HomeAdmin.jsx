import { Link } from "react-router-dom";
import { HeaderGeneralAdmin } from "../components/HeaderGeneralAdmin";
import { useAuth } from "../context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GestionEmpresas from "./GestionEmpresas";
import GestionEmpleados from "./GestioEmpleados";
import { Footer } from "../components/Footer";

const HomeAdmin = () => {
  const { user } = useAuth();
  return (
    <>
        <HeaderGeneralAdmin/>
        <Footer/>
    </>

  );
};

export default HomeAdmin;