export interface CancellationPolicy {
  freeCancellationDays: number;
  description: string;
}

export interface BreakfastOption {
  name: string;
  price: number;
}

export interface HotelPolicies {
  cancellationPolicy: CancellationPolicy;
  houseRules: string[];
  childrenPolicy: string;
  extraBedPolicy: string;
  breakfastOptions: BreakfastOption[];
}

export interface NearbyAttraction {
  id: string;
  name: string;
  category: string;
  distanceKm: number;
}