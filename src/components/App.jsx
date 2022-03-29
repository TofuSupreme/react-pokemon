import React from 'react';
import Pokedex from 'pokedex-promise-v2';
import Pokemon from './Pokemon';
import PokemonList from './PokemonList';
import SearchBar from './SearchBar';

const P = new Pokedex();

const App = () => {
  const pokeSearch = P.getPokemonSpeciesByName("pikachu");


  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-pokemon">
          <Pokemon pokeId="pikachu" />
        </div>
      </div>
      <div className="right-scene">
        <PokemonList pokeSearch={pokeSearch} />
        <PokemonList />
      </div>
    </div>
  );
};

export default App;
