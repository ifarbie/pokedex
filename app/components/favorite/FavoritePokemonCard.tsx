import React from 'react';
import { Link } from 'react-router';
import type { Pokemon } from '~/types/Pokemon';
import PokemonTypeBadge from '../pokemon/PokemonTypeBadge';

type FavoritePokemonCardProps = {
  pokemon: Pokemon;
};

const FavoritePokemonCard = ({ pokemon }: FavoritePokemonCardProps) => {
  return (
    <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`} className='group rounded-3xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg'>
      {/* Image */}
      <div className='flex h-52 items-center justify-center rounded-2xl bg-red-50'>
        <img src={pokemon.image} alt={pokemon.name} className='h-40 w-40 object-contain transition duration-300 group-hover:scale-110' />
      </div>

      {/* Info */}
      <div className='mt-5 flex items-start justify-between'>
        <div>
          <p className='text-sm font-semibold text-gray-400'>#{String(pokemon.id).padStart(3, '0')}</p>

          <h2 className='mt-1 text-xl font-bold capitalize text-gray-900'>{pokemon.name}</h2>
        </div>

        <span className='text-xl text-red-500'>♥</span>
      </div>

      {/* Types */}
      <div className='mt-4 flex gap-2'>
        {pokemon.types.map((type) => (
          <PokemonTypeBadge key={type} type={type} />
        ))}
      </div>
    </Link>
  );
};

export default FavoritePokemonCard;
