import React from 'react';
import { HOTEL_INFO } from '../utils/constants';

const About: React.FC = () => {
  return (
    <div className="fade-in pb-16">
      {/* Header */}
      <div className="bg-brand-dark text-white py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto px-4">
          Serving guests with warmth and excellence since 2010.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-16 space-y-20">
        
        {/* Story Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://picsum.photos/600/800?random=99" 
                alt="Hotel Reception" 
                className="rounded-lg shadow-xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold/10 rounded-full z-0 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-dark/10 rounded-full z-0 hidden md:block"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="font-serif text-3xl font-bold text-brand-dark mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {HOTEL_INFO.name} started with a simple vision: to provide affordable luxury to travelers visiting our beautiful city. 
              Over the last decade, we have hosted thousands of guests from all over the world, earning a reputation for cleanliness, 
              safety, and unmatched hospitality.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a family-run establishment that understands the needs of families, couples, and business travelers alike. 
              We believe in "Atithi Devo Bhava" - The Guest is God.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
               <div className="border-l-4 border-brand-gold pl-4">
                 <span className="block text-3xl font-bold text-brand-dark">12+</span>
                 <span className="text-gray-500 text-sm">Years of Service</span>
               </div>
               <div className="border-l-4 border-brand-gold pl-4">
                 <span className="block text-3xl font-bold text-brand-dark">15k+</span>
                 <span className="text-gray-500 text-sm">Happy Guests</span>
               </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-2xl text-center">
           <h2 className="font-serif text-3xl font-bold text-brand-dark mb-8">Our Mission</h2>
           <div className="grid md:grid-cols-3 gap-8">
             <div>
               <h3 className="font-bold text-xl mb-2 text-brand-gold">Guest Comfort</h3>
               <p className="text-gray-600 text-sm">We prioritize your sleep and relaxation with premium bedding and sound-proof rooms.</p>
             </div>
             <div>
               <h3 className="font-bold text-xl mb-2 text-brand-gold">Hygiene First</h3>
               <p className="text-gray-600 text-sm">Spotless cleanliness is our hallmark. We adhere to strict sanitization protocols.</p>
             </div>
             <div>
               <h3 className="font-bold text-xl mb-2 text-brand-gold">Value for Money</h3>
               <p className="text-gray-600 text-sm">Luxury doesn't have to be expensive. We offer the best rates in the area.</p>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;