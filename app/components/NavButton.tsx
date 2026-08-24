import React from 'react';
import { NavLink } from 'react-router';

type NavButtonProps = {
  to: string;
  children: React.ReactNode;
};

const NavButton = ({ to, children }: NavButtonProps) => {
  return (
    <NavLink to={to} className={({ isActive }) => `rounded-lg px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-red-50 text-red-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}>
      {children}
    </NavLink>
  );
};

export default NavButton;
