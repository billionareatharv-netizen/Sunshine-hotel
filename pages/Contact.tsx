import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { HOTEL_INFO } from '../utils/constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New Enquiry from Website:\nName: ${formData.name}\nPhone: ${formData.phone}\nCheck-in: ${formData.date}\nMessage: ${formData.message}`;
    const url = `https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fade-in pb-20 bg-slate-50">
      <div className="bg-brand-dark text-white py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
          We are here to help. Reach out to us for bookings and queries.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12 grid md:grid-cols-2 gap-8 relative z-10">
        
        {/* Contact Info Card */}
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between h-full">
            <div>
              <span className="text-brand-gold font-bold uppercase tracking-wider text-xs">Get in Touch</span>
              <h3 className="font-serif text-3xl font-bold text-brand-dark mb-8 mt-2">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-blue-50 p-4 rounded-xl text-brand-dark shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Our Location</h4>
                    <p className="text-gray-600 leading-relaxed">{HOTEL_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-blue-50 p-4 rounded-xl text-brand-dark shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Phone & WhatsApp</h4>
                    <p className="text-gray-600 mb-1"><a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-brand-dark transition-colors">{HOTEL_INFO.phone}</a></p>
                    <p className="text-green-600 text-sm font-medium bg-green-50 inline-block px-2 py-1 rounded">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-blue-50 p-4 rounded-xl text-brand-dark shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Email Address</h4>
                    <p className="text-gray-600"><a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-brand-dark transition-colors">{HOTEL_INFO.email}</a></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 h-64 rounded-xl overflow-hidden shadow-inner border border-gray-200">
                <iframe 
                src={HOTEL_INFO.mapUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Hotel Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </div>
        </div>

        {/* Enquiry Form */}
        <div className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-brand-gold">
          <span className="text-brand-gold font-bold uppercase tracking-wider text-xs">Reservation</span>
          <h3 className="font-serif text-3xl font-bold text-brand-dark mb-2 mt-2">Send Enquiry</h3>
          <p className="text-gray-500 mb-8">Fill out the form and our team will get back to you on WhatsApp instantly.</p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all font-medium"
                placeholder="John Doe"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all font-medium"
                  placeholder="+91..."
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Check-in</label>
                <input 
                  type="date" 
                  name="date" 
                  required 
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all font-medium text-gray-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Message (Optional)</label>
              <textarea 
                name="message" 
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all font-medium"
                placeholder="Any special requests..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-brand-dark hover:bg-blue-800 text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-blue-900/30 transform hover:-translate-y-1 mt-4"
            >
              <Send size={20} />
              Send Enquiry via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;