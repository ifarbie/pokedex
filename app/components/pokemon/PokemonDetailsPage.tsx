import { Form, Link } from 'react-router';
import type { Pokemon, PokemonType } from '~/types/Pokemon';
import BackToHomeButton from '../BackToHomeButton';
import PokemonTypeBadge from './PokemonTypeBadge';
import PokemonDetailsHeader from './PokemonDetailsHeader';
import PokemonOverview from './PokemonOverview';
import PokemonStats from './PokemonStats';

type PokemonStat = {
  name: string;
  value: number;
};

type PokemonDetailsPageProps = {
  pokemon: Pokemon;
  isFavorite: boolean;
};

export default function PokemonDetailsPage({ pokemon, isFavorite }: PokemonDetailsPageProps) {
  return (
    <main className='min-h-screen bg-gray-50'>
      <div className='mx-auto max-w-6xl px-6 py-10'>
        {/* Back */}
        <BackToHomeButton />

        {/* Header */}
        <PokemonDetailsHeader isFavorite={isFavorite} pokemon={pokemon} />

        {/* Main Content  */}
        {/* Overview Tab  */}
        <PokemonOverview pokemon={pokemon} />

        {/* Stats Tab  */}
        <PokemonStats stats={pokemon.stats} />
      </div>
    </main>
  );
}
