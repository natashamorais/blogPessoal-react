import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import ListaTemas from "./components/Temas/ListaTemas/ListaTemas";
import FormularioTema from "./components/Temas/FormularioTema/FormularioTema";
import DeletarTema from "./components/Temas/DeletarTema/DeletarTema";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/temas" element={<ListaTemas />} />
          <Route path="/cadastroTema" element={<FormularioTema />} />
          <Route path="/editarTema/:id" element={<FormularioTema />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
