// Hotel content translations — description, fullDescription, features, room names & descriptions
// These overlay the static hotels.ts data based on the active language.

export interface RoomTranslation {
  name: string;
  description: string;
}

export interface HotelTranslation {
  description: string;
  fullDescription: string;
  features: string[];
  rooms: RoomTranslation[];
}

export interface HotelContentTranslations {
  "canary-kendwa": HotelTranslation;
  "canary-spa": HotelTranslation;
  "golden-nungwi": HotelTranslation;
}

export const hotelContentEn: HotelContentTranslations = {
  "canary-kendwa": {
    description:
      "A 4-star resort on the northwest coast of Zanzibar, featuring beautiful beaches, coconut palms, and coral reefs. Famous for its stunning sunset views and incredible sea colors.",
    fullDescription:
      "Located on the world-famous Kendwa Beach, Canary Kendwa Hotel offers an idyllic escape where white sands meet turquoise waters. Our beachfront property features stunning sunset views, direct ocean access, and a range of water sports activities. The hotel blends traditional Zanzibari architecture with modern luxury, creating a unique atmosphere of refined comfort. Each morning, wake to the sound of gentle waves and the sight of traditional dhows sailing by. Our dedicated team ensures every guest experiences the warmth of Swahili hospitality.",
    features: ["Beachfront", "Swimming Pool", "Ceylon SPA", "Restaurant & Bar", "Free Wi-Fi"],
    rooms: [
      {
        name: "Deluxe Double Room - Pool View",
        description:
          "Larger room with furnished balcony/veranda featuring chairs and table. Air conditioning, ceiling fan, safe, tea/coffee maker, mini-fridge, and hairdryer. Enjoys beautiful views of the pool area.",
      },
      {
        name: "Deluxe Double Room - Sea View",
        description:
          "Spacious room with furnished balcony/veranda overlooking the stunning turquoise sea. Air conditioning, ceiling fan, safe, tea/coffee maker, mini-fridge, Wi-Fi, and hairdryer included.",
      },
      {
        name: "Junior Suite - Garden View",
        description:
          "Spacious suite with enhanced amenities and furnished balcony/veranda. Features 2 King beds, accommodating up to 4 adults + 1 child. Air conditioning, safe, tea/coffee maker, and lush garden views.",
      },
      {
        name: "Junior Suite - Ocean View",
        description:
          "Premium suite with breathtaking ocean views from your private balcony/veranda. Features 2 King beds for up to 4 adults + 1 child. Full amenities including air conditioning, safe, and tea/coffee maker.",
      },
    ],
  },
  "canary-spa": {
    description:
      "A newly built 4-star luxury escape in the heart of Nungwi, just steps from the island's famous white-sand beach. Experience modern elegance with warm island hospitality.",
    fullDescription:
      "Discover Canary Hotel & Spa, a newly built 4-star luxury escape in the heart of Nungwi, Zanzibar, just steps from the island's famous white-sand beach. The hotel features 47 rooms across multiple categories blending modern elegance with warm island hospitality. Experience stylish rooms, elevated dining, and a full wellness experience including a spa, hammam, sauna, and fitness center. Our on-site facilities include a rooftop restaurant with panoramic views, poolside grill, volleyball, billiards, darts, table tennis, and a fully equipped fitness center. Guests can also enjoy complimentary bicycles, water-sports activities, and evening entertainment such as live music and cultural performances.",
    features: ["Full-Service Spa", "47 Stylish Rooms", "Rooftop Dining", "Wellness Center", "Pool & Beach Access"],
    rooms: [
      {
        name: "Luxury King Room",
        description:
          "A refined and spacious room featuring 1 King bed, private en-suite bathroom with rain-shower, air-conditioning, smart TV, mini-fridge, and tea/coffee station. Pool view with balcony or patio.",
      },
      {
        name: "Luxury Double Room",
        description:
          "Thoughtfully designed room with 2 single beds, offering comfort and modern convenience. Rain-shower bathroom, air-conditioning, Smart TV, and inviting balcony with pool view.",
      },
      {
        name: "Luxury Triple Room",
        description:
          "Perfect for small groups, this spacious room offers 3 single beds and rain-shower en-suite, Smart TV, mini-fridge, and comfortable seating area with pool view balcony.",
      },
      {
        name: "Budget King Room",
        description:
          "Comfortable and well-equipped room featuring 1 Queen bed with air-conditioning and ceiling fan. Rain-shower bathroom, Smart TV, mini-fridge, and work desk.",
      },
      {
        name: "Budget Double Room",
        description:
          "Bright and functional room with 2 single beds, air-conditioning and ceiling fan. Rain-shower bathroom, Smart TV, mini-fridge, and seating area.",
      },
      {
        name: "Budget Triple Room",
        description:
          "Spacious budget option with 3 single beds, air-conditioning, ceiling fan, rain-shower bathroom, and all essential amenities for a comfortable stay.",
      },
    ],
  },
  "golden-nungwi": {
    description:
      "Canary Golden delivers an effortless blend of comfort, value, and Nungwi's lively beachside spirit. Designed for explorers and budget-savvy travelers with well-appointed rooms just moments from the beach.",
    fullDescription:
      "Canary Golden Hotel delivers an effortless blend of comfort, value, and Nungwi's lively beachside spirit. Designed for explorers and budget-savvy travelers, the hotel offers well-appointed rooms, friendly service, and an inviting setting just moments from the area's beaches and local experiences. Located on Zanzibar's northern tip, just 100m from Nungwi Beach, the hotel offers quick access to one of the island's most beautiful, swimmable coastlines. Enjoy our swimming pool, restaurant, evening entertainment with live music and cultural performances, and easy access to water sports and local attractions.",
    features: ["Swimming Pool", "Restaurant", "Free Wi-Fi", "Beach Access", "Entertainment"],
    rooms: [
      {
        name: "Deluxe King Room",
        description:
          "A bright and welcoming 30 m² room featuring a king-sized bed, air-conditioning, and a private bathroom. The room includes a balcony, coffee tray, Smart TV, Wi-Fi, and a mini-fridge, with a lovely pool view.",
      },
      {
        name: "Deluxe Twin Room",
        description:
          "This 30 m² air-conditioned room offers two single beds, a private bathroom, and a balcony. Amenities include a coffee tray, Smart TV, Wi-Fi, and mini-fridge with garden view.",
      },
      {
        name: "Deluxe Triple Room",
        description:
          "A spacious room designed for shared stays, offering three single beds, a private bathroom, balcony, and terrace. Complete with coffee tray, Smart TV, Wi-Fi, and mini-fridge with pool and garden views.",
      },
      {
        name: "Family Suite",
        description:
          "The 80 m² suite features two rooms: the main with a king bed and the second with two double beds. Includes private bathroom, balcony, coffee tray, smart TV, Wi-Fi, and mini fridge with ocean and garden views.",
      },
      {
        name: "Standard Double Room",
        description:
          "A practical and well-equipped room offering air-conditioning, a private bathroom, Smart TV, Wi-Fi, coffee tray, and a mini-fridge. A comfortable option with garden view.",
      },
      {
        name: "Standard Twin Room",
        description:
          "A practical room with two single beds offering air-conditioning, private bathroom, Smart TV, Wi-Fi, coffee tray, and mini-fridge. Simple and comfortable with garden view.",
      },
    ],
  },
};
