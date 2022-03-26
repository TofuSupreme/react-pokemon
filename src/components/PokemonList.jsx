import React from 'react';

const PokemonList = (props) => {
  const { pokemon } = props
  return (
    <div className="pokemon-list">
      {pokemon}
      </div>
  );
  };

export default PokemonList;
