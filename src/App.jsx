import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderCliente } from './components/HeaderClient';
import { Footer } from './components/Footer';
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
