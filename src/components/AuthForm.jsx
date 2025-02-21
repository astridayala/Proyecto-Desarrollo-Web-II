import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faKey } from "@fortawesome/free-solid-svg-icons";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import logo from "../assets/CM.png";
import "../firebase/config"; // Asegúrate de importar tu configuración de Firebase

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(""); // Estado para mensajes de error
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Limpiar errores previos

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/home"); // Redirigir a la página principal después de iniciar sesión
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/home"); // Redirigir después del registro
      }
    }
    catch (error) {
      console.error("Código de error de Firebase:", error.code);
    
      switch (error.code) {
        case "auth/wrong-password":
          setErrorMessage("La contraseña es incorrecta.");
          break;
        case "auth/user-not-found":
          setErrorMessage("No existe una cuenta con este correo.");
          break;
        case "auth/email-already-in-use":
          setErrorMessage("Este correo ya está registrado.");
          break;
        case "auth/invalid-email":
          setErrorMessage("El correo no es válido.");
          break;
        case "auth/weak-password":
          setErrorMessage("La contraseña debe tener al menos 6 caracteres.");
          break;
        case "auth/too-many-requests":
          setErrorMessage("Demasiados intentos fallidos. Inténtalo más tarde o restablece tu contraseña.");
          break;
        default:
          setErrorMessage(`Ocurrió un error: ${error.message}`);
      }
    }    
  };

  return (
    <div className="form-container">
      <div className="formulario">
        <div className="imgContainer">
          <img src={logo} alt="Logo" className="logo-CM"/>
        </div>
        <h2 className="head">{isLogin ? "Iniciar sesión" : "Registrarse"}</h2>

        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Mostrar errores */}

        <form onSubmit={handleSubmit} className="loginForm">
          <div className="inputContainer">
            <FontAwesomeIcon icon={faAt} className="iconos" />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              required
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
  );
};

export default AuthForm;
