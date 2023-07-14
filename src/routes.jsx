// Funcionalidades:
import { Routes, Route } from "react-router-dom";

// Componentes / Pages :
import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import NotFound from './pages/NotFound';

export function AppRoutes() {
    return (
        <Routes>
            {/* Filmes */}
            <Route path="/" element={ <Home/> }/>
            <Route path="/filme/:id" element={ <Filme/> }/>
            {/* Salvos */}
            <Route path="/favoritos" element={ <Favoritos /> } />

            
            <Route path="*" element={ <NotFound/> }/>
        </Routes>
    )
}