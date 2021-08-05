import {
  PokemonImage,
  PokemonName,
  PokemonIndex,
  Info,
  InfoParagraph,
  InfoSpan,
} from './PokemonInfoStyled';

const PokemonInfo = ({ pokemon, popup }) => {
  return (
    <>
      <PokemonImage>{pokemon.species.name}</PokemonImage>
      <PokemonIndex>#{pokemon.id}</PokemonIndex>
      <PokemonName>{pokemon.species.name}</PokemonName>
      <Info>
        <InfoParagraph>
          Type:
          {pokemon.types.map((type) => (
            <InfoSpan>{type.type.name}</InfoSpan>
          ))}
        </InfoParagraph>
        {popup && (
          <>
            <InfoParagraph>
              Abilities:
              {pokemon.abilities.map((ability) => (
                <InfoSpan>{ability.ability.name}</InfoSpan>
              ))}
            </InfoParagraph>
            <InfoParagraph>
              Forms:
              {pokemon.forms.map((form) => (
                <InfoSpan>{form.name}</InfoSpan>
              ))}
            </InfoParagraph>
            <InfoParagraph>
              Height:<InfoSpan>{pokemon.height}</InfoSpan>
            </InfoParagraph>
            <InfoParagraph>
              Weight:<InfoSpan>{pokemon.weight}</InfoSpan>
            </InfoParagraph>
          </>
        )}
      </Info>
    </>
  );
};

export default PokemonInfo;
