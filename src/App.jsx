import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer';
import GestionOfertas from "./pages/GestionOfertas";
import GestionEmpleados from "./pages/GestioEmpleados";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/gestion-empleados" element={<GestionEmpleados />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
