import React from 'react';
import { EmailIcon, WhatsAppIcon, InstagramIcon, FacebookIcon } from '../custom-components/icons';

const Footer = () => (
  <footer className="bg-[#8A6F58] text-white mt-16">
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8">
        {/* Brand Section */}
        <div className="max-w-md">
          <h3 className="text-xl md:text-2xl font-serif font-bold">Rural Bazaar</h3>
          <p className="mt-2 text-sm md:text-base text-gray-300">
            Empowering women entrepreneurs in rural communities through a global digital marketplace.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-lg mb-3">Contact Us</h4>
          <a
            href="mailto:divenachugani@gmail.com"
            className="flex items-center space-x-2 hover:text-[#C8A07D] transition-colors mb-2"
          >
            <EmailIcon className="w-5 h-5" />
            <span className="text-sm md:text-base">divenachugani@gmail.com</span>
          </a>
          <a
            href="https://wa.me/919154126880"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-[#C8A07D] transition-colors mb-4"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span className="text-sm md:text-base">Connect on WhatsApp</span>
          </a>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-[#C8A07D] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-[#C8A07D] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-8 border-t border-gray-600 pt-4 text-sm">
        <p>&copy; 2024 Rural Bazaar. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
