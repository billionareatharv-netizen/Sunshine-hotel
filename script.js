// Constants
const HOTEL_PHONE = "+919876543210";
const HOTEL_WHATSAPP = "919876543210";

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    highlightActiveLink();
    setupGallery();
    setupContactForm();
});

// Mobile Menu Toggle
function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

// Highlight Current Page in Navbar
function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('nav-active', 'border-brand-gold', 'text-brand-dark');
        } else {
            link.classList.add('border-transparent');
        }
    });
}

// Gallery Lightbox
function setupGallery() {
    const images = document.querySelectorAll('.gallery-img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'fixed inset-0 z-[60] bg-black/95 hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300';
    
    lightbox.innerHTML = `
        <button class="absolute top-4 right-4 text-white hover:text-gray-300 p-2">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <img src="" class="max-w-full max-h-[90vh] rounded shadow-2xl object-contain">
    `;
    
    document.body.appendChild(lightbox);
    
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('button');

    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        setTimeout(() => lightbox.classList.remove('opacity-0'), 10);
    }

    function closeLightbox() {
        lightbox.classList.add('opacity-0');
        setTimeout(() => lightbox.classList.add('hidden'), 300);
    }

    images.forEach(img => {
        img.addEventListener('click', () => openLightbox(img.src));
    });

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
}

// Contact Form to WhatsApp
function setupContactForm() {
    const form = document.getElementById('enquiry-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const date = formData.get('date');
            const message = formData.get('message');
            
            const text = `New Enquiry from Website:%0AName: ${name}%0APhone: ${phone}%0ACheck-in: ${date}%0AMessage: ${message}`;
            const url = `https://wa.me/${HOTEL_WHATSAPP}?text=${text}`;
            
            window.open(url, '_blank');
        });
    }
}

// Helper: Open WhatsApp with message
function openWhatsApp(message) {
    const url = `https://wa.me/${HOTEL_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}