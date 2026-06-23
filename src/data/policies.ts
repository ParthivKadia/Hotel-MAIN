import type { HotelPolicies } from "../types/policy.types";

export const HOTEL_POLICIES: HotelPolicies = {
  cancellationPolicy: {
    freeCancellationDays: 2,
    description:
      "Free cancellation up to 48 hours before check-in. Cancellations made within 48 hours of check-in are charged for one night's stay.",
  },
  houseRules: [
    "Check-in from 14:00, check-out until 11:00",
    "Valid government-issued photo ID required at check-in",
    "No smoking inside rooms — designated smoking areas available",
    "Pets are not allowed",
    "Quiet hours from 22:00 to 07:00",
  ],
  childrenPolicy:
    "Children of all ages are welcome. Children under 6 stay free when using existing bedding. One child under 12 can stay free with an adult using existing beds.",
  extraBedPolicy:
    "Extra beds and cots are subject to availability and must be requested at the time of booking. Extra bed: ₹1,200 per night. Cot: ₹600 per night.",
  breakfastOptions: [
    { name: "Continental Breakfast", price: 450 },
    { name: "Indian Breakfast", price: 450 },
    { name: "Breakfast Buffet", price: 650 },
  ],
};