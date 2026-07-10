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
    featured: false
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
    featured: false
  }
];
