import { Form, Link, Outlet } from 'react-router';

type PokemonStat = {
  name: string;
  value: number;
};

export default function PokemonDetailsPage({ pokemon, isFavorite }: any) {
  return (
    <main className='min-h-screen bg-gray-50'>
      <div className='mx-auto max-w-6xl px-6 py-10'>
        {/* Back */}
        <Link to='/' className='mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900'>
          ← Back to Home
        </Link>

        {/* Header */}
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

        {/* Main Content */}
        <nav className='flex gap-6 border-b border-gray-200 mb-6'>
          <Link to='.' className='border-b-2 border-red-500 px-1 py-4 text-sm font-semibold text-red-500'>
            Overview
          </Link>
        </nav>

        <div className='grid gap-6 md:grid-cols-2'>
          {/* Pokemon Image */}
          <div className='flex min-h-105 items-center justify-center rounded-3xl bg-red-100'>
            <img src={pokemon.image} alt={pokemon.name} className='w-72 drop-shadow-2xl transition duration-300 hover:scale-105' />
          </div>

          {/* Pokemon Information */}
          <div className='rounded-3xl border border-gray-200 bg-white p-8'>
            <h2 className='text-xl font-bold text-gray-900'>Overview</h2>

            {/* Type */}
            <div className='mt-6'>
              <p className='mb-2 text-sm text-gray-400'>Type</p>

              <div className='flex gap-2'>
                {pokemon?.types?.map((type: string) => (
                  <span key={type} className='capitalize rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700'>
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Height & Weight */}
            <div className='mt-8 grid grid-cols-2 gap-4'>
              <div className='rounded-2xl bg-gray-50 p-4'>
                <p className='text-sm text-gray-400'>Height</p>

                <p className='mt-1 text-lg font-semibold text-gray-900'>{pokemon.height}</p>
              </div>

              <div className='rounded-2xl bg-gray-50 p-4'>
                <p className='text-sm text-gray-400'>Weight</p>

                <p className='mt-1 text-lg font-semibold text-gray-900'>{pokemon.weight}</p>
              </div>
            </div>

            {/* Abilities */}
            <div className='mt-8'>
              <p className='mb-3 text-sm text-gray-400'>Abilities</p>

              <div className='flex flex-wrap gap-2'>
                {pokemon?.abilities?.map((ability: string) => (
                  <span key={ability} className='rounded-lg bg-gray-100 px-3 py-2 text-sm capitalize text-gray-700'>
                    {ability.replace('-', ' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className='mt-10'>
          <nav className='flex gap-6 border-b border-gray-200'>
            <Link to='.' className='border-b-2 border-red-500 px-1 py-4 text-sm font-semibold text-red-500'>
              Stats
            </Link>
          </nav>

          {/* Stats */}
          <div className='mt-6 rounded-3xl border border-gray-200 bg-white p-8'>
            <h2 className='text-xl font-bold text-gray-900'>Base Stats</h2>

            <div className='mt-6 space-y-5'>
              {pokemon?.stats?.map((stat: PokemonStat) => (
                <div key={stat.name}>
                  {/* Label & Value */}
                  <div className='mb-2 flex items-center justify-between'>
                    <span className='text-sm font-medium text-gray-600 capitalize'>{stat.name.replace('-', ' ')}</span>

                    <span className='text-sm font-bold text-gray-900'>{stat.value}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className='h-3 overflow-hidden rounded-full bg-gray-100'>
                    <div
                      className='h-full rounded-full bg-red-500'
                      style={{
                        width: `${(stat.value / 255) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </main>
  );
}
