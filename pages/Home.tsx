import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, ShieldCheck, Coffee, Wifi, Clock } from 'lucide-react';
import { HOTEL_INFO, ROOMS, TESTIMONIALS } from '../utils/constants';

const Home: React.FC = () => {
  const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent("Hi, I'm interested in booking a room.")}`;

  return (
    <div className="flex flex-col w-full fade-in">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80" 
            alt="Hotel Hero" 
            className="w-full h-full object-cover animate-[scale_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <div className="inline-block border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
             <span className="text-brand-gold font-bold tracking-widest uppercase text-xs md:text-sm">Welcome to {HOTEL_INFO.name}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none tracking-tight drop-shadow-lg">
            Experience <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Luxury Living</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-3xl mx-auto drop-shadow-md">
            {HOTEL_INFO.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-gold hover:bg-amber-600 text-white text-lg font-bold py-4 px-10 rounded-full transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-amber-500/30 flex items-center justify-center gap-2"
            >
              Book Your Stay <ArrowRight size={20}/>
            </a>
            <Link 
              to="/rooms"
              className="bg-white/10 backdrop-blur-md border border-white/50 hover:bg-white hover:text-brand-dark text-white text-lg font-bold py-4 px-10 rounded-full transition-all transform hover:-translate-y-1 shadow-lg"
            >
              View Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Highlights - Floating Cards */}
      <section className="relative z-20 -mt-20 px-4 mb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { label: "Clean Rooms", icon: ShieldCheck, desc: "Sanitized Daily" },
            { label: "Free Wi-Fi", icon: Wifi, desc: "High Speed Internet" },
            { label: "Restaurant", icon: Coffee, desc: "Multi-cuisine" },
            { label: "24/7 Support", icon: Clock, desc: "Always Here" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 text-center border border-gray-50">
              <div className="inline-flex p-4 bg-blue-50 text-brand-dark rounded-full mb-4">
                <item.icon size={32} />
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-1">{item.label}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
         <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               <span className="text-brand-gold font-bold uppercase tracking-wider text-sm">About Us</span>
               <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mt-2 mb-6">Redefining Hospitality in the City</h2>
               <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Located in the heart of the city, {HOTEL_INFO.name} offers a perfect blend of modern amenities and traditional hospitality. 
                Whether you are traveling for business, leisure, or a family vacation, our dedicated team ensures a memorable stay.
               </p>
               <Link to="/about" className="inline-flex items-center text-brand-dark font-bold hover:text-brand-gold transition-colors border-b-2 border-brand-dark pb-1 hover:border-brand-gold">
                  Read Our Story <ArrowRight size={16} className="ml-2" />
               </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" className="rounded-2xl shadow-lg mt-8" alt="Hotel Interior"/>
               <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80" className="rounded-2xl shadow-lg" alt="Hotel Bedroom"/>
            </div>
         </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-wider text-sm">Accommodation</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mt-2">Our Featured Rooms</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ROOMS.map((room) => (
              <div key={room.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-dark px-4 py-2 font-bold rounded-lg shadow-sm">
                    ₹{room.price} <span className="text-xs font-normal">/ night</span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-serif text-2xl font-bold text-brand-dark mb-3">{room.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm line-clamp-2 leading-relaxed">{room.description}</p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col gap-3">
                    <Link 
                       to={`/rooms/${room.id}`}
                       className="w-full block text-center bg-gray-50 hover:bg-brand-dark hover:text-white text-gray-800 font-bold py-3 rounded-xl transition-colors"
                    >
                      View Details
                    </Link>
                     <a 
                      href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in booking the ${room.name}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full block text-center bg-brand-gold text-white font-bold py-3 rounded-xl hover:bg-amber-600 transition-colors"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/rooms" className="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-brand-gold transition-colors text-lg">
              View All Accommodation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-gold rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">Guest Experiences</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex text-brand-gold mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="italic text-gray-300 mb-8 leading-relaxed text-lg">"{review.text}"</p>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-gold to-orange-500 flex items-center justify-center font-bold text-white">
                      {review.name[0]}
                   </div>
                   <div>
                      <div className="font-bold">{review.name}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{review.location}</div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;