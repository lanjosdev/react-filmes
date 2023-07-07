// Funcionalides:
import { NavLink, Link } from 'react-router-dom';

// Estilo:
import './header.scss';

export function Header() {
    return (
        <header>
            <div className="grid">
                <Link className='logo' to="/">Prime Flix</Link>
                <nav>
                    <NavLink className='favoritos' to="/favoritos">Meus filmes</NavLink>
                </nav>
            </div>
        </header>
    )
}