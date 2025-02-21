import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { HeaderEmpleado } from "../components/HeaderEmpleado";
import { Footer } from "../components/Footer";

const HomeCliente = () => {
  const { user } = useAuth();
  return (
    <>
        <HeaderEmpleado/>
        
        <Footer />
    </>
  );
};

export default HomeCliente;