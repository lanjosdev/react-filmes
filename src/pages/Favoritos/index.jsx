// Funcionalidades:
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Estilo:
import styles from './favoritos.module.scss';

export default function Favoritos() {
  const [meusFilmes, setMeusFilmes] = useState([]);

  useEffect(()=>{
    const filmesSalvos = localStorage.primeflix;
    if(typeof filmesSalvos === 'undefined') {
      setMeusFilmes([]);
    } else {
      setMeusFilmes(JSON.parse(filmesSalvos));
    }
    // setMeusFilmes(JSON.parse(filmesSalvos) || []); //parse conver string > array/JSON. Se não tiver nada "meusFilmes" recebe uma [] vazia
  }, []);

  function excluirFilme(id) {
    let filtroFilmes = meusFilmes.filter((filme)=> (filme.id !== id));

    setMeusFilmes(filtroFilmes);
    localStorage.primeflix = JSON.stringify(filtroFilmes);
  }


  return (
    <main className={styles.meusFilmes}>
      <div className="grid">
        <h1>Meus Filmes</h1>

        {meusFilmes.length === 0 && 
          <span>Você não possui nenhum filme salvo!</span>
        }

        <ul>
          {meusFilmes.map((filme)=>(
            <li key={filme.id}>
              <span>{filme.title}</span>

              <div>
                <Link to={`/filme/${filme.id}`}>
                  Ver detalhes
                </Link>
                <button onClick={()=> excluirFilme(filme.id)}>
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}