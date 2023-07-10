// Funcionalidades:
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Componentes:
import { Header } from "./components/Header";
import { AppRoutes } from "./routes";

// Estilo Global:
import './styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}