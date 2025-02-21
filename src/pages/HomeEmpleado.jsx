import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { HeaderEmpleado } from "../components/HeaderEmpleado";

const HomeEmpleado = () => {
  const { user } = useAuth();
  return (
    <>
        <HeaderEmpleado/>
    </>
  );
};

export default HomeEmpleado;