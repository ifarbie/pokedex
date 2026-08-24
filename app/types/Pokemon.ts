export type PokemonStat = {
  name: string;
  value: number;
};

export type PokemonData = {
  name: string;
  url: string;
  image: string;
  id: string;
}

export type Pokemon = {
  id: string;
  image: string;
  name: string;
  url: string;
  abilities: string[];
  height: string;
  weight: string;
  types: PokemonType[];
  stats: PokemonStat[];
};

export type PokemonType =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";