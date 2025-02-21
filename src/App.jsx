import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer';
import GestionOfertas from "./pages/GestionOfertas";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/gestion-ofertas" element={<GestionOfertas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
