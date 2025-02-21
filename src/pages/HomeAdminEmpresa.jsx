import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const HomeCliente = () => {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ofertas Disponibles</h1>
      <p>Aquí irán las ofertas clasificadas por rubro.</p>
      {user ? (
        <Link to="/profile" className="text-blue-500">Ir al perfil</Link>
      ) : (
        <Link to="/login" className="text-blue-500">Iniciar sesión</Link>
      )}
    </div>
  );
};

export default HomeCliente;
