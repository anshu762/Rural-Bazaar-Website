import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const linkClass = "hover:text-[#C8A07D] transition-colors duration-300";
const activeLinkClass = "text-[#C8A07D] font-semibold";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#FDFBF5]/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-xl md:text-2xl font-serif font-bold text-[#8A6F58]">
          Rural Bazaar
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-base lg:text-lg">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            Products
          </NavLink>
          <NavLink 
            to="/entrepreneurs" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            Entrepreneurs
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
          >
            About Us
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#8A6F58] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#8A6F58] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#8A6F58] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FDFBF5] border-t border-gray-200">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-3">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
            >
              Products
            </NavLink>
            <NavLink
              to="/entrepreneurs"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
            >
              Entrepreneurs
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
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
