import React from 'react';
import { Link } from 'react-router';
import type { PokemonData } from '~/types/Pokemon';

const HomePokemonCard = ({ pokemon }: { pokemon: PokemonData }) => {
  return (
    <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`} className='group overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg'>
      <div className='flex items-center justify-between'>
        <span className='text-sm font-medium text-gray-400'>#{String(pokemon.id).padStart(3, '0')}</span>
      </div>

      <div className='flex justify-center py-6'>
        <img src={pokemon.image} alt={pokemon.name} className='h-44 w-44 object-contain transition duration-300 group-hover:scale-110' />
      </div>

      <h3 className='text-xl font-bold capitalize text-gray-900'>{pokemon.name}</h3>

      <p className='mt-1 text-sm text-gray-400'>View Pokémon details →</p>
    </Link>
  );
};

export default HomePokemonCard;
