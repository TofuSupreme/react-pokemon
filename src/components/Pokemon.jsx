import React from 'react';

const Pokemon = () => {
  const url = 'https://img.pokemondb.net/artwork/pikachu.jpg'
  return (
      <img src={url} alt="pokemon" className="pokemon" />
  );
};

export default Pokemon;
