import React from 'react';
import { entrepreneurs } from '../lib/constants';
import EntrepreneurProfile from '../components/custom-components/EntrepreneurProfile';

const EntrepreneursPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.2em] uppercase text-[#9C9C9C] mb-6">The Artisans</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-[-0.03em] text-[#1A1A1A] mb-4 leading-[1.1]">
          Meet the Artisans
        </h1>
        <p className="text-base md:text-lg font-light text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
          The heart and soul of Rural Bazaar. Learn their stories, see their craft, and support their journey.
        </p>
        <div className="w-8 h-[1px] bg-[#1A1A1A]/20 mx-auto mt-8" />
      </div>

      <div>
        {entrepreneurs.map((entrepreneur, index) => (
          <EntrepreneurProfile
            key={entrepreneur.id}
            entrepreneur={entrepreneur}
            reverseLayout={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default EntrepreneursPage;
