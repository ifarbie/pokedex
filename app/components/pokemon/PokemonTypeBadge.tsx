import type { PokemonType } from '~/types/Pokemon';
import { pokemonTypeColors } from '~/utils/pokemonTypeColors';

interface PokemonTypeBadgeProps {
  type: PokemonType;
}

const PokemonTypeBadge = ({ type }: PokemonTypeBadgeProps) => {
  return (
    <span key={type} className={`capitalize rounded-full px-4 py-2 text-sm font-medium ${pokemonTypeColors[type]}`}>
      {type}
    </span>
  );
};

export default PokemonTypeBadge;
