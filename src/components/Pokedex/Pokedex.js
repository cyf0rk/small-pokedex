import { useState } from 'react';
import { usePokemons } from '../../common/context/PokemonsContext';

import PokemonPopup from './PokemonPopup';

import {
  PokedexTitle,
  PokedexContainer,
  PokemonsList,
  PokemonContainer,
  PokemonImage,
  PokemonName,
  PokemonIndex,
  Info,
  InfoParagraph,
  InfoSpan,
} from './PokedexStyled';

const Pokedex = () => {
  const pokemons = usePokemons();

  const [popup, togglePopup] = useState(false);
  const [popupItem, changePopupItem] = useState({});

  const togglePopupHandler = (pokemon) => {
    changePopupItem(pokemon);
    togglePopup(true);
  };

  return (
    <PokedexContainer>
      <PokedexTitle>Pokedex</PokedexTitle>
      <PokemonsList>
        {pokemons.length > 0 &&
          pokemons.map((pokemon, id) => (
            <PokemonContainer
              key={id}
              onClick={() => togglePopupHandler(pokemon)}
            >
              <PokemonImage>{pokemon.species.name}</PokemonImage>
              <PokemonIndex>#{pokemon.id}</PokemonIndex>
              <PokemonName>{pokemon.species.name}</PokemonName>
              <Info>
                <InfoParagraph>
                  Type:
                  {pokemon.types.map((type, id) => (
                    <InfoSpan key={id}>{type.type.name}</InfoSpan>
                  ))}
                </InfoParagraph>
              </Info>
            </PokemonContainer>
          ))}
      </PokemonsList>
      {popup && (
        <PokemonPopup popupItem={popupItem} togglePopup={togglePopup} />
      )}
    </PokedexContainer>
  );
};

export default Pokedex;
