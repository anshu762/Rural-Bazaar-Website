import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }) =>
  `relative text-xs tracking-[0.1em] uppercase transition-colors duration-500
   after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:bg-[#1A1A1A] after:transition-all after:duration-500
   ${isActive ? 'text-[#1A1A1A] after:w-full' : 'text-[#6B6B6B] hover:text-[#1A1A1A] after:w-0 hover:after:w-full'}`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#FDFBF5]/80 backdrop-blur-sm sticky top-0 z-50 border-b border-[#E3DFD7]">
      <nav className="container mx-auto px-6 md:px-8 py-4 md:py-5 flex justify-between items-center">
        <NavLink to="/" className="text-xl md:text-2xl font-serif font-light tracking-[-0.02em] text-[#1A1A1A]">
          Rural Bazaar
        </NavLink>

        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          <NavLink to="/" className={navLinkClass}>Products</NavLink>
          <NavLink to="/entrepreneurs" className={navLinkClass}>Entrepreneurs</NavLink>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1px] bg-[#1A1A1A] transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`}></span>
          <span className={`block w-5 h-[1px] bg-[#1A1A1A] transition-all duration-500 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-[1px] bg-[#1A1A1A] transition-all duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`}></span>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-[#FDFBF5] border-t border-[#E3DFD7]">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-5">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm tracking-[0.1em] uppercase transition-colors duration-500 ${isActive ? 'text-[#1A1A1A]' : 'text-[#6B6B6B] hover:text-[#1A1A1A]'}`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/entrepreneurs"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm tracking-[0.1em] uppercase transition-colors duration-500 ${isActive ? 'text-[#1A1A1A]' : 'text-[#6B6B6B] hover:text-[#1A1A1A]'}`
              }
            >
              Entrepreneurs
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm tracking-[0.1em] uppercase transition-colors duration-500 ${isActive ? 'text-[#1A1A1A]' : 'text-[#6B6B6B] hover:text-[#1A1A1A]'}`
              }
            >
              About Us
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
