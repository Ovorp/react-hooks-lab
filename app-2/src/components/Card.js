import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from './Image';

export default function Card(props) {
  const [pokemonData, setPokemonData] = useState();
  useEffect(() => {
    async function pokemonStuff() {
      const result = await axios
        .get(`${props.pokemon.url}`)
        .catch((err) => console.log(err));

      setPokemonData(result.data);
    }
    pokemonStuff();
  }, [props.pokemon]);

  return (
    <div className="card">
      {pokemonData ? (
        <>
          <h2 className="text">{pokemonData.name}</h2>
          <p className="text">
            {pokemonData.types.map((val) => (
              <>{`${val.type.name} `}</>
            ))}
          </p>
          <Image pokemonImage={pokemonData.sprites.front_default} />
        </>
      ) : null}
    </div>
  );
}
