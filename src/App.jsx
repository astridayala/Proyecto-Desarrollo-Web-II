import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderCliente } from './components/HeaderCliente';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <HeaderCliente />
      <Footer />
    </Router>
  );
}

export default App;
