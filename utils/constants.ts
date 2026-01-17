export const HOTEL_INFO = {
  name: "Sunshine Hotel & Stay",
  tagline: "Luxury Comfort • Prime Location • Unmatched Service",
  phone: "+919876543210",
  whatsapp: "919876543210", // No special chars for API
  email: "bookings@sunshinehotel.com",
  address: "123 Green Valley Road, Near City Center, Hillside, 400001",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.123456789!2d77.123456!3d28.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzM0LjQiTiA3N8KwMDcnMzQuNCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
};

export interface RoomType {
  id: string;
  name: string;
  price: number;
  size: string;
  occupancy: string;
  bedType: string;
  view: string;
  image: string;
  description: string;
  longDescription: string;
  features: string[];
  gallery: string[];
}

export const ROOMS: RoomType[] = [
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

export const AMENITIES = [
  { name: 'Free High-Speed Wi-Fi', icon: 'Wifi', desc: 'Stay connected with 100mbps dedicated fiber line.' },
  { name: 'Secure Parking', icon: 'Car', desc: 'Complimentary valet parking for all guests.' },
  { name: '24/7 Room Service', icon: 'Utensils', desc: 'Delicious food delivered to your room anytime.' },
  { name: 'Hot & Cold Water', icon: 'Droplets', desc: 'Premium plumbing with 24hr hot water supply.' },
  { name: 'Power Backup', icon: 'Zap', desc: 'Full generator backup ensuring zero downtime.' },
  { name: 'CCTV Security', icon: 'ShieldCheck', desc: '24-hour surveillance for your peace of mind.' },
  { name: 'In-house Restaurant', icon: 'Coffee', desc: 'Multi-cuisine fine dining restaurant.' },
  { name: 'Daily Housekeeping', icon: 'Sparkles', desc: 'Impeccable cleanliness maintained daily.' }
];

export const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    location: "Mumbai",
    text: "Excellent stay! The rooms were spotless and the staff was incredibly helpful. Highly recommended for families looking for luxury on a budget.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    location: "London",
    text: "Great value for money. The location is perfect, close to all tourist spots. The new renovations look amazing and very modern.",
    rating: 5
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad",
    text: "Very comfortable beds and the food at the restaurant was delicious. A true home away from home feeling.",
    rating: 4
  }
];