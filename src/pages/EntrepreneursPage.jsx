import React from 'react';
import { entrepreneurs } from '../lib/constants';
import EntrepreneurProfile from '../components/custom-components/EntrepreneurProfile';

const EntrepreneursPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8A6F58] mb-2">
          Meet the Artisans
        </h1>
        <p className="text-lg text-[#4F4A45] max-w-2xl mx-auto">
          The heart and soul of Rural Bazaar. Learn their stories, see their craft, and support their journey.
        </p>
      </div>

      <div className="space-y-16">
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
