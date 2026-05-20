import React from 'react';
import { Link } from 'react-router-dom';

const EntrepreneurProfile = ({ entrepreneur, reverseLayout = false }) => {
  const layoutClasses = reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div
      className={`flex flex-col ${layoutClasses} gap-10 md:gap-16 items-center border-b border-[#E3DFD7] pb-16 md:pb-20 mb-16 md:mb-20 last:border-b-0 last:pb-0 last:mb-0`}
    >
      <div className="w-full md:w-1/3 flex-shrink-0 text-center">
        <div className="relative overflow-hidden inline-block">
          <img
            src={entrepreneur.profileImageUrl}
            alt={entrepreneur.name}
            className="w-48 h-48 md:w-56 md:h-56 object-cover transition-all duration-700 ease-out hover:scale-105"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-light tracking-[-0.02em] text-[#1A1A1A] mt-6">
          {entrepreneur.name}
        </h2>
      </div>
      <div className="w-full md:w-2/3 text-center md:text-left">
        <p className="text-sm md:text-base leading-[1.8] text-[#4A4A4A] mb-8 font-light">
          "{entrepreneur.story}"
        </p>
        <Link
          to={`/?entrepreneur=${entrepreneur.id}`}
          className="inline-flex items-center px-6 py-3 text-xs tracking-[0.1em] uppercase text-[#1A1A1A] hover:text-white border border-[#1A1A1A] hover:bg-[#1A1A1A] transition-all duration-500"
        >
          Support {entrepreneur.name}
        </Link>
      </div>
    </div>
  );
};

export default EntrepreneurProfile;
