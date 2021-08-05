import styled from 'styled-components';

const PokemonImage = styled.div`
  display: flex;
  flex: 2;
  padding: 5px;
  background-color: #aeaeae;
  justify-content: center;
  align-items: center;
`;

const PokemonName = styled.h3`
  text-transform: capitalize;
`;

const PokemonIndex = styled.p`
  font-size: 0.9rem;
  color: #aeaeae;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const InfoParagraph = styled.p`
  font-size: 1.1rem;
`;

const InfoSpan = styled.span`
  margin-left: 5px;
  @media screen and (max-width: 430px) {
    display: block;
  }
`;

export {
  PokemonImage,
  PokemonName,
  PokemonIndex,
  Info,
  InfoParagraph,
  InfoSpan,
};
