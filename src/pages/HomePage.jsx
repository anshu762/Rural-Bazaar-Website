import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, entrepreneurs } from '../lib/constants';
import ProductCard from '../components/custom-components/ProductCard.jsx';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => (
  <div className="flex flex-wrap justify-center gap-2 mb-16">
    {['All', ...categories].map((category) => (
      <button
        key={category}
        onClick={() => onSelectCategory(category)}
        className={`px-5 py-2.5 text-xs tracking-[0.08em] uppercase transition-all duration-500
          ${selectedCategory === category
            ? 'bg-black text-white border-black'
            : 'bg-transparent text-[#6B6B6B] hover:text-black border-[#E3DFD7] hover:border-black'
          } border`}
      >
        {category}
      </button>
    ))}
  </div>
);

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const entrepreneurIdParam = searchParams.get('entrepreneur');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    []
  );

  const filteredProducts = useMemo(() => {
    let prods = products;
    if (entrepreneurIdParam) {
      prods = prods.filter(
        (p) => p.entrepreneurId === parseInt(entrepreneurIdParam, 10)
      );
    }
    if (selectedCategory !== 'All') {
      prods = prods.filter((p) => p.category === selectedCategory);
    }
    return prods;
  }, [selectedCategory, entrepreneurIdParam]);

  const entrepreneurMap = useMemo(
    () => new Map(entrepreneurs.map((e) => [e.id, e])),
    []
  );

  const entrepreneurFilterName = entrepreneurIdParam
    ? entrepreneurs.find((e) => e.id === parseInt(entrepreneurIdParam, 10))?.name
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.2em] uppercase text-[#9C9C9C] mb-6">The Collection</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-[-0.03em] text-[#1A1A1A] mb-4 leading-[1.1]">
          Handcrafted with Heart
        </h1>
        <p className="text-base md:text-lg font-light text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
          Discover unique products made by talented women from rural communities. Every purchase empowers a dream.
        </p>
        <div className="w-8 h-[1px] bg-[#1A1A1A]/20 mx-auto mt-8" />
      </div>

      {entrepreneurFilterName && (
        <div className="text-center mb-12 border border-[#E3DFD7] px-6 py-4">
          <p className="text-xs tracking-[0.1em] uppercase text-[#6B6B6B]">
            Curated edit &mdash; <span className="text-[#1A1A1A]">{entrepreneurFilterName}</span>
          </p>
        </div>
      )}

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {filteredProducts.map((product) => {
            const entrepreneur = entrepreneurMap.get(product.entrepreneurId);
            return entrepreneur ? (
              <ProductCard
                key={product.id}
                product={product}
                entrepreneur={entrepreneur}
              />
            ) : null;
          })}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-sm tracking-[0.05em] text-[#9C9C9C]">
            No products found for this selection.
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
