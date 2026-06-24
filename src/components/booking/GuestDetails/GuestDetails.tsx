import React from "react";
import { useBookingContext } from "../../../context/BookingContext";

export const GuestDetails: React.FC = () => {
  const { guestInfo, setGuestInfo, guests, setGuests, room, errors } = useBookingContext();

  return (
    <div className="bg-white border border-border rounded-lg p-6">
      <h2 className="text-lg font-semibold text-primary-text mb-4">Guest Details &amp; Contact Information</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-700 uppercase tracking-wide">First Name</label>
          <input
            type="text"
            value={guestInfo.firstName}
            onChange={(e) => setGuestInfo({ firstName: e.target.value })}
            placeholder="First name"
            className={`border rounded-lg px-4 py-2.5 text-sm text-primary-text focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm ${
              errors.firstName ? "border-red-500" : "border-border"
            }`}
          />
          {errors.firstName && <p className="text-xs text-red-600 mt-1">{errors.firstName}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-700 uppercase tracking-wide">Last Name</label>
          <input
            type="text"
            value={guestInfo.lastName}
            onChange={(e) => setGuestInfo({ lastName: e.target.value })}
            placeholder="Last name"
            className={`border rounded-lg px-4 py-2.5 text-sm text-primary-text focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm ${
              errors.lastName ? "border-red-500" : "border-border"
            }`}
          />
          {errors.lastName && <p className="text-xs text-red-600 mt-1">{errors.lastName}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-700 uppercase tracking-wide">Email Address</label>
          <input
            type="email"
            value={guestInfo.email}
            onChange={(e) => setGuestInfo({ email: e.target.value })}
            placeholder="you@example.com"
            className={`border rounded-lg px-4 py-2.5 text-sm text-primary-text focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm ${
              errors.email ? "border-red-500" : "border-border"
            }`}
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-700 uppercase tracking-wide">Phone Number</label>
          <input
            type="tel"
            value={guestInfo.phone}
            onChange={(e) => setGuestInfo({ phone: e.target.value })}
            placeholder="+91 98765 43210"
            className={`border rounded-lg px-4 py-2.5 text-sm text-primary-text focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm ${
              errors.phone ? "border-red-500" : "border-border"
            }`}
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>

        <div className="flex flex-col gap-1 sm:col-span-2">
          <label className="text-xs font-medium text-gray-700 uppercase tracking-wide">Guests</label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="border border-border rounded-lg px-4 py-2.5 text-sm text-primary-text focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm w-full sm:w-48"
          >
            {Array.from({ length: room?.maxGuests ?? 4 }).map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1} Guest{i > 0 ? "s" : ""}
              </option>
            ))}
          </select>
          {errors.guests && <p className="text-xs text-red-600 mt-1">{errors.guests}</p>}
        </div>
      </div>
    </div>
  );
};

export default GuestDetails;