import { Link } from "react-router-dom";
import { HeaderCliente } from "../components/HeaderClient";
import { useAuth } from "../context/AuthContext";

const HomeCliente = () => {
  const { user } = useAuth();
  return (
    <HeaderCliente/>
  );
};

export default HomeCliente;