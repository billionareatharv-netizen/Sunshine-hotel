import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Wifi, Maximize, Users, Bed, Check, 
  ArrowLeft, MessageCircle, Phone, Star 
} from 'lucide-react';
import { ROOMS, HOTEL_INFO } from '../utils/constants';

const RoomDetails: React.FC = () => {
  const { id } = useParams();
  const room = ROOMS.find(r => r.id === id);
  const [activeImage, setActiveImage] = useState(room?.image || '');

  if (!room) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Not Found</h2>
        <Link to="/rooms" className="text-brand-gold hover:underline">Back to Rooms</Link>
      </div>
    );
  }

  const handleBookNow = () => {
    const text = `Hi, I am interested in booking the *${room.name}* at ${HOTEL_INFO.name}. Please confirm availability and rates.`;
    window.open(`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fade-in bg-slate-50 pb-20">
      {/* Breadcrumb / Back */}
      <div className="bg-white border-b border-gray-100 sticky top-20 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/rooms" className="inline-flex items-center text-gray-500 hover:text-brand-dark transition-colors text-sm font-medium">
            <ArrowLeft size={16} className="mr-2" />
            Back to All Rooms
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Images & Info */}
          <div className="lg:w-2/3">
            {/* Main Image Gallery */}
            <div className="space-y-4 mb-10">
              <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={activeImage || room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {[room.image, ...(room.gallery || [])].map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-brand-gold ring-2 ring-brand-gold/20' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Title & Description */}
            <div className="mb-10">
               <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Premium Stay</span>
                  <div className="flex text-brand-gold">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
               </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">{room.name}</h1>
              
              {/* Quick Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex flex-col items-center text-center p-2">
                  <Maximize className="text-gray-400 mb-2" size={24} />
                  <span className="text-sm text-gray-500">Size</span>
                  <span className="font-bold text-gray-800">{room.size}</span>
                </div>
                <div className="flex flex-col items-center text-center p-2 border-l border-gray-100">
                  <Users className="text-gray-400 mb-2" size={24} />
                  <span className="text-sm text-gray-500">Occupancy</span>
                  <span className="font-bold text-gray-800">{room.occupancy}</span>
                </div>
                <div className="flex flex-col items-center text-center p-2 border-l border-gray-100">
                  <Bed className="text-gray-400 mb-2" size={24} />
                  <span className="text-sm text-gray-500">Bed Type</span>
                  <span className="font-bold text-gray-800">{room.bedType}</span>
                </div>
                 <div className="flex flex-col items-center text-center p-2 border-l border-gray-100">
                  <Wifi className="text-gray-400 mb-2" size={24} />
                  <span className="text-sm text-gray-500">Internet</span>
                  <span className="font-bold text-gray-800">Free WiFi</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">About the Room</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {room.longDescription || room.description}
              </p>

              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">Room Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                {room.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg border border-gray-50 shadow-sm">
                    <div className="bg-green-100 text-green-600 p-1 rounded-full">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="mb-6 pb-6 border-b border-gray-100">
                <span className="text-gray-500 text-sm">Starting from</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-brand-dark">₹{room.price}</span>
                  <span className="text-gray-500">/ night</span>
                </div>
                <p className="text-green-600 text-sm mt-2 font-medium flex items-center gap-1">
                  <Check size={14} /> Includes Breakfast & Taxes
                </p>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={handleBookNow}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <MessageCircle size={22} />
                  Check Availability via WhatsApp
                </button>
                
                <a 
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="w-full bg-white border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3"
                >
                  <Phone size={22} />
                  Call to Book
                </a>
              </div>

              <div className="mt-8 text-center bg-gray-50 p-4 rounded-xl">
                 <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Need help booking?</p>
                 <p className="text-brand-dark font-bold">Call 24/7: {HOTEL_INFO.phone}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoomDetails;