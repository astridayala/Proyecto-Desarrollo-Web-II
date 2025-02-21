import { Link } from "react-router-dom";
import { HeaderGeneralAdmin } from "../components/HeaderGeneralAdmin";
import { useAuth } from "../context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HomeAdmin = () => {
  const { user } = useAuth();
  return (
    <Router>
        <HeaderGeneralAdmin/>
      <Routes>
        <Route path="/gestion-empresas" element={<GestionEmpresas />} />
      <Route path="/gestion-empleados" element={<GestionEmpleados />} />
      </Routes>
      <Footer />
    </Router>

  );
};

export default HomeCliente;