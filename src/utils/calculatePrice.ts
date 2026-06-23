// // import { SITE_CONFIG } from "../constants/siteConfig";

// // export interface PriceBreakdown {
// //   pricePerNight: number;
// //   nights: number;
// //   subtotal: number;
// //   taxAmount: number;
// //   discountAmount: number;
// //   totalAmount: number;
// // }

// // export const calculatePrice = (
// //   pricePerNight: number,
// //   nights: number,
// //   discountAmount = 0
// // ): PriceBreakdown => {
// //   const subtotal = pricePerNight * nights;
// //   const discounted = subtotal - discountAmount;
// //   const taxAmount = Math.round(discounted * SITE_CONFIG.taxRate);
// //   const totalAmount = discounted + taxAmount;

// //   return {
// //     pricePerNight,
// //     nights,
// //     subtotal,
// //     taxAmount,
// //     discountAmount,
// //     totalAmount,
// //   };
// // };
// import { SITE_CONFIG } from "../constants/siteConfig";

// export interface PriceBreakdown {
//   nights: number;
//   pricePerNight: number;
//   subtotal: number;
//   taxRate: number;
//   taxAmount: number;
//   total: number;
// }

// export const calculatePrice = (
//   pricePerNight: number,
//   nights: number = 1,
//   taxRate: number = SITE_CONFIG.taxRate
// ): PriceBreakdown => {
//   const safeNights = Math.max(1, nights);
//   const subtotal = pricePerNight * safeNights;
//   const taxAmount = Math.round(subtotal * taxRate);
//   const total = subtotal + taxAmount;
//   return { nights: safeNights, pricePerNight, subtotal, taxRate, taxAmount, total };
// };

// export const getNightsBetween = (checkIn: string, checkOut: string): number => {
//   const start = new Date(checkIn).getTime();
//   const end = new Date(checkOut).getTime();
//   const diff = Math.round((end - start) / (1000 * 60 * 60 * 24));
//   return diff > 0 ? diff : 1;
// };
import { SITE_CONFIG } from "../constants/siteConfig";

export interface PriceBreakdown {
  nights: number;
  pricePerNight: number;
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  discountAmount: number;
  totalAmount: number;
}

export const calculatePrice = (
  pricePerNight: number,
  nights: number = 1,
  discountAmount: number = 0
): PriceBreakdown => {
  const safeNights = Math.max(1, nights);

  const subtotal = pricePerNight * safeNights;

  const discountedSubtotal = Math.max(0, subtotal - discountAmount);

  const taxRate = SITE_CONFIG.taxRate;

  const taxAmount = Math.round(discountedSubtotal * taxRate);

  const totalAmount = discountedSubtotal + taxAmount;

  return {
    nights: safeNights,
    pricePerNight,
    subtotal,
    taxRate,
    taxAmount,
    discountAmount,
    totalAmount,
  };
};

export const getNightsBetween = (
  checkIn: string,
  checkOut: string
): number => {
  const start = new Date(checkIn).getTime();
  const end = new Date(checkOut).getTime();

  const diff = Math.round(
    (end - start) / (1000 * 60 * 60 * 24)
  );

  return diff > 0 ? diff : 1;
};