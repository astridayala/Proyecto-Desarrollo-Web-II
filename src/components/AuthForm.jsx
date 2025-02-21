import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faKey} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/CM.png";

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

  return (
    <>
    <div className="form-container">
        <div className="formulario">
            <div className="imgContainer">
                <img src={logo} alt="" className="logo-CM"/>
            </div>
            <h2 className="head">{isLogin ? "Iniciar sesión" : "Registrarse"}</h2>
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
                {isLogin ? "Ingresar" : "Registrarse"}
                </button>
            </form>
            <button className="boton" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
            </button>
        </div>
    </div>
    
    </>
  );
};

export default AuthForm;