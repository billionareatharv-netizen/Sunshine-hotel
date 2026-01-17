import React from 'react';
import { 
  Wifi, Car, Utensils, Droplets, Zap, ShieldCheck, Coffee, Sparkles, Check 
} from 'lucide-react';
import { AMENITIES } from '../utils/constants';

// Map string names from constants to actual components
const ICON_MAP: Record<string, React.ElementType> = {
  'Wifi': Wifi,
  'Car': Car,
  'Utensils': Utensils,
  'Droplets': Droplets,
  'Zap': Zap,
  'ShieldCheck': ShieldCheck,
  'Coffee': Coffee,
  'Sparkles': Sparkles
};

// Helper to render dynamic icons safely
const DynamicIcon = ({ name, size = 24, className = "" }: { name: string; size?: number; className?: string }) => {
  const IconComponent = ICON_MAP[name];
  return IconComponent ? <IconComponent size={size} className={className} /> : null;
};

const Amenities: React.FC = () => {
  return (
    <div className="fade-in pb-16">
      <div className="bg-gray-100 py-16 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-brand-dark">Hotel Facilities</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          We provide everything you need for a comfortable and hassle-free stay.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {AMENITIES.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 bg-blue-50 text-brand-dark rounded-full flex items-center justify-center mb-4">
                <DynamicIcon name={item.icon} size={32} />
              </div>
              <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl font-bold text-brand-dark mb-4">Dining Restaurant</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Enjoy delicious, freshly prepared meals at our in-house restaurant. 
              We serve a variety of local and authentic dishes made with high-quality ingredients. 
              Room service is available 24/7 for your convenience.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-700"><Check className="text-brand-gold" size={16}/> Breakfast Buffet</li>
              <li className="flex items-center gap-2 text-gray-700"><Check className="text-brand-gold" size={16}/> Lunch & Dinner</li>
              <li className="flex items-center gap-2 text-gray-700"><Check className="text-brand-gold" size={16}/> Fresh Coffee & Snacks</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 h-64 md:h-auto overflow-hidden rounded-lg shadow-xl">
             <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" alt="Restaurant" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;