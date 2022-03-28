import React from 'react';
import Pokemon from './Pokemon';
import PokemonList from './PokemonList';
import SearchBar from './SearchBar';

const App = () => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-pokemon">
        <Pokemon  />
        </div>
        </div>
        <div className="right-scene">
          <PokemonList pokemon="Pikachu, I choose you!"/>
          <PokemonList pokemon="Pikachu, I choose you!"/>
          <PokemonList pokemon="Pikachu, I choose you!"/>
          </div>
    </div>
  );
};

export default App;
