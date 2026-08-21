import { formatHeight } from '~/utils/formatHeight';
import { formatWeight } from '~/utils/formatWeight';

type PokemonData = {
  name: string;
  url: string;
};

type PokemonAbility = {
  name: string;
  url: string;
};

type PokemonType = {
  name: string;
  url: string;
};

type PokemonStat = {
  base_stat: number;
  stat:{
    name: string
  }
}

export async function getPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=27');

  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon');
  }

  const dataJson = await response.json();

  let pokemonDatas = dataJson.results;
  pokemonDatas = dataJson.results.map((pokemon: PokemonData) => {
    const id = pokemon.url.split('/').at(-2);

    return {
      ...pokemon,
      id,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    };
  });

  return pokemonDatas;
}

export async function getPokemonById(pokemonId: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon');
  }

  let pokemonData = await response.json();

  pokemonData = {
    id: pokemonId,
    name: pokemonData.name,
    abilities: pokemonData.abilities.map(({ ability }: { ability: PokemonAbility }) => ability.name),
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
    types: pokemonData.types.map(({ type }: { type: PokemonType }) => type.name),
    height: formatHeight(pokemonData.height),
    weight: formatWeight(pokemonData.weight),
    stats: pokemonData.stats.map(({ base_stat, stat }: PokemonStat) => ({
      name: stat.name,
      value: base_stat
    })),
  };

  return pokemonData;
}
