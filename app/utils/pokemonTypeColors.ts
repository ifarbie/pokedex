import type { PokemonType } from "~/types/Pokemon";

export const pokemonTypeColors: Record<PokemonType, string> = {
  normal: "bg-gray-100 text-gray-700",
  fire: "bg-red-100 text-red-700",
  water: "bg-blue-100 text-blue-700",
  electric: "bg-yellow-100 text-yellow-700",
  grass: "bg-green-100 text-green-700",
  ice: "bg-cyan-100 text-cyan-700",
  fighting: "bg-orange-100 text-orange-700",
  poison: "bg-purple-100 text-purple-700",
  ground: "bg-amber-100 text-amber-700",
  flying: "bg-indigo-100 text-indigo-700",
  psychic: "bg-pink-100 text-pink-700",
  bug: "bg-lime-100 text-lime-700",
  rock: "bg-stone-100 text-stone-700",
  ghost: "bg-violet-100 text-violet-700",
  dragon: "bg-indigo-100 text-indigo-700",
  dark: "bg-gray-800 text-gray-100",
  steel: "bg-slate-200 text-slate-700",
  fairy: "bg-pink-100 text-pink-700",
};