import React from 'react';

const Pokemon = (props) => {
  const { pokeId } = props;
  const url = `https://img.pokemondb.net/artwork/${pokeId}.jpg`;
  return (
    <img src={url} alt="pokemon" className="pokemon" />
  );
};

export default Pokemon;
