import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { HeaderCliente } from './components/HeaderClient';
import { Footer } from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <HeaderCliente />
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
