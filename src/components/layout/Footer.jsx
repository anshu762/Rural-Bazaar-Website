import React from 'react';
import { Link } from 'react-router-dom';
import { EmailIcon, WhatsAppIcon, InstagramIcon, FacebookIcon } from '../custom-components/icons';

const Footer = () => (
  <footer className="bg-[#1A1A1A] text-white">
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <div>
          <Link to="/" className="text-xl md:text-2xl font-serif font-light tracking-[-0.02em] text-white inline-block">
            Rural Bazaar
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/50 max-w-xs">
            Empowering women entrepreneurs in rural communities through a global digital marketplace.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.15em] uppercase text-white/30 mb-6">Navigation</h4>
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors duration-500">Products</Link>
            <Link to="/entrepreneurs" className="text-sm text-white/70 hover:text-white transition-colors duration-500">Entrepreneurs</Link>
            <Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors duration-500">About Us</Link>
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.15em] uppercase text-white/30 mb-6">Contact</h4>
          <div className="flex flex-col space-y-3">
            <a
              href="mailto:divenachugani@gmail.com"
              className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-500"
            >
              <EmailIcon className="w-4 h-4" />
              <span>divenachugani@gmail.com</span>
            </a>
            <a
              href="https://wa.me/919154126880"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-500"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="text-white/40 hover:text-white transition-colors duration-500"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white transition-colors duration-500"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} Rural Bazaar. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
