import React from 'react';
import { EmailIcon, WhatsAppIcon } from '../components/custom-components/icons';

const FadeInSection = ({ children, delay = 0 }) => (
  <div
    className="animate-fade-in-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40">

        <FadeInSection delay={0}>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-light leading-[0.9] tracking-[-0.04em] text-white mb-8 max-w-5xl">
            Our<br />Story
          </h1>
        </FadeInSection>

        <FadeInSection delay={150}>
          <div className="w-16 h-[1px] bg-white/30 mb-16" />
        </FadeInSection>

        <FadeInSection delay={300}>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-24">
            <p className="text-sm md:text-base leading-[1.8] tracking-[0.01em] text-white/70 max-w-md">
              Rural Bazaar began with a simple observation &mdash; extraordinary talent,
              limited reach. Women in rural communities possess generations of
              craftsmanship, yet remain invisible to the markets that would value
              their work. This gap became our purpose.
            </p>
            <p className="text-sm md:text-base leading-[1.8] tracking-[0.01em] text-white/70 max-w-md">
              We build more than a marketplace. We build visibility, dignity, and
              economic independence. Every product tells a story of skill, patience,
              and the quiet determination of women turning their craft into livelihood.
              This is slow commerce &mdash; intentional, personal, and human.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={450}>
          <div className="flex flex-col sm:flex-row gap-6 mb-32">
            <a
              href="mailto:divenachugani@gmail.com"
              className="group inline-flex items-center gap-3 px-0 py-3 text-sm font-medium tracking-[0.15em] uppercase text-white/80 hover:text-white transition-all duration-500 border-b border-white/20 hover:border-white"
            >
              <EmailIcon className="w-4 h-4" />
              <span>Email Us</span>
            </a>
            <a
              href="https://wa.me/919154126880"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-0 py-3 text-sm font-medium tracking-[0.15em] uppercase text-white/80 hover:text-white transition-all duration-500 border-b border-white/20 hover:border-white"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </FadeInSection>

        <FadeInSection delay={600}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-32">
            <div className="md:col-span-7 overflow-hidden group">
              <img
                src="https://picsum.photos/seed/vision/900/600"
                alt="Hands crafting"
                className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:brightness-[0.9] group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
            <div className="md:col-span-5 overflow-hidden group">
              <img
                src="https://picsum.photos/seed/founder/600/600"
                alt="Artisan at work"
                className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:brightness-[0.9] group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
            <div className="md:col-span-5 overflow-hidden group">
              <img
                src="https://picsum.photos/seed/howitworks/600/500"
                alt="Marketplace"
                className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:brightness-[0.9] group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
            <div className="md:col-span-7 overflow-hidden group">
              <img
                src="https://picsum.photos/seed/community/900/500"
                alt="Community"
                className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:brightness-[0.9] group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={750}>
          <div className="border-t border-white/10 pt-16 md:pt-20">
            <blockquote className="max-w-3xl">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-[1.3] tracking-[-0.02em] text-white/90">
                Every handcrafted piece carries the weight of a story, the warmth of patience, and the hope of a better future.
              </p>
              <footer className="mt-8 text-xs tracking-[0.2em] uppercase text-white/40">
                &mdash; Rural Bazaar
              </footer>
            </blockquote>
          </div>
        </FadeInSection>

      </div>
    </div>
  );
};

export default AboutPage;
