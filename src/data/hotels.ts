import { Clock, Shield, Car, Shirt, Baby, Phone, Heart, Wifi, LucideIcon } from "lucide-react";

export interface GuestService {
  icon: LucideIcon;
  title: string;
}

export const guestServices: GuestService[] = [
  { icon: Clock, title: "24/7 Reception & Concierge" },
  { icon: Shield, title: "24-Hour Security + CCTV" },
  { icon: Car, title: "Airport Transfers" },
  { icon: Shirt, title: "Laundry & Dry Cleaning" },
  { icon: Baby, title: "Babysitting, Cots & High Chairs" },
  { icon: Phone, title: "Room Service" },
  { icon: Heart, title: "Doctor on Call" },
  { icon: Wifi, title: "High-Speed Wi-Fi" },
];

export interface Room {
  name: string;
  description: string;
  image: string;
  images?: string[];
  rate?: string;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  features: string[];
  bookingUrl: string;
  rooms: Room[];
  gallery: string[];
  fullDescription: string;
  stars?: number;
  mapLocation?: { lat: number; lng: number };
  googleMapsUrl?: string;
}

export const hotels: Hotel[] = [
  {
    id: "canary-kendwa",
    name: "Canary Kendwa Beach Resort",
    location: "Kendwa, Zanzibar",
    description:
      "A 4-star resort on the northwest coast of Zanzibar, featuring beautiful beaches, coconut palms, and coral reefs. Famous for its stunning sunset views and incredible sea colors.",
    image: "/lovable-uploads/canary-kendwa-cover.webp",
    features: ["Beachfront", "Swimming Pool", "Ceylon SPA", "Restaurant & Bar", "Free Wi-Fi"],
    bookingUrl: "https://us2.cloudbeds.com/en/reservation/3XOVmI?currency=usd",
    stars: 4,
    mapLocation: { lat: -5.7567, lng: 39.2283 },
    googleMapsUrl: "https://maps.app.goo.gl/ygkmfy34iVfBLKPYA",
    rooms: [
      { 
        name: "Deluxe Double Room - Pool View", 
        description: "Larger room with furnished balcony/veranda featuring chairs and table. Air conditioning, ceiling fan, safe, tea/coffee maker, mini-fridge, and hairdryer. Enjoys beautiful views of the pool area.",
        image: "/lovable-uploads/canary-kendwa-deluxe-pool.webp",
        rate: "From $160/night"
      },
      { 
        name: "Deluxe Double Room - Sea View", 
        description: "Spacious room with furnished balcony/veranda overlooking the stunning turquoise sea. Air conditioning, ceiling fan, safe, tea/coffee maker, mini-fridge, Wi-Fi, and hairdryer included.",
        image: "/lovable-uploads/canary-kendwa-deluxe-sea.webp",
        rate: "From $160/night"
      },
      { 
        name: "Junior Suite - Garden View", 
        description: "Spacious suite with enhanced amenities and furnished balcony/veranda. Features 2 King beds, accommodating up to 4 adults + 1 child. Air conditioning, safe, tea/coffee maker, and lush garden views.",
        image: "/lovable-uploads/canary-kendwa-junior-garden.webp",
        rate: "From $200/night"
      },
      { 
        name: "Junior Suite - Ocean View", 
        description: "Premium suite with breathtaking ocean views from your private balcony/veranda. Features 2 King beds for up to 4 adults + 1 child. Full amenities including air conditioning, safe, and tea/coffee maker.",
        image: "/lovable-uploads/canary-kendwa-junior-ocean.webp",
        rate: "From $200/night"
      },
    ],
    gallery: [
      "/lovable-uploads/canary-kendwa-main.webp",
      "/lovable-uploads/canary-kendwa-sunset.webp",
      "/lovable-uploads/canary-kendwa-restaurant.webp",
      "/lovable-uploads/canary-kendwa-room.webp",
    ],
    fullDescription: "Located on the world-famous Kendwa Beach, Canary Kendwa Hotel offers an idyllic escape where white sands meet turquoise waters. Our beachfront property features stunning sunset views, direct ocean access, and a range of water sports activities. The hotel blends traditional Zanzibari architecture with modern luxury, creating a unique atmosphere of refined comfort. Each morning, wake to the sound of gentle waves and the sight of traditional dhows sailing by. Our dedicated team ensures every guest experiences the warmth of Swahili hospitality.",
  },
  {
    id: "canary-spa",
    name: "Canary Hotel & Spa",
    location: "Nungwi, Zanzibar",
    description:
      "A newly built 4-star luxury escape in the heart of Nungwi, just steps from the island's famous white-sand beach. Experience modern elegance with warm island hospitality.",
    image: "/lovable-uploads/canary-spa-hero.jpg",
    features: ["Full-Service Spa", "47 Stylish Rooms", "Rooftop Dining", "Wellness Center", "Pool & Beach Access"],
    bookingUrl: "https://hotels.cloudbeds.com/en/reservation/Evu56P?currency=usd",
    stars: 4,
    mapLocation: { lat: -5.7247, lng: 39.2983 },
    googleMapsUrl: "https://maps.app.goo.gl/HbBkksF2DV2rdcSc6",
    rooms: [
      { 
        name: "Luxury King Room", 
        description: "A refined and spacious room featuring 1 King bed, private en-suite bathroom with rain-shower, air-conditioning, smart TV, mini-fridge, and tea/coffee station. Pool view with balcony or patio.",
        image: "/lovable-uploads/canary-luxury-king.jpg",
        rate: "From $150/night"
      },
      { 
        name: "Luxury Double Room", 
        description: "Thoughtfully designed room with 2 single beds, offering comfort and modern convenience. Rain-shower bathroom, air-conditioning, Smart TV, and inviting balcony with pool view.",
        image: "/lovable-uploads/canary-luxury-double.jpg",
        rate: "From $140/night"
      },
      { 
        name: "Luxury Triple Room", 
        description: "Perfect for small groups, this spacious room offers 3 single beds and rain-shower en-suite, Smart TV, mini-fridge, and comfortable seating area with pool view balcony.",
        image: "/lovable-uploads/canary-luxury-triple.jpg",
        rate: "From $180/night"
      },
      { 
        name: "Budget King Room", 
        description: "Comfortable and well-equipped room featuring 1 Queen bed with air-conditioning and ceiling fan. Rain-shower bathroom, Smart TV, mini-fridge, and work desk.",
        image: "/lovable-uploads/canary-budget-king.jpg",
        rate: "From $90/night"
      },
      { 
        name: "Budget Double Room", 
        description: "Bright and functional room with 2 single beds, air-conditioning and ceiling fan. Rain-shower bathroom, Smart TV, mini-fridge, and seating area.",
        image: "/lovable-uploads/canary-budget-double.jpg",
        rate: "From $85/night"
      },
      { 
        name: "Budget Triple Room", 
        description: "Spacious budget option with 3 single beds, air-conditioning, ceiling fan, rain-shower bathroom, and all essential amenities for a comfortable stay.",
        image: "/lovable-uploads/canary-budget-double.jpg",
        rate: "From $110/night"
      },
    ],
    gallery: [
      "/lovable-uploads/canary-spa-hero.jpg",
      "/lovable-uploads/canary-gallery-spa.png",
      "/lovable-uploads/canary-gallery-pool.jpg",
      "/lovable-uploads/canary-gallery-restaurant.jpg",
      "/lovable-uploads/canary-hotel-spa.jpg",
    ],
    fullDescription: "Discover Canary Hotel & Spa, a newly built 4-star luxury escape in the heart of Nungwi, Zanzibar, just steps from the island's famous white-sand beach. The hotel features 47 rooms across multiple categories blending modern elegance with warm island hospitality. Experience stylish rooms, elevated dining, and a full wellness experience including a spa, hammam, sauna, and fitness center. Our on-site facilities include a rooftop restaurant with panoramic views, poolside grill, volleyball, billiards, darts, table tennis, and a fully equipped fitness center. Guests can also enjoy complimentary bicycles, water-sports activities, and evening entertainment such as live music and cultural performances.",
  },
  {
    id: "golden-nungwi",
    name: "Canary Golden Hotel",
    location: "Nungwi, Zanzibar",
    description:
      "Canary Golden delivers an effortless blend of comfort, value, and Nungwi's lively beachside spirit. Designed for explorers and budget-savvy travelers with well-appointed rooms just moments from the beach.",
    image: "/lovable-uploads/golden-hero.jpg",
    features: ["Swimming Pool", "Restaurant", "Free Wi-Fi", "Beach Access", "Entertainment"],
    bookingUrl: "https://hotels.cloudbeds.com/en/reservation/EIW8gb?mode=popup&currency=usd",
    mapLocation: { lat: -5.7247, lng: 39.2983 },
    googleMapsUrl: "https://maps.app.goo.gl/yK65pXYcBJKmk9ue9",
    rooms: [
      { 
        name: "Deluxe King Room", 
        description: "A bright and welcoming 30 m² room featuring a king-sized bed, air-conditioning, and a private bathroom. The room includes a balcony, coffee tray, Smart TV, Wi-Fi, and a mini-fridge, with a lovely pool view.",
        image: "/lovable-uploads/golden-delux-king.jpg",
        rate: "From $80/night"
      },
      { 
        name: "Deluxe Twin Room", 
        description: "This 30 m² air-conditioned room offers two single beds, a private bathroom, and a balcony. Amenities include a coffee tray, Smart TV, Wi-Fi, and mini-fridge with garden view.",
        image: "/lovable-uploads/golden-delux-twin.jpg",
        rate: "From $75/night"
      },
      { 
        name: "Deluxe Triple Room", 
        description: "A spacious room designed for shared stays, offering three single beds, a private bathroom, balcony, and terrace. Complete with coffee tray, Smart TV, Wi-Fi, and mini-fridge with pool and garden views.",
        image: "/lovable-uploads/golden-delux-triple.jpg",
        rate: "From $95/night"
      },
      { 
        name: "Family Suite", 
        description: "The 80 m² suite features two rooms: the main with a king bed and the second with two double beds. Includes private bathroom, balcony, coffee tray, smart TV, Wi-Fi, and mini fridge with ocean and garden views.",
        image: "/lovable-uploads/golden-family-suite.jpg",
        rate: "From $150/night"
      },
      { 
        name: "Standard Double Room", 
        description: "A practical and well-equipped room offering air-conditioning, a private bathroom, Smart TV, Wi-Fi, coffee tray, and a mini-fridge. A comfortable option with garden view.",
        image: "/lovable-uploads/golden-standard-double.jpg",
        rate: "From $60/night"
      },
      { 
        name: "Standard Twin Room", 
        description: "A practical room with two single beds offering air-conditioning, private bathroom, Smart TV, Wi-Fi, coffee tray, and mini-fridge. Simple and comfortable with garden view.",
        image: "/lovable-uploads/golden-standard-double.jpg",
        rate: "From $55/night"
      },
    ],
    gallery: [
      "/lovable-uploads/golden-hero.jpg",
      "/lovable-uploads/golden-gallery-pool.jpg",
      "/lovable-uploads/golden-delux-king.jpg",
      "/lovable-uploads/golden-family-suite.jpg",
    ],
    fullDescription: "Canary Golden Hotel delivers an effortless blend of comfort, value, and Nungwi's lively beachside spirit. Designed for explorers and budget-savvy travelers, the hotel offers well-appointed rooms, friendly service, and an inviting setting just moments from the area's beaches and local experiences. Located on Zanzibar's northern tip, just 100m from Nungwi Beach, the hotel offers quick access to one of the island's most beautiful, swimmable coastlines. Enjoy our swimming pool, restaurant, evening entertainment with live music and cultural performances, and easy access to water sports and local attractions.",
  },
];
