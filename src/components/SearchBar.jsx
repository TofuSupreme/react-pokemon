import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    const { fetchPokemon } = props;
    fetchPokemon(event.currentTarget.value);
  };
  return (
    <input type="text" className="form-search form-control" placeholder="Type that pokemon!" onChange={handleChange} />
  );
};

export default SearchBar;
