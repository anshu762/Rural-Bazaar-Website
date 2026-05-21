import React from 'react';
import { Link } from 'react-router-dom';
import { entrepreneurs, products } from '../lib/constants';
import { WhatsAppIcon } from '../components/custom-components/icons';

const FadeIn = ({ children, delay = 0, className = '' }) => (
  <div className={`animate-fade-in-up ${className}`} style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

const SectionHeading = ({ label, title, description }) => (
  <div className="text-center mb-16 md:mb-20">
    <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#9C9C9C] mb-5">{label}</p>
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-[-0.02em] text-[#1A1A1A] leading-[1.1] mb-5">{title}</h2>
    {description && <p className="text-sm md:text-base font-light text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">{description}</p>}
    <div className="w-8 h-[1px] bg-[#1A1A1A]/20 mx-auto mt-8" />
  </div>
);

const LandingPage = () => {
  const featuredProducts = products.slice(0, 6);
  const featuredArtisans = entrepreneurs.slice(0, 4);

  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: 'url(https://photos.smugmug.com/Story-photos/i-QF3JkdL/0/S/01_IN_RAJ201312245041%20bazaar-S.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-24 md:py-32">
          <FadeIn delay={0}>
            <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/40 mb-6">Rural Bazaar</p>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-[-0.04em] text-white leading-[0.9] max-w-4xl">
              Handcrafted<br />Stories From<br />Rural India
            </h1>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-base md:text-lg font-light text-white/60 max-w-lg mt-8 leading-relaxed">
              A global marketplace empowering women artisans in rural communities. Every purchase preserves heritage and transforms lives.
            </p>
          </FadeIn>
          <FadeIn delay={600}>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/shop" className="px-8 py-3.5 text-xs tracking-[0.15em] uppercase text-black bg-white hover:bg-white/90 transition-all duration-500">
                Explore Collection
              </Link>
              <Link to="/about" className="px-8 py-3.5 text-xs tracking-[0.15em] uppercase text-white border border-white/30 hover:border-white transition-all duration-500">
                Our Mission
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── BRAND STORY ─── */}
      <section className="py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-14 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeIn delay={0}>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#9C9C9C] mb-6">Our Purpose</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-[-0.02em] leading-[1.1] mb-8">
                More Than a<br />Marketplace
              </h2>
              <div className="w-12 h-[1px] bg-[#1A1A1A]/30 mb-8" />
              <p className="text-sm md:text-base font-light text-[#6B6B6B] leading-[1.9] mb-6">
                Rural Bazaar was born from a simple truth — extraordinary talent exists everywhere, but opportunity does not. Women in rural India possess generations of craftsmanship, yet remain invisible to the markets that would value their work.
              </p>
              <p className="text-sm md:text-base font-light text-[#6B6B6B] leading-[1.9]">
                We bridge this gap. We are a digital platform that showcases handmade products, shares the stories behind them, and connects artisans directly with customers who value authenticity, quality, and purpose.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="relative">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Surunga_haat6.JPG"
                alt="Local marketplace"
                className="w-full h-[400px] md:h-[550px] object-cover grayscale brightness-[0.6]"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#FAF9F6] p-6 md:p-8 max-w-xs border border-[#E5E2DB]">
                <p className="text-3xl md:text-4xl font-serif font-light text-[#1A1A1A]">11+</p>
                <p className="text-xs tracking-[0.1em] uppercase text-[#6B6B6B] mt-2">Artisans Empowered</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FEATURED ENTREPRENEURS ─── */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#F5F3EE]">
        <div className="px-6 md:px-10 lg:px-14 max-w-7xl mx-auto">
          <SectionHeading
            label="The Artisans"
            title="Meet the Makers"
            description="Behind every product is a story of skill, patience, and quiet determination."
          />
          <FadeIn delay={0}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
              {featuredArtisans.map((artisan) => (
                <div key={artisan.id} className="group text-center">
                  <div className="overflow-hidden mb-5">
                    <img
                      src={artisan.profileImageUrl}
                      alt={artisan.name}
                      className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-serif font-light tracking-[-0.01em] text-[#1A1A1A]">{artisan.name}</h3>
                  <p className="text-xs tracking-[0.05em] uppercase text-[#9C9C9C] mt-1.5">Artisan</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="text-center mt-12">
              <Link to="/entrepreneurs" className="inline-flex px-8 py-3.5 text-xs tracking-[0.15em] uppercase text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-500">
                Meet All Artisans
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-14 max-w-7xl mx-auto">
        <SectionHeading
          label="The Collection"
          title="Featured Products"
          description="Discover unique pieces, each carrying the warmth of something made by hand with love."
        />
        <FadeIn delay={0}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => {
              const artisan = entrepreneurs.find(e => e.id === product.entrepreneurId);
              return (
                <div key={product.id} className="group border border-[#E5E2DB] bg-white transition-all duration-500 hover:border-[#1A1A1A]">
                  <div className="overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full aspect-square object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-sm md:text-base font-serif font-light tracking-[-0.01em] text-[#1A1A1A]">{product.name}</h3>
                    <p className="text-xs text-[#9C9C9C] mt-1.5">{artisan?.name || 'Rural Artisan'}</p>
                    <p className="text-sm font-medium text-[#4A4A4A] mt-3">₹{product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="text-center mt-12">
            <Link to="/shop" className="inline-flex px-8 py-3.5 text-xs tracking-[0.15em] uppercase text-white bg-[#1A1A1A] hover:bg-black transition-all duration-500">
              View All Products
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ─── IMPACT STATS ─── */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="px-6 md:px-10 lg:px-14 max-w-7xl mx-auto text-center">
          <FadeIn delay={0}>
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-6">Our Impact</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-[-0.02em] leading-[1.1] mb-16">
              Building Futures,<br />One Stitch at a Time
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
              {[
                { number: '11+', label: 'Artisans Empowered' },
                { number: '50+', label: 'Products Crafted' },
                { number: '5+', label: 'Villages Connected' },
                { number: '100%', label: 'Handmade with Love' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-3">{stat.number}</p>
                  <p className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-14 max-w-7xl mx-auto">
        <SectionHeading
          label="The Process"
          title="How It Works"
          description="From the artisan's hands to your home — a journey rooted in purpose."
        />
        <FadeIn delay={0}>
          <div className="grid md:grid-cols-4 gap-10 md:gap-8">
            {[
              { step: '01', title: 'Artisan Creates', desc: 'Skilled women artisans handcraft each piece using techniques passed down through generations.' },
              { step: '02', title: 'We Curate', desc: 'Every product is carefully selected for quality, authenticity, and unique craftsmanship.' },
              { step: '03', title: 'You Discover', desc: 'Browse our collection, read each story, and connect directly with the maker.' },
              { step: '04', title: 'Communities Grow', desc: 'Your purchase directly empowers an artisan, supports a family, and strengthens a community.' },
            ].map((item) => (
              <div key={item.step} className="text-center md:text-left">
                <p className="text-4xl md:text-5xl font-serif font-light text-[#E5E2DB] mb-4">{item.step}</p>
                <div className="w-8 h-[1px] bg-[#1A1A1A]/30 mb-5" />
                <h3 className="text-base md:text-lg font-serif font-light tracking-[-0.01em] text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="text-sm font-light text-[#6B6B6B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#F5F3EE]">
        <div className="px-6 md:px-10 lg:px-14 max-w-7xl mx-auto">
          <SectionHeading
            label="Community Voices"
            title="Words That Matter"
          />
          <FadeIn delay={0}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {entrepreneurs.slice(0, 4).map((artisan) => (
                <div key={artisan.id} className="border border-[#E5E2DB] bg-white p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-5">
                    <img src={artisan.profileImageUrl} alt={artisan.name} className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover" />
                    <div>
                      <h4 className="text-sm font-serif text-[#1A1A1A]">{artisan.name}</h4>
                      <p className="text-[10px] tracking-[0.1em] uppercase text-[#9C9C9C] mt-0.5">Artisan</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base font-light text-[#6B6B6B] leading-[1.8]">
                    &ldquo;{artisan.story.slice(0, 180)}...&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── NEWSLETTER CTA ─── */}
      <section className="py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-14 max-w-7xl mx-auto text-center">
        <FadeIn delay={0}>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#9C9C9C] mb-6">Stay Connected</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-[-0.02em] leading-[1.1] mb-6 max-w-3xl mx-auto">
            Join Our Community
          </h2>
          <p className="text-sm md:text-base font-light text-[#6B6B6B] max-w-lg mx-auto leading-relaxed mb-10">
            Receive artisan stories, new collection launches, and behind-the-scenes glimpses into rural craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 text-xs tracking-[0.05em] text-[#1A1A1A] bg-transparent border border-[#D8D5CF] placeholder:text-[#B5B0A8] focus:outline-none focus:border-[#1A1A1A] transition-colors duration-500"
            />
            <button className="px-8 py-3.5 text-xs tracking-[0.15em] uppercase text-white bg-[#1A1A1A] hover:bg-black transition-all duration-500 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </FadeIn>
      </section>

      {/* ─── GALLERY ─── */}
      <section className="py-24 md:py-32 lg:py-40 bg-black">
        <div className="px-6 md:px-10 lg:px-14 max-w-7xl mx-auto">
          <FadeIn delay={0}>
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-6 text-center">Craftsmanship in Frames</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-[-0.02em] text-white leading-[1.1] text-center mb-16">
              The Art of Making
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {products.slice(0, 8).map((product) => (
                <div key={product.id} className="overflow-hidden group">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full aspect-square object-cover grayscale brightness-[0.6] group-hover:brightness-[1] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
