import React from 'react';
import { MessageCircle } from 'lucide-react';
import { HOTEL_INFO } from '../utils/constants';

const WhatsAppFloat: React.FC = () => {
  const handleClick = () => {
    const message = encodeURIComponent(`Hi, I am interested in booking a room at ${HOTEL_INFO.name}.`);
    window.open(`https://wa.me/${HOTEL_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center gap-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="hidden md:inline font-semibold">Chat with Us</span>
    </button>
  );
};

export default WhatsAppFloat;