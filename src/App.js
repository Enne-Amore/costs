import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import NavBar from "./components/layout/NavBar"
import Container from "./components/layout/Container"
import Footer from "./components/layout/Footer"

import Projetos from "./components/pages/Projetos"
import Empresa from "./components/pages/Empresa"
import Contato from "./components/pages/Contato"
import NovoProjeto from "./components/pages/NovoProjeto"
import Projeto from "./components/pages/Projeto"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
    
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/projetos" element={<Projetos />} />

            <Route path="/empresa" element={<Empresa />} />

            <Route path="/contato" element={<Contato />} />

            <Route path="/NovoProjeto" element={<NovoProjeto />} />

            <Route path="/projeto/:id" element={<Projeto />} />
          </Routes>
        </Container>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
