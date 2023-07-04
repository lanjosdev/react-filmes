// Funcionalides:
import { NavLink, Link } from 'react-router-dom';

// Estilo:
import './header.css';

export function Header() {
    return (
        <header>
            <Link className='logo' to="/">Prime Flix</Link>
            <nav>
                <NavLink className='favoritos' to="/favoritos">Meus filmes</NavLink>
            </nav>
        </header>
    )
}