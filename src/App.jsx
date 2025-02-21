import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HeaderGeneral } from "./components/HeaderGeneral";
import { HeaderCliente } from './components/HeaderCliente';
import { HeaderEmpleado } from "./components/HeaderEmpleado"
import { HeaderAdminOfertante } from "./components/HeaderAdminOfertante";
import { HeaderGeneralAdmin } from "./components/HeaderGeneralAdmin"

import Home from "./pages/Home"
import HomeCliente from "./pages/HomeCliente";
import HomeAdminEmpresa from "./pages/HomeAdminEmpresa";
import GestionOfertas from "./pages/GestionOfertas";
import GestionEmpleados from "./pages/GestionEmpleados";
import GestionEmpresas from "./pages/GestionEmpresas";
import GestionClientes from "./pages/GestionClientes"
import GestionRubros from "./pages/GestionRubros";


import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

import { AuthProvider } from "./context/AuthContext";
import HomeAdmin from "./pages/HomeAdmin";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={ <Login/> }/>
          <Route path="/register" element={ <Register /> } />
          <Route path="/gestion-empresas" element={< GestionEmpresas />} />
          <Route path="/homeAdmin" element={<HomeAdmin />} /> 
          <Route path="/gestion-rubros" element={<GestionRubros/>} />
          <Route path="/gestion-clientes" element={<GestionClientes/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
