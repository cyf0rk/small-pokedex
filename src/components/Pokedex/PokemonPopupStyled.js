import styled from 'styled-components';

const Popup = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const PopupContainer = styled.div`
  z-index: 1;
  position: relative;
  width: 400px;
  height: 550px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
`;

const CloseButton = styled.button`
  all: unset;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 1.7rem;
  cursor: pointer;
`;

export { Popup, PopupContainer, CloseButton };
