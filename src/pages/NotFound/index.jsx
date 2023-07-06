// Funcionalidades:
import { Link } from "react-router-dom";

// Estilo:
import './notfound.css'


export default function NotFound() {
    return (
      <main className="container-notfound">
        <h1>404</h1>
        <h2>Página não encontrada!</h2>
        <Link to="/">Volte para o Inicio</Link>
      </main>
    );
}