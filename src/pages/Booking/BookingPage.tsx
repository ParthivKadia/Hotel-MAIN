import React from "react";
import { useParams, Link } from "react-router-dom";
import { PageContainer } from "../../components/layout/PageContainer";
import { BookingProvider, useBookingContext } from "../../context/BookingContext";
import { useBooking } from "../../hooks/useBooking";
import { BookingForm } from "../../components/booking/BookingForm/BookingForm";
import { BookingSummary } from "../../components/booking/BookingSummary/BookingSummary";
import { PaymentSummary } from "../../components/booking/PaymentSummary/PaymentSummary";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDisplayDate } from "../../utils/formatDate";

const BookingConfirmation: React.FC = () => {
  const { room, confirmedBooking, resetBooking } = useBookingContext();

  if (!confirmedBooking) return null;

  return (
    <div className="max-w-2xl mx-auto bg-white border border-border rounded-lg p-8 text-center">
      <div className="w-14 h-14 rounded-full bg-green-100 text-success flex items-center justify-center mx-auto mb-4">
        <svg viewBox="0 0 20 20" className="w-7 h-7" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.704 5.29a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L4.296 9.5a.75.75 0 111.06-1.06l3.543 3.543 6.72-6.72a.75.75 0 011.085.027z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h1 className="text-2xl font-semibold text-primary-text mb-2">Booking Confirmed!</h1>
      <p className="text-sm text-secondary-text mb-6">
        A confirmation has been sent to {confirmedBooking.guestInfo.email}. Your booking reference is below.
      </p>

      <div className="bg-section-bg rounded-lg p-5 text-left space-y-2 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-secondary-text">Confirmation Number</span>
          <span className="font-semibold text-primary-text">{confirmedBooking.confirmationNumber}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-secondary-text">Room</span>
          <span className="font-medium text-primary-text">{room?.name}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-secondary-text">Check-in / Check-out</span>
          <span className="font-medium text-primary-text">
            {formatDisplayDate(confirmedBooking.checkIn)} → {formatDisplayDate(confirmedBooking.checkOut)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-secondary-text">Guest</span>
          <span className="font-medium text-primary-text">
            {confirmedBooking.guestInfo.firstName} {confirmedBooking.guestInfo.lastName}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-secondary-text">Payment Status</span>
          <span className="font-medium text-success capitalize">{confirmedBooking.paymentStatus}</span>
        </div>
        <div className="flex justify-between text-sm font-semibold pt-2 border-t border-border">
          <span>Total Paid</span>
          <span>{formatCurrency(confirmedBooking.finalAmount)}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/rooms"
          onClick={resetBooking}
          className="px-6 py-3 text-sm font-medium rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-150"
        >
          Browse More Rooms
        </Link>
        <Link
          to="/"
          className="px-6 py-3 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors duration-150"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

const BookingPageContent: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  useBooking(roomId);
  const { room, isConfirmed } = useBookingContext();

  if (!room) {
    return (
      <div className="py-24 text-center">
        <p className="text-secondary-text text-sm mb-3">We couldn't find that room to book.</p>
        <Link to="/rooms" className="text-sm font-medium text-primary hover:underline">
          Back to all rooms
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-primary-text mb-8">
        {isConfirmed ? "Booking Confirmation" : "Complete Your Booking"}
      </h1>

      {isConfirmed ? (
        <BookingConfirmation />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          <BookingForm />
          <div className="space-y-6 lg:sticky lg:top-24 self-start">
            <BookingSummary />
            <PaymentSummary />
          </div>
        </div>
      )}
    </div>
  );
};

const BookingPage: React.FC = () => (
  <PageContainer>
    <BookingProvider>
      <BookingPageContent />
    </BookingProvider>
  </PageContainer>
);

export default BookingPage;