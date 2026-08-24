import type { PokemonData } from '~/types/Pokemon';
import HomePokemonLists from './HomePokemonLists';
import HomeHeroSection from './HomeHeroSection';

type HomePageProps = {
  pokemons: PokemonData[];
};

export default function HomePage({ pokemons }: HomePageProps) {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero */}
      <HomeHeroSection />

      {/* Pokemon Lists */}
      <HomePokemonLists pokemons={pokemons} />
    </div>
  );
}
