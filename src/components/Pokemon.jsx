import React from 'react';

const Pokemon = (props) => {
  const { pokeId, changeSelectPokemon } = props;
  const url = `https://img.pokemondb.net/artwork/${pokeId}.jpg`;
  const handleClick = () => {
    changeSelectPokemon(pokeId);
  };
  return (
    <img src={url} alt="pokemon" className="pokemon" onClick={handleClick} />
  );
};

export default Pokemon;
