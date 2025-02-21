import { Link } from "react-router-dom";
import { HeaderCliente } from "../components/HeaderCliente";
import { useAuth } from "../context/AuthContext";
import { HeaderGeneral } from "../components/HeaderGeneral";

const HomeCliente = () => {
  const { user } = useAuth();
  return (
    <HeaderGeneral/>
  );
};

export default HomeCliente;