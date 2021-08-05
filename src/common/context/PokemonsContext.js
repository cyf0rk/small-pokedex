import { createContext, useContext, useEffect, useState } from 'react';
import fetchPokemon from '../api/fetchPokemon';

const PokemonsContext = createContext({});

export const usePokemons = () => useContext(PokemonsContext);

const PokemonsProvider = ({ children }) => {
  const [pokemons, addPokemons] = useState({});

  useEffect(() => {
    fetchPokemon().then((data) => addPokemons(data));
  }, []);

  return (
    <PokemonsContext.Provider value={pokemons}>
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
