import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HeaderGeneral } from "./components/HeaderGeneral";
import { HeaderCliente } from './components/HeaderCliente';
import { HeaderEmpleado } from "./components/HeaderEmpleado"
import { HeaderAdminOfertante } from "./components/HeaderAdminOfertante";
import { HeaderGeneralAdmin } from "./components/HeaderGeneralAdmin"

import HomeCliente from "./pages/HomeCliente";
import HomeAdminEmpresa from "./pages/HomeAdminEmpresa";

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
          <Route path="/login" element={<Login />}/>
          <Route path="/footer" element={<Footer />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/homeCliente" element={<HomeCliente />}/>
          <Route path="/headerGeneral" element={<HeaderGeneral />}/>
          <Route path="/headerCliente" element={<HeaderCliente />}/>
          <Route path="/headerEmpleado" element={<HeaderEmpleado/>}/>
          <Route path="/homeAdminEmpresa" element={<HomeAdminEmpresa />}/>
          <Route path="/headerGeneralAdmin" element={<HeaderGeneralAdmin />}/>
          <Route path="/headerAdminOfertante" element={<HeaderAdminOfertante />}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
