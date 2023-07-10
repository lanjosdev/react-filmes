// Funcionalidades:
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// Estilo:
import './notfound.scss'


export default function NotFound() {
    toast.error('Página não encontrado!');    

    return (
      <main className="container-notfound">
        <h1>404</h1>
        <h2>Página não encontrada!</h2>
        <Link to="/">Volte para o Inicio</Link>
      </main>
    );
}