export type PokemonStat = {
  name: string;
  value: number;
};

export type Pokemon = {
  id: string;
  image: string;
  name: string;
  url: string;
  abilities: string[];
  height: string;
  weight: string;
  types: string[];
  stats: PokemonStat[];
};
