// Funcionalidades:
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// service:
import api from "../../services/api";

// Estilo:
import './filme.scss'


export default function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();
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
          navigate('../NotFound');
        })
      }
      carregaFilme();
    }, [navigate, id]);

    function onSalvarFilme() {
      const minhaLista = localStorage.getItem('primeflix');
      let filmesSalvos = JSON.parse(minhaLista) || [];

      const temFilme = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filme.id); // true OR false

      if(temFilme) {
        alert('ESSE FILME JÁ ESTÁ SALVO!');
        return;
      } else {
        filmesSalvos.push(filme);
        localStorage.primeflix = JSON.stringify(filmesSalvos);
        alert('SALVOOUU');
      }
    }


    return (
      <main class='container-filme'>
        <div className="grid">
          {loading ? (
            <h2>Carregando Detalhes do Filme...</h2>
          ) : (
            <>
            <h1>{filme.title}</h1>
            <img className="capa-filme" src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={`Capa do filme ${filme.title}`} />

            <div className="info-filme">
              <div className="text">
                <h2>Sinopse</h2>
                <p>{filme.overview}</p>

                <h2>Genero:</h2>
                <div className="generos">
                  {filme.genres.map((genero)=>(
                    <span className="genero">{genero.name}</span>
                  ))}
                </div>

                <div className="area-butoes">
                  <button onClick={onSalvarFilme}>Salvar</button>
                  <a href={`https://www.youtube.com/results?search_query=${filme.title} trailer`} target="blank" rel="noreferrer">Trailer
                  </a>
                </div>
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