import { useState } from "react";
import type { Booking, GuestInfo, AvailabilitySearch } from "../types/booking.types";
import { calculatePrice } from "../utils/calculatePrice";
import { generateConfirmationNumber } from "../utils/helpers";
import { getNights } from "../utils/formatDate";

export const useBooking = () => {
  const [search, setSearch] = useState<AvailabilitySearch>({
    checkIn: null,
    checkOut: null,
    guests: 1,
  });

  const [guestInfo, setGuestInfo] = useState<GuestInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const [couponCode, setCouponCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [booking, setBooking] = useState<Booking | null>(null);

  const updateSearch = (updates: Partial<AvailabilitySearch>) => {
    setSearch((prev) => ({ ...prev, ...updates }));
  };

  const applyCoupon = (code: string): boolean => {
    // Placeholder: real logic would hit an API
    const validCoupons: Record<string, number> = {
      WELCOME10: 500,
      STAY20: 1000,
    };
    const discount = validCoupons[code.toUpperCase()];
    if (discount) {
      setDiscountAmount(discount);
      setCouponCode(code);
      return true;
    }
    return false;
  };

  const removeCoupon = () => {
    setDiscountAmount(0);
    setCouponCode("");
  };

  const createBooking = async (
    roomId: string,
    pricePerNight: number
  ): Promise<Booking | null> => {
    if (!search.checkIn || !search.checkOut) return null;

    setIsLoading(true);
    try {
      const nights = getNights(search.checkIn, search.checkOut);
      const priceBreakdown = calculatePrice(pricePerNight, nights, discountAmount);

      const newBooking: Booking = {
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
        couponCode: couponCode || undefined,
        createdAt: new Date(),
        confirmationNumber: generateConfirmationNumber(),
      };

      setBooking(newBooking);
      return newBooking;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    search,
    updateSearch,
    guestInfo,
    setGuestInfo,
    couponCode,
    discountAmount,
    applyCoupon,
    removeCoupon,
    isLoading,
    booking,
    createBooking,
  };
};
