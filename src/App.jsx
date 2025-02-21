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
import GestionEmpleados from "./pages/GestioEmpleados";
import GestionEmpresas from "./pages/GestionEmpresas";


import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

import { Footer } from './components/Footer';
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={ <Login/> }/>
          <Route path="/register" element={ <Register /> } />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
