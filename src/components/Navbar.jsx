import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navStyle = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
      isActive ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-700'
    }`;

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <NavLink to="/" className="text-xl font-extrabold tracking-tight text-indigo-700">NovaSpace</NavLink>
        <div className="flex items-center gap-2">
          <NavLink to="/" end className={navStyle}>Dashboard</NavLink>
          <NavLink to="/services" className={navStyle}>Services</NavLink>
        </div>
      </nav>
    </header>
  );
}
