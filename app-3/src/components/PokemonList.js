import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PokemonList = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=898').then((res) => {
      setList(res.data.results);
    });
  }, []);

  return (
    <div className="grid">
      {list.map((pokemon) => {
        return (
          <Link key={pokemon.url} to={`/pokemon/${pokemon.name}`}>
            <h2 className="text">{pokemon.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};
export default PokemonList;
