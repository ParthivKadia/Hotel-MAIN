import type { Booking, GuestInfo, AvailabilitySearch } from "../types/booking.types";
import { calculatePrice } from "../utils/calculatePrice";
import { generateConfirmationNumber } from "../utils/helpers";
import { getNights } from "../utils/formatDate";

export const bookingService = {
  createBooking: async (
    roomId: string,
    pricePerNight: number,
    search: AvailabilitySearch,
    guestInfo: GuestInfo,
    discountAmount = 0,
    couponCode?: string
  ): Promise<Booking> => {
    if (!search.checkIn || !search.checkOut) {
      throw new Error("Check-in and check-out dates are required.");
    }

    const nights = getNights(search.checkIn, search.checkOut);
    const priceBreakdown = calculatePrice(pricePerNight, nights, discountAmount);

    const booking: Booking = {
      id: crypto.randomUUID(),
      roomId,
      guestInfo,
      checkIn: search.checkIn,
      checkOut: search.checkOut,
      nights,
      guests: search.guests,
      pricePerNight,
      totalPrice: priceBreakdown.subtotal,
      taxAmount: priceBreakdown.taxAmount,
      discountAmount: priceBreakdown.discountAmount,
      finalAmount: priceBreakdown.totalAmount,
      status: "confirmed",
      paymentStatus: "paid",
      couponCode,
      createdAt: new Date(),
      confirmationNumber: generateConfirmationNumber(),
    };

    return booking;
  },

  validateCoupon: async (
    code: string
  ): Promise<{ valid: boolean; discountAmount: number }> => {
    const validCoupons: Record<string, number> = {
      WELCOME10: 500,
      STAY20: 1000,
    };
    const discount = validCoupons[code.toUpperCase()];
    return { valid: !!discount, discountAmount: discount ?? 0 };
  },
};
