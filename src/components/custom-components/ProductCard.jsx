import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { WhatsAppIcon } from './icons';

const StoryModal = ({ story, entrepreneur, product, onClose }) => {
  return createPortal(
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto relative" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 text-[#9C9C9C] hover:text-black text-2xl z-10 w-8 h-8 flex items-center justify-center transition-colors duration-300"
        >
          &times;
        </button>

        {product.videoUrl && (
          <div className="w-full bg-black overflow-hidden">
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

        <div className="p-8 md:p-12">
          <div className="flex items-center gap-5 mb-8">
            <img 
              src={entrepreneur.profileImageUrl} 
              alt={entrepreneur.name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-light tracking-[-0.02em] text-[#1A1A1A]">
                {entrepreneur.name}
              </h3>
              <p className="text-xs tracking-[0.05em] uppercase text-[#9C9C9C] mt-1">{product.name}</p>
            </div>
          </div>
          
          <p className="text-[#4A4A4A] leading-[1.8] text-base md:text-lg font-light">
            {story}
          </p>

          <div className="mt-8 pt-8 border-t border-[#E3DFD7]">
            <a
            href={`https://wa.me/${entrepreneur.whatsappNumber}?text=Hi, I'm interested in your product: ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Connect with ${entrepreneur.name} on WhatsApp about ${product.name}`}
            title="Connect via WhatsApp"
              className="inline-flex items-center gap-3 px-6 py-3 text-xs tracking-[0.1em] uppercase text-[#1A1A1A] hover:text-white border border-[#1A1A1A] hover:bg-[#1A1A1A] transition-all duration-500"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Inquire via WhatsApp
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
      <div className="bg-white border border-[#E3DFD7] flex flex-col group transition-all duration-500 hover:border-black">
        <div className="relative w-full overflow-hidden" style={{ paddingBottom: '75%' }}>
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
          />
          
          {product.videoUrl && (
            <div className="absolute bottom-3 left-3 bg-white/90 text-[#1A1A1A] px-3 py-1 text-[10px] tracking-[0.1em] uppercase">
              Film
            </div>
          )}

          <a
            href={`https://wa.me/${entrepreneur.whatsappNumber}?text=Hi, I'm interested in your product: ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 bg-white text-[#1A1A1A] border border-[#E3DFD7] p-2 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-500 hover:bg-[#1A1A1A] hover:text-white hover:border-black z-10"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-base md:text-lg font-serif font-light tracking-[-0.01em] text-[#1A1A1A] leading-snug">
            {product.name}
          </h3>
          <p className="text-sm md:text-base font-medium text-[#4A4A4A] mt-3">₹{product.price}</p>
          <p className="text-xs text-[#9C9C9C] mt-2 tracking-[0.03em]">
            {entrepreneur.name}
          </p>
          <div className="mt-auto pt-5">
            <button
              onClick={() => setShowModal(true)}
              className="w-full py-2.5 px-4 text-xs tracking-[0.08em] uppercase text-[#1A1A1A] border border-[#E3DFD7] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-500"
            >
              {product.videoUrl ? 'Watch Her Story' : 'Read Her Story'}
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
