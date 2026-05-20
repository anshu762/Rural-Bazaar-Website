import React, { useState, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, entrepreneurs } from '../lib/constants';
import ProductCard from '../components/custom-components/ProductCard.jsx';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => (
  <div>
    <h4 className="text-xs tracking-[0.15em] uppercase text-[#9C9C9C] mb-5">Category</h4>
    <div className="flex flex-col gap-1.5">
      {['All', ...categories].map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`text-xs tracking-[0.08em] uppercase transition-all duration-500 text-left px-3 py-2
            ${selectedCategory === category
              ? 'bg-[#1A1A1A] text-white'
              : 'text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-[#F5F3EF]'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  </div>
);

const PriceRangeSlider = ({ minPrice, maxPrice, onMinChange, onMaxChange, globalMin, globalMax }) => {
  const minPercent = ((minPrice - globalMin) / (globalMax - globalMin)) * 100;
  const maxPercent = ((maxPrice - globalMin) / (globalMax - globalMin)) * 100;

  return (
    <div>
      <h4 className="text-xs tracking-[0.15em] uppercase text-[#9C9C9C] mb-6">Price</h4>
      <div className="relative h-6 mb-3">
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-[#E3DFD7]" />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[1px] bg-[#1A1A1A]"
          style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
        />
        <input
          type="range"
          min={globalMin}
          max={globalMax}
          step={10}
          value={minPrice}
          onChange={(e) => {
            const val = Math.min(Number(e.target.value), maxPrice - 10);
            onMinChange(val);
          }}
          className="price-slider min-slider"
        />
        <input
          type="range"
          min={globalMin}
          max={globalMax}
          step={10}
          value={maxPrice}
          onChange={(e) => {
            const val = Math.max(Number(e.target.value), minPrice + 10);
            onMaxChange(val);
          }}
          className="price-slider max-slider"
        />
      </div>
      <div className="flex items-center justify-between text-xs text-[#6B6B6B]">
        <span>₹{minPrice}</span>
        <span className="text-[#9C9C9C]">&mdash;</span>
        <span>₹{maxPrice}</span>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const entrepreneurIdParam = searchParams.get('entrepreneur');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const globalMin = useMemo(() => Math.min(...products.map((p) => p.price)), []);
  const globalMax = useMemo(() => Math.max(...products.map((p) => p.price)), []);

  const [minPrice, setMinPrice] = useState(globalMin);
  const [maxPrice, setMaxPrice] = useState(globalMax);

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
    prods = prods.filter((p) => p.price >= minPrice && p.price <= maxPrice);
    return prods;
  }, [selectedCategory, entrepreneurIdParam, minPrice, maxPrice]);

  const entrepreneurMap = useMemo(
    () => new Map(entrepreneurs.map((e) => [e.id, e])),
    []
  );

  const entrepreneurFilterName = entrepreneurIdParam
    ? entrepreneurs.find((e) => e.id === parseInt(entrepreneurIdParam, 10))?.name
    : null;

  const handleMinPriceChange = useCallback((val) => setMinPrice(val), []);
  const handleMaxPriceChange = useCallback((val) => setMaxPrice(val), []);

  const hasActiveFilters = selectedCategory !== 'All' || minPrice !== globalMin || maxPrice !== globalMax;

  const clearFilters = () => {
    setSelectedCategory('All');
    setMinPrice(globalMin);
    setMaxPrice(globalMax);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="text-center mb-12 lg:mb-16">
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

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
        <aside className="w-full lg:w-56 xl:w-64 flex-shrink-0">
          <div className="lg:sticky lg:top-28">
            <div className="border border-[#E3DFD7] p-6">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
              <div className="w-full h-[1px] bg-[#E3DFD7] my-6" />
              <PriceRangeSlider
                minPrice={minPrice}
                maxPrice={maxPrice}
                onMinChange={handleMinPriceChange}
                onMaxChange={handleMaxPriceChange}
                globalMin={globalMin}
                globalMax={globalMax}
              />
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="mt-6 w-full py-2.5 text-xs tracking-[0.08em] uppercase text-[#6B6B6B] border border-[#E3DFD7] hover:text-black hover:border-black transition-all duration-500"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </aside>

        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <>
              <p className="text-xs tracking-[0.1em] text-[#9C9C9C] mb-6 lg:mb-8">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
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
            </>
          ) : (
            <div className="text-center py-24">
              <p className="text-sm tracking-[0.05em] text-[#9C9C9C] mb-4">
                No products found for this selection.
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-5 py-2.5 text-xs tracking-[0.08em] uppercase text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-500"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
