import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, entrepreneurs } from '../lib/constants';
import ProductCard from '../components/custom-components/ProductCard.jsx';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => (
  <div className="flex flex-wrap justify-center gap-3 mb-10">
    {['All', ...categories].map((category) => (
      <button
        key={category}
        onClick={() => onSelectCategory(category)}
        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm md:text-base
          ${selectedCategory === category
            ? 'bg-[#8A6F58] text-white shadow-lg transform scale-105'
            : 'bg-white text-[#8A6F58] hover:bg-[#C8A07D] hover:text-white border border-[#C8A07D]'
          }`}
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
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8A6F58] mb-2">
          Handcrafted with Heart
        </h1>
        <p className="text-lg text-[#4F4A45] max-w-2xl mx-auto">
          Discover unique products made by talented women from rural communities. Every purchase empowers a dream.
        </p>
      </div>

      {entrepreneurFilterName && (
        <div className="text-center mb-8 bg-[#C8A07D]/10 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-[#8A6F58]">
            Showing products by {entrepreneurFilterName}
          </h2>
        </div>
      )}

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">
            No products found for this selection.
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
