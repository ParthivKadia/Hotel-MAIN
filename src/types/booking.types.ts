export type BookingStatus = "pending" | "confirmed" | "cancelled" | "completed";
export type PaymentStatus = "unpaid" | "paid" | "refunded";
export type PaymentMethod = "card" | "upi" | "netbanking" | "wallet";

export interface DateRange {
  checkIn: Date | null;
  checkOut: Date | null;
}

export interface GuestInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface Booking {
  id: string;
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
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  paymentMethod?: PaymentMethod;
  couponCode?: string;
  createdAt: Date;
  confirmationNumber: string;
}

export interface AvailabilitySearch {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
}
