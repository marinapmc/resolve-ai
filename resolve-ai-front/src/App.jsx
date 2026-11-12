import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import Perfil from "./pages/Perfil.jsx";
import Checkout from "./pages/Checkout.jsx";
import Pedidos from "./pages/Pedidos.jsx";
import PrestadorPainel from "./pages/PrestadorPainel.jsx";
import PrestadorChamado from "./pages/PrestadorChamado.jsx";

// Route desenha cada elemento e o outlet troca o contexto mantendo o header e o footer
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/prestador" element={<PrestadorPainel />} />
        <Route path="/prestador/chamado" element={<PrestadorChamado />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
