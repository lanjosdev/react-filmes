// Funcionalidades:
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

// Componentes:
import { Header } from "./components/Header";



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}