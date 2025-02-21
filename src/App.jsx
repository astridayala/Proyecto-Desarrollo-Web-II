import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HeaderGeneral } from "./components/HeaderGeneral";
import { HeaderCliente } from './components/HeaderCliente';
import { HeaderEmpleado } from "./components/HeaderEmpleado"
import { HeaderAdminOfertante } from "./components/HeaderAdminOfertante";
import { HeaderGeneralAdmin } from "./components/HeaderGeneralAdmin"

import Home from "./pages/Home"
import HomeAdmin from "./pages/HomeAdmin";
import HomeCliente from "./pages/HomeCliente";
import HomeAdminEmpresa from "./pages/HomeAdminEmpresa";

import EstadoOfertas from "./pages/EstadoOfertas"

import GestionOfertas from "./pages/GestionOfertas";
import GestionEmpleados from "./pages/GestionEmpleados";
import GestionEmpresas from "./pages/GestionEmpresas";
import GestionClientes from "./pages/GestionClientes"
import GestionRubros from "./pages/GestionRubros";

import Login from "./pages/Login";
import Register from "./pages/Register";

import { AuthProvider } from "./context/AuthContext";
import Empleados from "./pages/Empleados";
import { Cupon } from "./components/Cupon";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeCliente" element={<HomeCliente/>} />
          <Route path="/homeAdmin" element={<HomeAdmin />} /> 
          <Route path="/homeAdminEmpresa" element={<HomeAdminEmpresa/>} />

          <Route path="/empleados" element={<Empleados/>} />
          <Route path="/estado-ofertas" element={<EstadoOfertas/>} />

          <Route path="/gestion-empresas" element={< GestionEmpresas />} />
          <Route path="/gestion-rubros" element={<GestionRubros/>} />
          <Route path="/gestion-clientes" element={<GestionClientes/>} />
          <Route path="/gestion-empleados" element={<GestionEmpleados/>} />
          <Route path="/gestion-ofertas" element={<GestionOfertas/>} />

          <Route path="/login" element={ <Login/> }/>
          <Route path="/register" element={ <Register /> } />

          <Route path="/cupon" element={<Cupon />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
