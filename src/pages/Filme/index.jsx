// Funcionalidades:
import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// service:
import api from "../../services/api";

// Estilo:
import './filme.scss'


export default function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    const [filmeSalvo, setFilmeSalvo] = useState(false);

    let listaLocal = localStorage.getItem('primeflix');
    let filmesSalvos = useMemo(()=> JSON.parse(listaLocal) || [], [listaLocal]);
    // console.log(filmesSalvos);


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
          setLoading(false);
          navigate('../NotFound');
        })
      }
      carregaFilme();
    }, [navigate, id]);

    useEffect(()=> {
      function checkFilmeSalvo() {
        const temFilme = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filme.id); // true OR false

        setFilmeSalvo(temFilme);
      }
      checkFilmeSalvo();
    }, [filme, filmesSalvos]);  



    function onSalvarFilme() {       
      filmesSalvos.push(filme);
      localStorage.primeflix = JSON.stringify(filmesSalvos);

      toast.success("Filme salvo com sucesso!");
      setFilmeSalvo(true);
    }

    function onRemoverFilme(id) {
      let filtroFilmes = filmesSalvos.filter((filme)=> (filme.id !== id));
      localStorage.primeflix = JSON.stringify(filtroFilmes);
    
      toast.success('Filme removido com sucesso!');
      setFilmeSalvo(false);
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
                  {filmeSalvo ? (
                    <button className="btn-delete" onClick={()=> onRemoverFilme(filme.id)}>Remover da Lista</button>
                  ): (
                    <button onClick={onSalvarFilme}>Salvar</button>
                  )}
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