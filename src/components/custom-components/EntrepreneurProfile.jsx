import React from 'react';
import { Link } from 'react-router-dom';

const EntrepreneurProfile = ({ entrepreneur, reverseLayout = false }) => {
  const layoutClasses = reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div
      className={`flex flex-col ${layoutClasses} gap-8 bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 items-center`}
    >
      <div className="w-full md:w-1/3 flex-shrink-0 text-center">
        <img
          src={entrepreneur.profileImageUrl}
          alt={entrepreneur.name}
          className="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover mx-auto shadow-md border-4 border-[#C8A07D]"
        />
        <h2 className="text-2xl md:text-3xl font-serif font-bold mt-4 text-[#8A6F58]">
          {entrepreneur.name}
        </h2>
      </div>
      <div className="w-full md:w-2/3 text-center md:text-left">
        <p className="text-base md:text-lg text-[#4F4A45] mb-6 italic leading-relaxed">
          "{entrepreneur.story}"
        </p>
        <Link
          to={`/?entrepreneur=${entrepreneur.id}`}
          className="inline-block bg-[#C8A07D] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#8A6F58] transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Support {entrepreneur.name}
        </Link>
      </div>
    </div>
  );
};

export default EntrepreneurProfile;
