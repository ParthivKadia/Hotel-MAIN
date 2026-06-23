export interface HotelAmenity {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: "wellness" | "dining" | "business" | "recreation" | "convenience";
}

export const hotelAmenities: HotelAmenity[] = [
  {
    id: "ha1",
    name: "Rooftop Pool",
    description: "Open-air pool on the 14th floor with city skyline views. Open 7 AM – 9 PM.",
    icon: "waves",
    category: "recreation",
  },
  {
    id: "ha2",
    name: "Fitness Center",
    description: "Fully equipped gym with modern cardio and strength training equipment.",
    icon: "dumbbell",
    category: "wellness",
  },
  {
    id: "ha3",
    name: "The Mahal Restaurant",
    description: "All-day dining serving Indian and continental cuisine. Open for breakfast, lunch, and dinner.",
    icon: "utensils",
    category: "dining",
  },
  {
    id: "ha4",
    name: "Lobby Bar",
    description: "Relaxed bar serving cocktails, mocktails, and light bites. Open 11 AM – 11 PM.",
    icon: "wine",
    category: "dining",
  },
  {
    id: "ha5",
    name: "Wellness Spa",
    description: "Full-service spa offering massages, facials, and body treatments.",
    icon: "leaf",
    category: "wellness",
  },
  {
    id: "ha6",
    name: "Business Center",
    description: "24-hour business center with printing, scanning, and workstations.",
    icon: "briefcase",
    category: "business",
  },
  {
    id: "ha7",
    name: "Meeting Rooms",
    description: "Three meeting rooms with AV equipment, accommodating 10–50 guests.",
    icon: "presentation",
    category: "business",
  },
  {
    id: "ha8",
    name: "Free Wi-Fi",
    description: "High-speed wireless internet throughout the property — no password required.",
    icon: "wifi",
    category: "convenience",
  },
  {
    id: "ha9",
    name: "Valet Parking",
    description: "Complimentary valet parking service available 24 hours.",
    icon: "car",
    category: "convenience",
  },
  {
    id: "ha10",
    name: "Airport Transfer",
    description: "Pre-arranged airport pickup and drop-off available on request.",
    icon: "plane",
    category: "convenience",
  },
];
