import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';

import './App.css';
import axios from 'axios';

function App() {
  const [baseData, setBaseData] = useState({});
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemonApi() {
      const pokemonList = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/`)
        .catch((err) => console.log(err));
      setBaseData(pokemonList.data);
      setPokemon(pokemonList.data.results);
    }
    getPokemonApi();
  }, []);

  const next = async () => {
    const result = await axios
      .get(`${baseData.next}`)
      .catch((err) => console.log(err));

    setBaseData(result.data);
    setPokemon([...pokemon, ...result.data.results]);
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={prev}>Previous</button> */}
        <h1>Pokemon List</h1>
      </header>
      <div className="container">
        <div className="grid">
          {pokemon
            ? pokemon.map((val) => {
                return (
                  <>
                    <Card pokemon={val} />
                  </>
                );
              })
            : null}
        </div>
        <button onClick={next}>More</button>
      </div>
    </div>
  );
}

export default App;
