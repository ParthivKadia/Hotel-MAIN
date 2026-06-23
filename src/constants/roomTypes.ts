// import type { RoomType, BedType } from "../types/room.types";

// export const ROOM_TYPE_LABELS: Record<RoomType, string> = {
//   standard: "Standard Room",
//   deluxe: "Deluxe Room",
//   suite: "Suite",
//   executive: "Executive Room",
// };

// export const BED_TYPE_LABELS: Record<BedType, string> = {
//   single: "Single Bed",
//   double: "Double Bed",
//   queen: "Queen Bed",
//   king: "King Bed",
//   twin: "Twin Beds",
// };

// export const ROOM_TYPE_OPTIONS = Object.entries(ROOM_TYPE_LABELS).map(
//   ([value, label]) => ({ value, label })
// );

// export const BED_TYPE_OPTIONS = Object.entries(BED_TYPE_LABELS).map(
//   ([value, label]) => ({ value, label })
// );

// export const PRICE_RANGES = [
//   { label: "Under ₹3,000", min: 0, max: 3000 },
//   { label: "₹3,000 – ₹6,000", min: 3000, max: 6000 },
//   { label: "₹6,000 – ₹10,000", min: 6000, max: 10000 },
//   { label: "Above ₹10,000", min: 10000, max: Infinity },
// ];
import type { RoomType, BedType } from "../types/room.types";

export const ROOM_TYPE_LABELS: Record<RoomType, string> = {
  standard: "Standard Room",
  deluxe: "Deluxe Room",
  suite: "Suite",
  executive: "Executive Room",
};

export const BED_TYPE_LABELS: Record<BedType, string> = {
  single: "Single Bed",
  double: "Double Bed",
  queen: "Queen Bed",
  king: "King Bed",
  twin: "Twin Beds",
};

export const ROOM_TYPE_OPTIONS = Object.entries(ROOM_TYPE_LABELS).map(
  ([value, label]) => ({ value, label })
);

export const BED_TYPE_OPTIONS = Object.entries(BED_TYPE_LABELS).map(
  ([value, label]) => ({ value, label })
);

export const PRICE_RANGES = [
  { label: "Under ₹3,000", min: 0, max: 3000 },
  { label: "₹3,000 – ₹6,000", min: 3000, max: 6000 },
  { label: "₹6,000 – ₹10,000", min: 6000, max: 10000 },
  { label: "Above ₹10,000", min: 10000, max: Infinity },
];

export const VIEW_TYPE_OPTIONS = [
  { value: "city", label: "City View" },
  { value: "garden", label: "Garden View" },
  { value: "sea", label: "Sea View" },
  { value: "pool", label: "Pool View" },
  { value: "marine-drive", label: "Marine Drive View" },
];

export const SORT_OPTIONS = [
  { value: "recommended", label: "Recommended" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Guest Rating" },
];