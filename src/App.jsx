import './App.css';
import useFetchCharacters from './hooks/useFetchCharacters'
import RickCard from './components/RickCard';
import PokemonCard from './components/PokemonCard';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  

  const { data: dataPokemon } = useFetchCharacters(urlPokemon)
  const { data: dataRick } = useFetchCharacters(urlRick)


  return (
    <>
      {dataRick && <RickCard character={dataRick}/>}

      {dataPokemon && <PokemonCard pokemon={dataPokemon}/>}
      </>
  );
}

export default App;
