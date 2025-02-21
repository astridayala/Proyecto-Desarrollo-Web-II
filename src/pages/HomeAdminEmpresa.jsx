import { Link } from "react-router-dom";
import { HeaderAdminOfertante } from "../components/HeaderAdminOfertante";
import { useAuth } from "../context/AuthContext";

const HomeAdminEmpresa = () => {
  const { user } = useAuth();

  return (
    <>
      <HeaderAdminOfertante/>
    </>
  );
};

export default HomeAdminEmpresa;
