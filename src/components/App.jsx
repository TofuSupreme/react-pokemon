import React from 'react';
import Pokemon from './Pokemon';
import PokemonList from './PokemonList';
import SearchBar from './SearchBar';

import Pokedex from 'pokedex-promise-v2';


const App = () => {
  const P = new Pokedex();

  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-pokemon">
          <Pokemon pokeId="pikachu" />
        </div>
      </div>
      <div className="right-scene">
        <PokemonList />
      </div>
    </div>
  );
};

export default App;
