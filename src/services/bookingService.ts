import type { Booking, BookingStatus, PaymentStatus, PaymentMethod, GuestInfo } from "../types/booking.types";

export const VALID_COUPONS: Record<string, number> = {
  WELCOME10: 10,
  SAVE15: 15,
  RAJMAHAL20: 20,
};

export const validateCoupon = async (
  code: string
): Promise<{ valid: boolean; discountPercent: number; message: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const normalized = code.trim().toUpperCase();
  const discount = VALID_COUPONS[normalized];
  if (!discount) {
    return { valid: false, discountPercent: 0, message: "Invalid or expired coupon code." };
  }
  return { valid: true, discountPercent: discount, message: `Coupon applied — ${discount}% off your stay.` };
};

export interface BookingSubmission {
  roomId: string;
  guestInfo: GuestInfo;
  checkIn: Date;
  checkOut: Date;
  nights: number;
  guests: number;
  pricePerNight: number;
  totalPrice: number;
  taxAmount: number;
  discountAmount: number;
  finalAmount: number;
  paymentMethod: PaymentMethod;
  couponCode?: string;
}

const generateConfirmationNumber = () => `RM${Date.now().toString().slice(-8)}`;
const generateBookingId = () => `bk-${Math.random().toString(36).slice(2, 10)}`;

export const submitBooking = async (payload: BookingSubmission): Promise<Booking> => {
  await new Promise((resolve) => setTimeout(resolve, 900));

  const status: BookingStatus = "confirmed";
  const paymentStatus: PaymentStatus = "paid";

  const booking: Booking = {
    id: generateBookingId(),
    roomId: payload.roomId,
    guestInfo: payload.guestInfo,
    checkIn: payload.checkIn,
    checkOut: payload.checkOut,
    nights: payload.nights,
    guests: payload.guests,
    pricePerNight: payload.pricePerNight,
    totalPrice: payload.totalPrice,
    taxAmount: payload.taxAmount,
    discountAmount: payload.discountAmount,
    finalAmount: payload.finalAmount,
    status,
    paymentStatus,
    paymentMethod: payload.paymentMethod,
    couponCode: payload.couponCode,
    createdAt: new Date(),
    confirmationNumber: generateConfirmationNumber(),
  };

  return booking;
};