import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }) =>
  `relative text-[11px] tracking-[0.15em] uppercase transition-all duration-700
   after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:bg-[#1A1A1A] after:transition-all after:duration-700
   ${isActive
     ? 'text-[#1A1A1A] after:w-full'
     : 'text-[#8A8A8A] hover:text-[#1A1A1A] after:w-0 hover:after:w-full'}`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#FDFBF5]/90 backdrop-blur-md sticky top-0 z-50 border-t border-b border-[#EBE8E2]">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-5 md:py-6 flex justify-between items-center">
        <NavLink to="/" className="text-lg md:text-xl font-serif font-light tracking-[-0.01em] text-[#1A1A1A]">
          Rural Bazaar
        </NavLink>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <NavLink to="/" className={navLinkClass}>Products</NavLink>
          <span className="w-[1px] h-3 bg-[#D4D1CB]" />
          <NavLink to="/entrepreneurs" className={navLinkClass}>Entrepreneurs</NavLink>
          <span className="w-[1px] h-3 bg-[#D4D1CB]" />
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none group"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[0.5px] bg-[#1A1A1A] transition-all duration-700 ${isMenuOpen ? 'rotate-45 translate-y-[2px]' : ''}`}></span>
          <span className={`block w-5 h-[0.5px] bg-[#1A1A1A] transition-all duration-700 ${isMenuOpen ? 'opacity-0' : 'group-hover:opacity-60'}`}></span>
          <span className={`block w-5 h-[0.5px] bg-[#1A1A1A] transition-all duration-700 ${isMenuOpen ? '-rotate-45 -translate-y-[2px]' : ''}`}></span>
        </button>
      </nav>

      <div className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-[#EBE8E2] bg-[#FDFBF5]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col space-y-6">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm tracking-[0.15em] uppercase transition-all duration-500 ${isActive ? 'text-[#1A1A1A]' : 'text-[#8A8A8A] hover:text-[#1A1A1A]'}`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/entrepreneurs"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm tracking-[0.15em] uppercase transition-all duration-500 ${isActive ? 'text-[#1A1A1A]' : 'text-[#8A8A8A] hover:text-[#1A1A1A]'}`
              }
            >
              Entrepreneurs
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm tracking-[0.15em] uppercase transition-all duration-500 ${isActive ? 'text-[#1A1A1A]' : 'text-[#8A8A8A] hover:text-[#1A1A1A]'}`
              }
            >
              About Us
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
