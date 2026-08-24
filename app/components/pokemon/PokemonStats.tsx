import type { PokemonStat } from '~/types/Pokemon';

type PokemonStatsProps = {
  stats: PokemonStat[];
};

const PokemonStats = ({ stats }: PokemonStatsProps) => {
  return (
    <div className='mt-10'>
      <nav className='flex gap-6 border-b border-gray-200'>
        <div className='border-b-2 border-red-500 px-1 py-4 text-sm font-semibold text-red-500'>Stats</div>
      </nav>

      {/* Stats */}
      <div className='mt-6 rounded-3xl border border-gray-200 bg-white p-8'>
        <h2 className='text-xl font-bold text-gray-900'>Base Stats</h2>

        <div className='mt-6 space-y-5'>
          {stats?.map((stat) => (
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
    </div>
  );
};

export default PokemonStats;
