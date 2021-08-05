import { useRef, useState, createContext, useContext } from 'react';

const PopupModalContext = createContext({});

export const usePopupModal = () => useContext(PopupModalContext);

const PopupModalProvider = ({ children }) => {
  const popupRef = useRef();

  const [popup, togglePopup] = useState(false);
  const [popupItem, changePopupItem] = useState({});

  const togglePopupHandler = (pokemon) => {
    changePopupItem(pokemon);
    togglePopup(true);
  };

  const closePopup = (e) => {
    e.target === popupRef.current && togglePopup(false);
  };

  return (
    <PopupModalContext.Provider
      value={{
        popup,
        popupItem,
        popupRef,
        togglePopup,
        togglePopupHandler,
        closePopup,
      }}
    >
      {children}
    </PopupModalContext.Provider>
  );
};

export default PopupModalProvider;
