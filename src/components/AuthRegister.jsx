import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser,faAt, faKey, faPhone, faLocationDot, faIdCard} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/CM.png";

const AuthRegister = () => {
  const { login, register } = useAuth();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [dui, setDui] = useState("")
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
                <h2 className="head">Registrarse</h2>
                <form onSubmit={handleSubmit} className="loginForm">
                    <div className="inputContainer">
                        <FontAwesomeIcon icon={faUser} className="iconos" />
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="w-full p-2 border rounded"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            />
                    </div>
                    <div className="inputContainer">
                        <FontAwesomeIcon icon={faUser} className="iconos" />
                        <input
                            type="text"
                            placeholder="Apellido"
                            className="w-full p-2 border rounded"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            />
                    </div>
                    <div className="inputContainer">
                        <FontAwesomeIcon icon={faPhone} className="iconos" />
                        <input
                            type="text"
                            placeholder="Telefono"
                            className="w-full p-2 border rounded"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            />
                    </div>
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
                        <FontAwesomeIcon icon={faLocationDot} className="iconos" />
                        <input
                            type="text"
                            placeholder="Direccion"
                            className="w-full p-2 border rounded"
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                            />
                    </div>
                    <div className="inputContainer">
                        <FontAwesomeIcon icon={faIdCard} className="iconos" />
                        <input
                            type="number"
                            placeholder="DUI"
                            className="w-full p-2 border rounded"
                            value={dui}
                            onChange={(e) => setDui(e.target.value)}
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
                </form>
                <button className="boton" onClick={() => setIsLogin(!isLogin)}>
                    Crear cuenta
                </button>
            </div>
        </div>
    </>
  );
};

export default AuthRegister;
