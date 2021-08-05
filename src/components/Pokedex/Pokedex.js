import { usePokemons } from '../../common/context/PokemonsContext';
import { usePopupModal } from '../../common/context/PopupModalContext';

import PokemonInfo from './PokemonInfo';
import PokemonPopup from './PokemonPopup';

import {
  PokedexTitle,
  PokedexContainer,
  PokemonsList,
  PokemonContainer,
} from './PokedexStyled';

const Pokedex = () => {
  const pokemons = usePokemons();
  const { popup, togglePopupHandler } = usePopupModal();

  return (
    <PokedexContainer>
      <PokedexTitle>Pokédex</PokedexTitle>
      <PokemonsList>
        {pokemons.length > 0 &&
          pokemons.map((pokemon, id) => (
            <PokemonContainer
              key={id}
              onClick={() => togglePopupHandler(pokemon)}
            >
              <PokemonInfo pokemon={pokemon} />
            </PokemonContainer>
          ))}
      </PokemonsList>
      {popup && <PokemonPopup />}
    </PokedexContainer>
  );
};

export default Pokedex;
