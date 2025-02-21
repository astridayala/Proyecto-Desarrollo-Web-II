import { Link } from "react-router-dom";
import { HeaderCliente } from "../components/HeaderCliente";
import { useAuth } from "../context/AuthContext";

const HomeCliente = () => {
  const { user } = useAuth();
  return (
    <HeaderCliente/>
  );
};

export default HomeCliente;