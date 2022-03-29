import React from 'react';
import Pokemon from './Pokemon';
import PokemonList from './PokemonList';
import SearchBar from './SearchBar';

const Pokedex = require('pokedex');

const App = () => {
  const P = new Pokedex();
  console.log(P.pokemon('pikachu'));
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
