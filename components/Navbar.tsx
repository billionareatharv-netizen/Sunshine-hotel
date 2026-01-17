import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { HOTEL_INFO } from '../utils/constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/rooms', label: 'Rooms' },
    { path: '/amenities', label: 'Amenities' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg group-hover:bg-blue-800 transition-colors">S</div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl text-brand-dark leading-none tracking-tight">Sunshine</span>
                <span className="text-xs text-brand-gold uppercase tracking-[0.2em] font-bold mt-1">Hotel & Stay</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wide transition-all duration-200 py-2 border-b-2 ${
                  isActive(link.path) ? 'text-brand-dark border-brand-gold' : 'text-gray-500 border-transparent hover:text-brand-dark hover:border-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="bg-brand-dark text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-dark focus:outline-none p-2"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl z-50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 rounded-xl text-base font-bold ${
                  isActive(link.path) ? 'text-brand-dark bg-blue-50' : 'text-gray-600 hover:text-brand-dark hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="block w-full text-center mt-6 bg-brand-dark text-white px-4 py-4 rounded-xl font-bold shadow-md"
            >
              Call {HOTEL_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;