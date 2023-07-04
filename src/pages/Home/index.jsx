// Funcionalidades:
import { useState, useEffect } from "react";
import api from '../../services/api';
import { Link } from "react-router-dom";

// Estilo:
import './home.css';

/* URL DA API (desconsiderando a base): 
movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR
*/

export default function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(()=> {
      async function carregaFilmes() {
        const resposta = await api.get("movie/now_playing", {
          params: {
            api_key: "28fc232cc001c31e8a031f419d0a14ca",
            language: "pt-BR",
            page: 1,
          }
        })
        
        setFilmes(resposta.data.results.slice(0, 10));
      }
      carregaFilmes();
    }, []);


    return (
      <main className="container-home">
        <h1 className="title-page">Filmes em Cartaz</h1>

        <div className="container-filmes">
          <div className="filmes-list">
            {filmes.map((filme)=> (
              <article key={filme.id}>
                <h2 className="title-filme">{filme.title}</h2>
                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={`Poster do filme ${filme.title}`} />
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            ))}
          </div>
        </div>
      </main> 
    );
}