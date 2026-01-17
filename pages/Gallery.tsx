import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: 'https://picsum.photos/800/600?random=101', category: 'Exterior' },
    { src: 'https://picsum.photos/800/600?random=102', category: 'Lobby' },
    { src: 'https://picsum.photos/800/600?random=103', category: 'Room' },
    { src: 'https://picsum.photos/800/600?random=104', category: 'Room' },
    { src: 'https://picsum.photos/800/600?random=105', category: 'Restaurant' },
    { src: 'https://picsum.photos/800/600?random=106', category: 'Bathroom' },
    { src: 'https://picsum.photos/800/600?random=107', category: 'Exterior' },
    { src: 'https://picsum.photos/800/600?random=108', category: 'Details' },
  ];

  return (
    <div className="fade-in pb-16">
      <div className="bg-white py-16 text-center border-b border-gray-100">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-brand-dark">Photo Gallery</h1>
        <p className="text-lg text-gray-600">Take a visual tour of our hotel and facilities.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="cursor-pointer group relative aspect-square overflow-hidden rounded-lg bg-gray-200"
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                 <div className="opacity-0 group-hover:opacity-100 text-white bg-black/50 px-3 py-1 rounded text-sm backdrop-blur-sm transition-opacity">
                   View
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size" 
            className="max-w-full max-h-[90vh] rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;