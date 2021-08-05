const fetchPokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=12');
  const data = await response.json();

  const promiseArray = data.results.map((result) =>
    fetch(result.url).then((response) => response.json())
  );

  const pokemons = await Promise.all(promiseArray);

  return pokemons;
};

export default fetchPokemon;
