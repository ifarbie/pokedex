import { Link } from 'react-router';

export default function FavoritePage({ favoritePokemons }: any) {
  const isEmpty = favoritePokemons.length === 0;

  return (
    <main className='min-h-screen bg-gray-50'>
      <div className='mx-auto max-w-6xl px-6 py-10'>
        {/* Header */}
        <div className='mb-8'>
          <Link to='/' className='text-sm font-medium text-gray-500 transition hover:text-gray-900'>
            ← Back to Home
          </Link>

          <h1 className='mt-6 text-4xl font-bold text-gray-900'>Favorites</h1>

          <p className='mt-2 text-gray-500'>Your favorite Pokémon</p>
        </div>

        {/* Empty State */}
        {isEmpty ? (
          <div className='flex min-h-100 flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white px-6 text-center'>
            {/* Icon */}
            <div className='flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-4xl text-red-400'>♡</div>

            <h2 className='mt-6 text-2xl font-bold text-gray-900'>No favorite Pokémon yet</h2>

            <p className='mt-2 max-w-md text-gray-500'>You haven't added any Pokémon to your favorites. Start exploring and save your favorite Pokémon here!</p>

            <Link to='/#explore' className='mt-6 rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600'>
              Explore Pokémon
            </Link>
          </div>
        ) : (
          /* Pokemon List */
          <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
            {favoritePokemons.map((pokemon: any) => (
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
                  {pokemon.types.map((type: any) => (
                    <span key={type} className='rounded-full bg-gray-100 px-3 py-1 text-xs font-medium capitalize text-gray-600'>
                      {type}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
