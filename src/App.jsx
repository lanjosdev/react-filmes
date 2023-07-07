// Funcionalidades:
import { BrowserRouter } from "react-router-dom";

// Componentes:
import { Header } from "./components/Header";
import { AppRoutes } from "./routes";

// Estilo Global:
import './styles/global.scss';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}