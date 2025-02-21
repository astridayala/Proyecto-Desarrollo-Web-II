import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderCliente } from './components/HeaderCliente';
import { Footer } from './components/Footer';
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import HomeCliente from "./pages/HomeCliente";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import HomeAdminEmpresa from "./pages/HomeAdminEmpresa";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/footer" element={<Footer />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homeCliente" element={<HomeCliente />} />
          <Route path="/headerCliente" element={<HeaderCliente />} />
          <Route path="/homeAdminEmpresa" element={<HomeAdminEmpresa />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
