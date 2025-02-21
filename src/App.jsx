import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderCliente } from './components/HeaderClient';
import { Footer } from './components/Footer';
import { HeaderGeneralAdmin } from "./components/HeaderGeneralAdmin";
import { HeaderAdminOfertante } from "./components/HeaderAdminOfertante";
import { HeaderEmpleado } from "./components/HeaderEmpleado";

function App() {
  return (
    <Router>
      <HeaderEmpleado />
      <Footer />
    </Router>
  );
}

export default App;
