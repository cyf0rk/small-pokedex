import { useRef } from 'react';

import { Popup, PopupContainer, CloseButton } from './PokemonPopupStyled';
import {
  PokemonImage,
  PokemonName,
  PokemonIndex,
  Info,
  InfoParagraph,
  InfoSpan,
} from './PokedexStyled';

const PokemonPopup = ({ popupItem, togglePopup }) => {
  const popupRef = useRef();

  const closePopup = (e) => {
    e.target === popupRef.current && togglePopup(false);
  };
  return (
    <Popup ref={popupRef} onClick={closePopup}>
      <PopupContainer>
        <CloseButton onClick={() => togglePopup(false)}>&#120;</CloseButton>
        <PokemonImage>{popupItem.species.name}</PokemonImage>
        <PokemonIndex>#{popupItem.id}</PokemonIndex>
        <PokemonName>{popupItem.species.name}</PokemonName>
        <Info>
          <InfoParagraph>
            Abilities:
            {popupItem.abilities.map((ability) => (
              <InfoSpan>{ability.ability.name}</InfoSpan>
            ))}
          </InfoParagraph>
          <InfoParagraph>
            Forms:
            {popupItem.forms.map((form) => (
              <InfoSpan>{form.name}</InfoSpan>
            ))}
          </InfoParagraph>
          <InfoParagraph>
            Type:
            {popupItem.types.map((type) => (
              <InfoSpan>{type.type.name}</InfoSpan>
            ))}
          </InfoParagraph>
          <InfoParagraph>
            Height:<InfoSpan>{popupItem.height}</InfoSpan>
          </InfoParagraph>
          <InfoParagraph>
            Weight:<InfoSpan>{popupItem.weight}</InfoSpan>
          </InfoParagraph>
        </Info>
      </PopupContainer>
    </Popup>
  );
};

export default PokemonPopup;
