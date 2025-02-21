import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderCliente } from './components/HeaderClient';
import { Footer } from './components/Footer';
import { HeaderGeneralAdmin } from "./components/HeaderGeneralAdmin";

function App() {
  return (
    <Router>
      <HeaderGeneralAdmin />
      <Footer />
    </Router>
  );
}

export default App;
