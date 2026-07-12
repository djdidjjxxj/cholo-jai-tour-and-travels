export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  image: string;
  shortDescription: string;
  featured?: boolean;
}

export const packages: TourPackage[] = [
  {
    id: "pkg-1",
    title: "Enchanting Kashmir",
    destination: "Kashmir, India",
    duration: "5 Nights / 6 Days",
    price: "₹18,500",
    image: "/images/tour-1.jpeg",
    shortDescription: "Experience the paradise on earth with our curated Kashmir package. Includes Srinagar, Gulmarg, and Pahalgam.",
    featured: true
  },
  {
    id: "pkg-2",
    title: "Darjeeling & Sikkim Delight",
    destination: "Darjeeling, India",
    duration: "6 Nights / 7 Days",
    price: "₹15,000",
    image: "/images/tour-2.png",
    shortDescription: "Discover the breathtaking beauty of the Himalayas. Visit the tea gardens and beautiful monasteries.",
    featured: true
  },
  {
    id: "pkg-3",
    title: "Andaman Adventure",
    destination: "Andaman Islands",
    duration: "4 Nights / 5 Days",
    price: "₹22,000",
    image: "/images/tour-3.png",
    shortDescription: "Relax on pristine beaches and explore the rich marine life in the crystal clear waters of Andaman.",
    featured: true
  },
  {
    id: "pkg-4",
    title: "Majestic Rajasthan",
    destination: "Rajasthan, India",
    duration: "7 Nights / 8 Days",
    price: "₹25,000",
    image: "/images/tour-4.png",
    shortDescription: "Explore the royal palaces, majestic forts, and vibrant culture of the desert state.",
    featured: true
  },
  {
    id: "pkg-5",
    title: "Kerala Backwaters",
    destination: "Kerala, India",
    duration: "5 Nights / 6 Days",
    price: "₹16,500",
    image: "/images/tour-5.png",
    shortDescription: "Cruise through the serene backwaters of Alleppey and relax in the lush green landscapes of Munnar.",
    featured: true
  },
  {
    id: "pkg-6",
    title: "Goa Getaway",
    destination: "Goa, India",
    duration: "3 Nights / 4 Days",
    price: "₹12,000",
    image: "/images/tour-6.png",
    shortDescription: "Enjoy the sun, sand, and sea with our exciting Goa tour packages. Perfect for a quick escape.",
    featured: true
  },
  {
    id: "pkg-7",
    title: "Magical Meghalaya",
    destination: "Meghalaya, India",
    duration: "5 Nights / 6 Days",
    price: "₹17,500",
    image: "/images/tour-7.png",
    shortDescription: "Discover the abode of clouds — living root bridges, cascading waterfalls and misty highlands.",
    featured: true
  },
  {
    id: "pkg-8",
    title: "Ooty & Kodaikanal Hills",
    destination: "Tamil Nadu, India",
    duration: "4 Nights / 5 Days",
    price: "₹13,500",
    image: "/images/tour-8.png",
    shortDescription: "Escape to the Nilgiri hills with lush tea estates, botanical gardens, and cool mountain air.",
    featured: true
  },
  {
    id: "pkg-9",
    title: "Golden Triangle Tour",
    destination: "Delhi-Agra-Jaipur",
    duration: "5 Nights / 6 Days",
    price: "₹19,000",
    image: "/images/tour-9.png",
    shortDescription: "The classic India experience — visit the iconic Taj Mahal, Amber Fort, and Red Fort.",
    featured: true
  },
  {
    id: "pkg-10",
    title: "Leh Ladakh Expedition",
    destination: "Ladakh, India",
    duration: "7 Nights / 8 Days",
    price: "₹28,000",
    image: "/images/tour-10.png",
    shortDescription: "Conquer the land of high passes with dramatic landscapes, monasteries, and pristine lakes.",
    featured: true
  },
  {
    id: "pkg-11",
    title: "Varanasi Spiritual Tour",
    destination: "Varanasi, India",
    duration: "3 Nights / 4 Days",
    price: "₹10,500",
    image: "/images/tour-11.png",
    shortDescription: "Witness the mystical Ganga Aarti and explore the oldest living city in the world.",
    featured: false
  },
  {
    id: "pkg-12",
    title: "Coorg Coffee Trails",
    destination: "Coorg, Karnataka",
    duration: "3 Nights / 4 Days",
    price: "₹11,000",
    image: "/images/tour-12.png",
    shortDescription: "Immerse yourself in lush coffee plantations, misty hills, and cascading waterfalls in Scotland of India.",
    featured: false
  },
  {
    id: "pkg-13",
    title: "Spiti Valley Circuit",
    destination: "Himachal Pradesh",
    duration: "8 Nights / 9 Days",
    price: "₹32,000",
    image: "/images/tour-13.png",
    shortDescription: "An off-beat Himalayan adventure through ancient monasteries, high-altitude villages, and crystal rivers.",
    featured: false
  },
  {
    id: "pkg-14",
    title: "Sundarbans Mangrove Tour",
    destination: "West Bengal, India",
    duration: "2 Nights / 3 Days",
    price: "₹8,500",
    image: "/images/tour-14.png",
    shortDescription: "Explore the world's largest mangrove delta — spot Royal Bengal Tigers and cruise through dense jungle waterways.",
    featured: false
  }
];
