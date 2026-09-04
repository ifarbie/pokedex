import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
    index('pages/Home.tsx'), 
    route('pokemon/:id', 'pages/pokemon/PokemonDetails.tsx'),
    route('favorites', 'pages/Favorite.tsx'),
    route('api/pokemons-load-more', 'pages/api/PokemonLoadMore.tsx'),
] satisfies RouteConfig;
