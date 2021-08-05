import { usePopupModal } from '../../common/context/PopupModalContext';

import PokemonInfo from './PokemonInfo';

import { Popup, PopupContainer, CloseButton } from './PokemonPopupStyled';

const PokemonPopup = () => {
  const { popup, popupRef, popupItem, togglePopup, closePopup } =
    usePopupModal();

  return (
    <Popup ref={popupRef} onClick={closePopup}>
      <PopupContainer>
        <CloseButton onClick={() => togglePopup(false)}>&#120;</CloseButton>
        <PokemonInfo pokemon={popupItem} popup={popup} />
      </PopupContainer>
    </Popup>
  );
};

export default PokemonPopup;
