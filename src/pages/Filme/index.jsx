// Funcionalidades:
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// service:
import api from "../../services/api";

// Estilo:
import './filme.css'


export default function Filme() {
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
      async function carregaFilme() {
        await api.get(`/movie/${id}`, {
          params:{
            api_key: "28fc232cc001c31e8a031f419d0a14ca",
            language: "pt-BR",
          }
        })
        .then((resposta)=>{
          setFilme(resposta.data);
          setLoading(false);
        })
        .catch(()=>{
          console.log('FILME NÃO ENCONTRADO');
          setLoading(false);
        })
      }
      carregaFilme();
    }, [])

    return (
      <main class='container-filme'>
        <div className="grid">
          {loading ? (
            <h2>Carregando...</h2>
          ) : (
            <>
            <h1>{filme.title}</h1>
            <img className="capa-filme" src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={`Capa do filme ${filme.title}`} />

            <div className="info-filme">
              <div className="text">
                <h2>Sinopse</h2>
                <p>{filme.overview}</p>
              </div>
              <div className="poster">
                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={`Capa do filme ${filme.title}`} />
                <span>Avaliação: {filme.vote_average} / 10</span>
              </div>
            </div>
            </>
          )}
        </div> 
      </main>
    );
}