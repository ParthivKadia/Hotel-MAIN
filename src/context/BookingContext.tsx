import React, { createContext, useContext, useMemo, useState } from "react";
import type { Room } from "../types/room.types";
import type { DateRange, GuestInfo, PaymentMethod, Booking } from "../types/booking.types";
import { SITE_CONFIG } from "../constants/siteConfig";
import { getNightsBetweenDates } from "../utils/formatDate";
import { validateCoupon, submitBooking } from "../services/bookingService";
import { validateBookingForm } from "../utils/validation";

interface CouponState {
  code: string;
  isApplied: boolean;
  discountPercent: number;
  error?: string;
}

interface PriceBreakdown {
  nights: number;
  pricePerNight: number;
  totalPrice: number;
  discountAmount: number;
  taxRate: number;
  taxAmount: number;
  finalAmount: number;
}

interface BookingContextValue {
  room: Room | null;
  setRoom: (room: Room) => void;
  dateRange: DateRange;
  setDateRange: (updates: Partial<DateRange>) => void;
  guests: number;
  setGuests: (guests: number) => void;
  guestInfo: GuestInfo;
  setGuestInfo: (updates: Partial<GuestInfo>) => void;
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
  coupon: CouponState;
  applyCoupon: (code: string) => Promise<void>;
  removeCoupon: () => void;
  errors: Record<string, string>;
  priceBreakdown: PriceBreakdown;
  isSubmitting: boolean;
  isConfirmed: boolean;
  confirmedBooking: Booking | null;
  confirmBooking: () => Promise<boolean>;
  resetBooking: () => void;
}

const defaultGuestInfo: GuestInfo = { firstName: "", lastName: "", email: "", phone: "", specialRequests: "" };
const defaultCoupon: CouponState = { code: "", isApplied: false, discountPercent: 0 };

const BookingContext = createContext<BookingContextValue | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const today = new Date();
  const [room, setRoom] = useState<Room | null>(null);
  const [dateRange, setDateRangeState] = useState<DateRange>({
    checkIn: new Date(today.getTime() + 86400000),
    checkOut: new Date(today.getTime() + 2 * 86400000),
  });
  const [guests, setGuests] = useState(2);
  const [guestInfo, setGuestInfoState] = useState<GuestInfo>(defaultGuestInfo);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [coupon, setCoupon] = useState<CouponState>(defaultCoupon);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  const setDateRange = (updates: Partial<DateRange>) => setDateRangeState((prev) => ({ ...prev, ...updates }));
  const setGuestInfo = (updates: Partial<GuestInfo>) => setGuestInfoState((prev) => ({ ...prev, ...updates }));

  const applyCoupon = async (code: string) => {
    const result = await validateCoupon(code);
    if (result.valid) {
      setCoupon({ code: code.trim().toUpperCase(), isApplied: true, discountPercent: result.discountPercent });
    } else {
      setCoupon({ code: code.trim().toUpperCase(), isApplied: false, discountPercent: 0, error: result.message });
    }
  };

  const removeCoupon = () => setCoupon(defaultCoupon);

  const priceBreakdown: PriceBreakdown = useMemo(() => {
    const nights = getNightsBetweenDates(dateRange.checkIn, dateRange.checkOut);
    const pricePerNight = room?.pricePerNight ?? 0;
    const totalPrice = pricePerNight * nights;
    const discountAmount = Math.round((totalPrice * coupon.discountPercent) / 100);
    const taxableAmount = totalPrice - discountAmount;
    const taxAmount = Math.round(taxableAmount * SITE_CONFIG.taxRate);
    const finalAmount = taxableAmount + taxAmount;
    return { nights, pricePerNight, totalPrice, discountAmount, taxRate: SITE_CONFIG.taxRate, taxAmount, finalAmount };
  }, [room, dateRange, coupon.discountPercent]);

  const confirmBooking = async (): Promise<boolean> => {
    if (!room) return false;

    const { isValid, errors: validationErrors } = validateBookingForm({
      firstName: guestInfo.firstName,
      lastName: guestInfo.lastName,
      email: guestInfo.email,
      phone: guestInfo.phone,
      checkIn: dateRange.checkIn,
      checkOut: dateRange.checkOut,
      guests,
      maxGuests: room.maxGuests,
    });
    setErrors(validationErrors);
    if (!isValid || !dateRange.checkIn || !dateRange.checkOut) return false;

    setIsSubmitting(true);
    try {
      const booking = await submitBooking({
        roomId: room.id,
        guestInfo,
        checkIn: dateRange.checkIn,
        checkOut: dateRange.checkOut,
        nights: priceBreakdown.nights,
        guests,
        pricePerNight: priceBreakdown.pricePerNight,
        totalPrice: priceBreakdown.totalPrice,
        taxAmount: priceBreakdown.taxAmount,
        discountAmount: priceBreakdown.discountAmount,
        finalAmount: priceBreakdown.finalAmount,
        paymentMethod,
        couponCode: coupon.isApplied ? coupon.code : undefined,
      });
      setConfirmedBooking(booking);
      setIsConfirmed(true);
      return true;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetBooking = () => {
    setGuestInfoState(defaultGuestInfo);
    setCoupon(defaultCoupon);
    setErrors({});
    setIsConfirmed(false);
    setConfirmedBooking(null);
  };

  const value: BookingContextValue = {
    room,
    setRoom,
    dateRange,
    setDateRange,
    guests,
    setGuests,
    guestInfo,
    setGuestInfo,
    paymentMethod,
    setPaymentMethod,
    coupon,
    applyCoupon,
    removeCoupon,
    errors,
    priceBreakdown,
    isSubmitting,
    isConfirmed,
    confirmedBooking,
    confirmBooking,
    resetBooking,
  };

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
};

export const useBookingContext = (): BookingContextValue => {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBookingContext must be used within a BookingProvider");
  return ctx;
};