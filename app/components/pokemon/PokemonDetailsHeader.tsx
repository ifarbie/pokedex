import { Form } from 'react-router';
import type { Pokemon } from '~/types/Pokemon';

type PokemonDetailsHeader = {
  pokemon: Pokemon;
  isFavorite: boolean;
};

const PokemonDetailsHeader = ({ isFavorite, pokemon }: PokemonDetailsHeader) => {
  return (
    <div className='mb-8 flex items-end justify-between'>
      <div>
        <p className='text-sm font-semibold text-gray-400'>#{String(pokemon.id).padStart(3, '0')}</p>

        <h1 className='mt-1 text-4xl font-bold capitalize text-gray-900'>{pokemon.name}</h1>
      </div>

      <Form method='post'>
        <input type='hidden' name='action' value='favorite' />
        <input type='hidden' name='pokemon' value={JSON.stringify(pokemon)} />

        <button type='submit' className='flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-xl transition text-red-500 cursor-pointer hover:bg-red-50'>
          {isFavorite ? '♥' : '♡'}
        </button>
      </Form>
    </div>
  );
};

export default PokemonDetailsHeader;
