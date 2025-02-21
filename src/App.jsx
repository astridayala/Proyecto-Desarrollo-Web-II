import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HeaderGeneral } from "./components/HeaderGeneral";
import { HeaderCliente } from './components/HeaderCliente';
import { HeaderEmpleado } from "./components/HeaderEmpleado"
import { HeaderAdminOfertante } from "./components/HeaderAdminOfertante";
import { HeaderGeneralAdmin } from "./components/HeaderGeneralAdmin"

import HomeCliente from "./pages/HomeCliente";
import HomeAdminEmpresa from "./pages/HomeAdminEmpresa";
import GestionOfertas from "./pages/GestionOfertas";
import GestionEmpleados from "./pages/GestioEmpleados";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

import { Footer } from './components/Footer';
import { AuthProvider } from "./context/AuthContext";
import EstadoOfertas from "./pages/EstadoOfertas";
import Empleados from "./pages/Empleados";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/gestion-empleados" element={<Empleados />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
