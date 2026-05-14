import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { WhatsAppIcon } from './icons';

const StoryModal = ({ story, entrepreneur, product, onClose }) => {
  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 scale-95 hover:scale-100" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl font-bold z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        >
          &times;
        </button>

        {/* Video Section (if product has video) */}
        {product.videoUrl && (
          <div className="w-full bg-black rounded-t-lg overflow-hidden">
            <video 
              className="w-full max-h-[400px] object-contain"
              controls
              autoPlay
              muted
              loop
            >
              <source src={product.videoUrl} type="video/mp4" />
              <source src={product.videoUrl} type="video/mov" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Story Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={entrepreneur.profileImageUrl} 
              alt={entrepreneur.name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-[#C8A07D]"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#8A6F58]">
                {entrepreneur.name}'s Story
              </h3>
              <p className="text-sm text-gray-500">About {product.name}</p>
            </div>
          </div>
          
          <p className="text-[#4F4A45] leading-relaxed text-base md:text-lg italic">
            "{story}"
          </p>

          {/* CTA Button */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <a
            href={`https://wa.me/${entrepreneur.whatsappNumber}?text=Hi, I'm interested in your product: ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Connect with ${entrepreneur.name} on WhatsApp about ${product.name}`}
            title="Connect via WhatsApp"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Contact {entrepreneur.name} on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const ProductCard = ({ product, entrepreneur }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Image Container with aspect ratio */}
        <div className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100" style={{ paddingBottom: '75%' }}>
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-contain p-4"
          />
          <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300"></div>
          
          {/* Video Badge (if product has video) */}
          {product.videoUrl && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              🎥 Video
            </div>
          )}

          <a
            href={`https://wa.me/${entrepreneur.whatsappNumber}?text=Hi, I'm interested in your product: ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 bg-green-500 text-white rounded-full p-2 shadow-lg hover:bg-green-600 transition-all duration-300 transform scale-0 group-hover:scale-100 focus:scale-100 z-10"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-serif font-semibold text-[#8A6F58] line-clamp-2 min-h-[3.5rem]">
            {product.name}
          </h3>
          <p className="text-lg text-[#A87C7C] font-bold mt-2">₹{product.price}</p>
          <p className="text-sm text-gray-500 mt-2">
            by <span className="font-semibold">{entrepreneur.name}</span>
          </p>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-[#8A6F58] text-white font-bold py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-[#4F4A45] transition-colors duration-300"
            >
              {product.videoUrl ? '🎥' : '📖'} {product.videoUrl ? 'Watch Her Story' : 'Read Her Story'}
            </button>
          </div>
        </div>
      </div>
      
      {showModal && (
        <StoryModal 
          story={entrepreneur.story} 
          entrepreneur={entrepreneur}
          product={product}
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
};

export default ProductCard;
