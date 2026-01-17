import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { HOTEL_INFO } from '../utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-brand-gold">{HOTEL_INFO.name}</h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Experience the perfect blend of comfort, luxury, and affordability. 
              Your home away from home in the heart of the city.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/rooms" className="text-gray-400 hover:text-brand-gold transition-colors">Our Rooms</Link></li>
              <li><Link to="/amenities" className="text-gray-400 hover:text-brand-gold transition-colors">Amenities</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-brand-gold transition-colors">Photo Gallery</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="flex-shrink-0 mt-1" size={18} />
                <span>{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="flex-shrink-0" size={18} />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-white">{HOTEL_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="flex-shrink-0" size={18} />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-white">{HOTEL_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;