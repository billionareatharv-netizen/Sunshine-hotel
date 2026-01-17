import React from 'react';
import { Link } from 'react-router-dom';
import { Check, MessageCircle, ArrowRight, User, Maximize } from 'lucide-react';
import { HOTEL_INFO, ROOMS } from '../utils/constants';

const Rooms: React.FC = () => {
  return (
    <div className="fade-in pb-20 bg-gray-50">
      <div className="bg-brand-dark text-white py-24 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 relative z-10">Our Rooms & Suites</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4 relative z-10">
          Elegantly designed for your comfort and relaxation.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-20 space-y-12">
        {ROOMS.map((room, index) => (
          <div 
            key={room.id} 
            className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="lg:w-1/2 relative min-h-[350px] overflow-hidden group">
              <img 
                src={room.image} 
                alt={room.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 text-white">
                 <div className="flex items-center gap-4 text-sm font-medium">
                    <span className="flex items-center gap-1"><Maximize size={16}/> {room.size}</span>
                    <span className="flex items-center gap-1"><User size={16}/> {room.occupancy}</span>
                 </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h2 className="font-serif text-3xl font-bold text-brand-dark">{room.name}</h2>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-brand-gold">₹{room.price}</div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Per Night</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
                  {room.features.slice(0,6).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <div className="bg-green-100 p-1 rounded-full text-green-600">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                 <Link 
                  to={`/rooms/${room.id}`}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-4 px-6 rounded-xl text-center transition-colors flex items-center justify-center gap-2"
                >
                  View Details <ArrowRight size={18} />
                </Link>
                <a 
                  href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in booking the ${room.name}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-brand-dark hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-900/20"
                >
                  <MessageCircle size={20} />
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;