// Funcionalidades:
import { BrowserRouter } from "react-router-dom";

// Componentes:
import { Header } from "./components/Header";
import { AppRoutes } from "./routes";

// Estilo:
import './styles/index.css';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}