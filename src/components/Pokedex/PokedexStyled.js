import styled from 'styled-components';

const PokedexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PokemonsList = styled.ul`
  margin: 0 auto;
  display: block;
  max-width: 1200px;
  width: 100%;
`;

const PokemonContainer = styled.li`
  height: 200px;
  box-sizing: border-box;
  margin: 5px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  width: 100%;
  @media screen and (min-width: 431px) and (max-width: 630px) {
    width: 47%;
  }
  @media screen and (min-width: 631px) and (max-width: 830px) {
    width: 31%;
  }
  @media screen and (min-width: 831px) and (max-width: 1030px) {
    width: 32%;
  }
  @media screen and (min-width: 1031px) {
    width: 24%;
  }
`;

const PokemonImage = styled.div`
  display: flex;
  flex: 2;
  padding: 5px;
  background-color: #aeaeae;
  justify-content: center;
  align-items: center;
`;

const PokedexTitle = styled.h1`
  color: #919191;
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
};
