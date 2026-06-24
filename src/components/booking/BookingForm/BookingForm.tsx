import React from "react";
import { GuestDetails } from "../GuestDetails/GuestDetails";
import { CouponSection } from "../CouponSection/CouponSection";
import { useBookingContext } from "../../../context/BookingContext";
import type { PaymentMethod } from "../../../types/booking.types";

const PAYMENT_METHODS: { value: PaymentMethod; label: string }[] = [
  { value: "card", label: "Credit / Debit Card" },
  { value: "upi", label: "UPI" },
  { value: "netbanking", label: "Net Banking" },
  { value: "wallet", label: "Wallet" },
];

export const BookingForm: React.FC = () => {
  const { guestInfo, setGuestInfo, paymentMethod, setPaymentMethod, confirmBooking, isSubmitting, room } = useBookingContext();

  return (
    <div className="space-y-6">
      <GuestDetails />

      <div className="bg-white border border-border rounded-lg p-6">
        <h2 className="text-lg font-semibold text-primary-text mb-3">Special Requests</h2>
        <textarea
          rows={4}
          value={guestInfo.specialRequests ?? ""}
          onChange={(e) => setGuestInfo({ specialRequests: e.target.value })}
          placeholder="Let us know about any special requests — early check-in, high floor, accessibility needs, etc."
          className="border border-border rounded-lg px-4 py-3 text-sm text-primary-text focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none w-full"
        />
        <p className="text-2xs text-secondary-text mt-2">
          Special requests are subject to availability and cannot be guaranteed.
        </p>
      </div>

      <CouponSection />

      <div className="bg-white border border-border rounded-lg p-6">
        <h2 className="text-lg font-semibold text-primary-text mb-3">Payment Method</h2>
        <div className="grid grid-cols-2 gap-2">
          {PAYMENT_METHODS.map((method) => (
            <label
              key={method.value}
              className={`flex items-center gap-2 border rounded-lg px-3 py-2.5 text-sm cursor-pointer transition-colors duration-150 ${
                paymentMethod === method.value ? "border-primary text-primary bg-blue-50" : "border-border text-secondary-text"
              }`}
            >
              <input
                type="radio"
                name="payment-method"
                checked={paymentMethod === method.value}
                onChange={() => setPaymentMethod(method.value)}
                className="accent-primary"
              />
              {method.label}
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={() => confirmBooking()}
        disabled={isSubmitting || !room?.isAvailable}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors duration-150"
      >
        {isSubmitting ? "Confirming your booking..." : "Confirm & Pay"}
      </button>
    </div>
  );
};

export default BookingForm;