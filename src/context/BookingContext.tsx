import React, { createContext, useContext } from "react";
import { useBooking } from "../hooks/useBooking";
import type { Booking, GuestInfo, AvailabilitySearch } from "../types/booking.types";

interface BookingContextValue {
  search: AvailabilitySearch;
  updateSearch: (updates: Partial<AvailabilitySearch>) => void;
  guestInfo: GuestInfo;
  setGuestInfo: React.Dispatch<React.SetStateAction<GuestInfo>>;
  couponCode: string;
  discountAmount: number;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  isLoading: boolean;
  booking: Booking | null;
  createBooking: (roomId: string, pricePerNight: number) => Promise<Booking | null>;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const bookingState = useBooking();

  return (
    <BookingContext.Provider value={bookingState}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = (): BookingContextValue => {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBookingContext must be used within a BookingProvider");
  }
  return ctx;
};
