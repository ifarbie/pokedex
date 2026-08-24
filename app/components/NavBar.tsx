import { NavLink } from 'react-router';
import NavButton from './NavButton';

export default function NavBar() {
  return (
    <header className='sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur'>
      <nav className='mx-auto flex h-16 max-w-7xl items-center px-6 gap-10'>
        {/* Logo */}
        <NavLink to='/' className='flex items-center gap-2'>
          <div className='flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-lg'>🔴</div>
          <span className='text-xl font-bold tracking-tight text-gray-900'>PokéDex</span>
        </NavLink>

        {/* Navigation */}
        <div className='flex items-center gap-2'>
          <NavButton to='/'>Home</NavButton>
          <NavButton to='/favorites'>Favorite Pokémon</NavButton>
        </div>
      </nav>
    </header>
  );
}
