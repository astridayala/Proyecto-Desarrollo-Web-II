import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faKey} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/CM.png";
import Register from "../pages/Register";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const { login, register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      isLogin ? await login(email, password) : await register(email, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  const navigate = useNavigate();

  return (
    <>
    <div className="form-container">
        <div className="formulario">
            <div className="imgContainer">
                <img src={logo} alt="" className="logo-CM"/>
            </div>
            <h2 className="head">Iniciar sesión</h2>
            <form onSubmit={handleSubmit} className="loginForm">
                <div className="inputContainer">
                    <FontAwesomeIcon icon={faAt} className="iconos" />
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="w-full p-2 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                <div className="inputContainer">
                    <FontAwesomeIcon icon={faKey} className="iconos" />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="w-full p-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="botonIngresar">
                    Ingresar
                </button>
            </form>
            <button className="boton" onClick={() => navigate("/register")}>
                ¿No tienes una cuenta? Regístrate
            </button>
        </div>
    </div>
    </>
  );
};

export default AuthForm;