import React, { useState } from 'react';
import Pokemon from './Pokemon';
import PokemonList from './PokemonList';
import SearchBar from './SearchBar';

const Pokedex = require('pokedex');

const App = () => {
  const pokeIdSelected = 'raichu';
  const fetchPokemon = (pokeId) => {
    const P = new Pokedex();
    console.log(P.pokemon(pokeId));
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchPokemon={fetchPokemon} />
        <div className="selected-pokemon">
          <Pokemon pokeId={pokeIdSelected} />
        </div>
      </div>
      <div className="right-scene">
        <PokemonList />
      </div>
    </div>
  );
};
export default App;
