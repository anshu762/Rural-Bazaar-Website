import React from 'react';
import { EmailIcon, WhatsAppIcon, InstagramIcon, FacebookIcon } from './components/icons';

const Footer = () => (
  <footer className="bg-brand-secondary text-white mt-16">
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-serif font-bold">Rural Bazaar</h3>
          <p className="max-w-md mt-2 text-gray-300">Empowering women entrepreneurs in rural communities through a global digital marketplace.</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <a href="mailto:divenachugani@gmail.com" className="flex items-center space-x-2 hover:text-brand-primary transition-colors">
            <EmailIcon />
            <span>divenachugani@gmail.com</span>
          </a>
          <a href="https://wa.me/919154126880" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 mt-2 hover:text-brand-primary transition-colors">
            <WhatsAppIcon />
            <span>Connect on WhatsApp</span>
          </a>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-brand-primary transition-colors"><InstagramIcon /></a>
            <a href="#" className="hover:text-brand-primary transition-colors"><FacebookIcon /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8 border-t border-gray-600 pt-4">
        <p>&copy; {new Date().getFullYear()} Rural Bazaar. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
