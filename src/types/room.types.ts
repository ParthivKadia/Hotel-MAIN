// export type RoomType = "standard" | "deluxe" | "suite" | "executive";
// export type BedType = "single" | "double" | "queen" | "king" | "twin";

// export interface RoomAmenity {
//   id: string;
//   name: string;
//   icon: string;
// }

// export interface RoomImage {
//   id: string;
//   url: string;
//   alt: string;
//   isPrimary?: boolean;
// }

// export interface Room {
//   id: string;
//   name: string;
//   slug: string;
//   type: RoomType;
//   description: string;
//   shortDescription: string;
//   pricePerNight: number;
//   originalPrice?: number;
//   maxGuests: number;
//   bedType: BedType;
//   bedCount: number;
//   size: number;
//   floor?: number;
//   amenities: RoomAmenity[];
//   images: RoomImage[];
//   rating: number;
//   reviewCount: number;
//   isAvailable: boolean;
//   isFeatured?: boolean;
//   tags?: string[];
// }

// export interface RoomFilter {
//   type?: RoomType | "all";
//   priceMin?: number;
//   priceMax?: number;
//   guests?: number;
//   bedType?: BedType | "all";
// }
export type RoomType = "standard" | "deluxe" | "suite" | "executive";
export type BedType = "single" | "double" | "queen" | "king" | "twin";
export type ViewType = "city" | "garden" | "sea" | "pool" | "marine-drive";
export type SortOption = "recommended" | "price-low" | "price-high" | "rating";

export interface RoomAmenity {
  id: string;
  name: string;
  icon: string;
}

export interface RoomImage {
  id: string;
  url: string;
  alt: string;
  isPrimary?: boolean;
}

export interface Room {
  id: string;
  name: string;
  slug: string;
  type: RoomType;
  description: string;
  shortDescription: string;
  pricePerNight: number;
  originalPrice?: number;
  maxGuests: number;
  bedType: BedType;
  bedCount: number;
  size: number;
  floor?: number;
  viewType: ViewType;
  bathroomType: string;
  breakfastIncluded: boolean;
  amenities: RoomAmenity[];
  images: RoomImage[];
  rating: number;
  reviewCount: number;
  isAvailable: boolean;
  isFeatured?: boolean;
  tags?: string[];
}

export interface RoomFilter {
  type?: RoomType | "all";
  priceMin?: number;
  priceMax?: number;
  guests?: number;
  bedType?: BedType | "all";
  view?: ViewType | "all";
  amenities?: string[];
  availableOnly?: boolean;
  search?: string;
  sortBy?: SortOption;
}