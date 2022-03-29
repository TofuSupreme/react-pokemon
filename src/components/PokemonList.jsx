import React from 'react';
import Pokemon from './Pokemon';

const PokemonList = (props) => {
  const { changeSelectPokemon } = props;
  return (
    <div className="pokemon-list">
      <Pokemon pokeId="pichu" />
      <Pokemon pokeId="raichu" />
      <Pokemon pokeId="charmander" />
      <Pokemon pokeId="ninetales" />
      <Pokemon pokeId="vulpix" />
      <Pokemon changeSelectPokemon={changeSelectPokemon} />
    </div>
  );
};

export default PokemonList;
