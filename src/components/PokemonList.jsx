import React from 'react';
import Pokemon from './Pokemon';

const PokemonList = () => {
  return (
    <div className="pokemon-list">
      <Pokemon pokeId="pichu" />
      <Pokemon pokeId="raichu" />
      <Pokemon pokeId="charmander" />
      <Pokemon pokeId="ninetales" />
      <Pokemon pokeId="vulpix" />
    </div>
  );
};

export default PokemonList;
