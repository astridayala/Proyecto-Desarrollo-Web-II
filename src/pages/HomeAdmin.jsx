import { Link } from "react-router-dom";
import { HeaderGeneralAdmin } from "../components/HeaderGeneralAdmin";
import { useAuth } from "../context/AuthContext";

const HomeAdmin = () => {
  const { user } = useAuth();
  return (
    <HeaderCliente/>
  );
};

export default HomeCliente;