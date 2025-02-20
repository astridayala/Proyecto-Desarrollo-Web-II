import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderCliente } from './components/HeaderClient';
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
