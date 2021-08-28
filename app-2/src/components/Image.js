import React from 'react';

export default function Image(props) {
  return (
    <div>
      <img src={`${props.pokemonImage}`} alt="pokemon" />
    </div>
  );
}
