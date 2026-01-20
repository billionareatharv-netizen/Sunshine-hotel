// Constants
const HOTEL_PHONE = "+919876543210";
const HOTEL_WHATSAPP = "919876543210";

const ROOMS = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    price: 3500,
    size: '350 sq ft',
    occupancy: '2 Adults, 1 Child',
    bedType: 'King Size',
    view: 'City View',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
    description: 'Spacious air-conditioned room with king-size bed and modern amenities.',
    longDescription: 'Experience the epitome of comfort in our Deluxe Room. Designed with modern aesthetics and warm tones, this room offers a sanctuary from the bustling city. Enjoy a peaceful nights sleep on our premium king-size mattress, catch up on work at the ergonomic desk, or relax with a show on the 42-inch flat-screen TV. The en-suite bathroom features rain showers and premium toiletries.',
    features: ['AC', 'King Bed', 'Free Wi-Fi', 'Smart TV', 'Breakfast Included', 'Work Desk', 'Mini Bar', 'Coffee Maker'],
    gallery: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584621644697-2d6466806a98?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Room',
    price: 2200,
    size: '280 sq ft',
    occupancy: '2 Adults',
    bedType: 'Queen Size',
    view: 'Garden View',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
    description: 'Cozy and comfortable room perfect for budget travelers and couples.',
    longDescription: 'Our Standard Rooms offer everything you need for a comfortable stay without breaking the bank. Featuring a plush queen-sized bed, crisp linens, and a quiet ambiance, it is the perfect retreat after a day of exploring. Though compact, the design maximizes space and functionality.',
    features: ['Non-AC', 'Queen Bed', 'Free Wi-Fi', 'TV', 'Attached Bath', 'Wardrobe', 'Daily Housekeeping'],
    gallery: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'family',
    name: 'Family Suite',
    price: 5500,
    size: '500 sq ft',
    occupancy: '4 Adults',
    bedType: '2 Double Beds',
    view: 'Panoramic View',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    description: 'Large suite with two double beds, creating a perfect space for families.',
    longDescription: 'The Family Suite is designed for togetherness. With ample space, a dedicated seating area, and two large double beds, your whole family can stay together comfortably. The room includes a separate changing area, a large bathroom, and improved soundproofing to ensure everyone rests well.',
    features: ['AC', '2 Double Beds', 'Mini Fridge', 'Seating Area', 'City View', 'Bathtub', '24/7 Room Service'],
    gallery: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-f33efe29a77d?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

// Core Initialization
function init() {
    try {
        setupMobileMenu();
        highlightActiveLink();
        setupGallery();
        setupContactForm();
        setupRoomDetails();
    } catch (e) {
        console.error("Initialization error:", e);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        newBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

function highlightActiveLink() {
    try {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const links = document.querySelectorAll('.nav-link');
        
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;
            
            const isMatch = href === currentPath || 
                        (currentPath === '' && href === 'index.html') ||
                        (currentPath.replace('.html', '') === href.replace('.html', ''));

            if (isMatch) {
                link.classList.add('nav-active', 'border-brand-gold', 'text-brand-dark');
                link.classList.remove('border-transparent');
            } else {
                link.classList.remove('nav-active', 'border-brand-gold', 'text-brand-dark');
                link.classList.add('border-transparent');
            }
        });
    } catch(e) {
        console.warn("Nav highlight failed", e);
    }
}

function setupRoomDetails() {
    const nameEl = document.getElementById('room-name');
    if (!nameEl) return;

    const params = new URLSearchParams(window.location.search);
    const roomId = params.get('id');
    const room = ROOMS.find(r => r.id === roomId);

    if (!room) {
        const content = document.getElementById('room-content');
        const error = document.getElementById('error-content');
        if(content) content.classList.add('hidden');
        if(error) error.classList.remove('hidden');
        return;
    }

    const setText = (id, text) => {
        const el = document.getElementById(id);
        if(el) el.textContent = text;
    };

    document.title = `${room.name} | Sunshine Hotel`;
    setText('room-name', room.name);
    setText('room-price', `₹${room.price}`);
    setText('room-desc', room.longDescription);
    setText('room-size', room.size);
    setText('room-occupancy', room.occupancy);
    setText('room-bed', room.bedType);
    setText('room-view', room.view);
    
    const mainImage = document.getElementById('main-image');
    if(mainImage) mainImage.src = room.image;

    const featureContainer = document.getElementById('room-features');
    if(featureContainer) {
        featureContainer.innerHTML = room.features.map(f => `
            <div class="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg border border-gray-50 shadow-sm">
                <span class="text-green-600 font-bold">✓</span>
                <span class="font-medium">${f}</span>
            </div>
        `).join('');
    }

    const galleryContainer = document.getElementById('gallery-thumbs');
    if(galleryContainer) {
        const allImages = [room.image, ...room.gallery];
        galleryContainer.innerHTML = allImages.map((img) => `
            <button onclick="document.getElementById('main-image').src = '${img}'" 
                class="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 border-transparent hover:border-brand-gold transition-all">
                <img src="${img}" class="w-full h-full object-cover">
            </button>
        `).join('');
    }
    
    // Note: The whatsapp button now uses the global window.openWhatsApp defined in head
    // We attach specific message logic here if needed, but the HTML onclick handles the base case.
    const btn = document.getElementById('whatsapp-book-btn');
    if(btn) {
        // Override the default onclick for dynamic room name
        btn.onclick = () => {
             const text = `Hi, I am interested in booking the ${room.name}. Please confirm availability.`;
             window.openWhatsApp(text);
        };
    }
}

function setupGallery() {
    const images = document.querySelectorAll('.gallery-img');
    if(images.length === 0) return;

    const existing = document.getElementById('lightbox');
    if(existing) existing.remove();

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'fixed inset-0 z-[60] bg-black/95 hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300';
    
    lightbox.innerHTML = `
        <button id="lightbox-close" class="absolute top-4 right-4 text-white hover:text-gray-300 p-2">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <img id="lightbox-img" src="" class="max-w-full max-h-[90vh] rounded shadow-2xl object-contain">
    `;
    
    document.body.appendChild(lightbox);
    
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.classList.remove('hidden');
        void lightbox.offsetWidth;
        lightbox.classList.remove('opacity-0');
    }

    function closeLightbox() {
        lightbox.classList.add('opacity-0');
        setTimeout(() => lightbox.classList.add('hidden'), 300);
    }

    images.forEach(img => {
        img.addEventListener('click', () => openLightbox(img.src));
    });

    if(closeBtn) closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
}

function setupContactForm() {
    const form = document.getElementById('enquiry-form');
    if (form) {
        const newForm = form.cloneNode(true);
        form.parentNode.replaceChild(newForm, form);

        newForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(newForm);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const date = formData.get('date');
            const message = formData.get('message');
            
            const text = `New Enquiry from Website:%0AName: ${name}%0APhone: ${phone}%0ACheck-in: ${date}%0AMessage: ${message}`;
            window.openWhatsApp(text);
        });
    }
}