import React from 'react';
import { EmailIcon, WhatsAppIcon } from '../components/custom-components/icons';

const InfoCard = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 transform hover:scale-105 transition-transform duration-300">
    <h3 className="text-xl md:text-2xl font-serif font-bold text-[#8A6F58] mb-4">{title}</h3>
    <div className="space-y-3 text-[#4F4A45] text-base md:text-lg leading-relaxed">{children}</div>
  </div>
);

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8A6F58] mb-4">Our Story</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Sharing our journey, our mission, and the inspiration behind Rural Bazaar.
        </p>
      </div>

      {/* Vision & Mission Section */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="order-2 md:order-1">
          <InfoCard title="Vision & Mission">
            <p>
              Our mission is to create a self-sustaining, digital platform that showcases products made by women-led rural microbusinesses. We aim to offer them visibility, basic e-commerce access, and support them through storytelling and digital literacy resources.
            </p>
          </InfoCard>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://picsum.photos/seed/vision/600/400"
            alt="Vision"
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
      </div>

      {/* Founder's Story Section */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div>
          <img
            src="https://picsum.photos/seed/founder/600/400"
            alt="Founder"
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
        <div>
          <InfoCard title="Founder's Story">
            <p>
              I started Rural Bazaar after witnessing the incredible talent and resilience of women in my ancestral village. Despite their skill, they lacked access to larger markets. I wanted to bridge this gap, using technology to connect their artistry with the world, ensuring they receive the recognition and financial independence they deserve.
            </p>
          </InfoCard>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="order-2 md:order-1">
          <InfoCard title="How It Works">
            <p>
              Rural Bazaar is more than a marketplace; it's a community. We feature products and share the stories of the entrepreneurs. Customers can browse our catalog and connect directly with the makers via WhatsApp for a personal and transparent purchasing experience.
            </p>
          </InfoCard>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://picsum.photos/seed/howitworks/600/400"
            alt="How it works"
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#8A6F58] mb-4">Get In Touch</h3>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          We'd love to hear from you for inquiries or collaborations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
          <a
            href="mailto:divenachugani@gmail.com"
            className="flex items-center space-x-2 text-[#8A6F58] hover:text-[#C8A07D] transition-colors"
          >
            <EmailIcon />
            <span className="font-semibold">Email Us</span>
          </a>
          <a
            href="https://wa.me/919154126880"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#8A6F58] hover:text-[#C8A07D] transition-colors"
          >
            <WhatsAppIcon />
            <span className="font-semibold">Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
