import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { Room } from "../../../types/room.types";
import { getBookingPath } from "../../../constants/routes";
import { formatCurrency } from "../../../utils/formatCurrency";
import { calculatePrice, getNightsBetween } from "../../../utils/calculatePrice";
import { clsx } from "../../../utils/helpers";

interface RoomBookingSidebarProps {
  room: Room;
}

const toISO = (d: Date) => d.toISOString().split("T")[0];

export const RoomBookingSidebar: React.FC<RoomBookingSidebarProps> = ({ room }) => {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 86400000);
  const dayAfter = new Date(today.getTime() + 2 * 86400000);

  const [checkIn, setCheckIn] = useState(toISO(tomorrow));
  const [checkOut, setCheckOut] = useState(toISO(dayAfter));
  const [guests, setGuests] = useState(Math.min(2, room.maxGuests));

  const nights = getNightsBetween(checkIn, checkOut);
  const price = calculatePrice(room.pricePerNight, nights);

  return (
    <aside className="lg:sticky lg:top-24 bg-white border border-border rounded-lg shadow-sm p-5">
      <div className="flex items-baseline gap-1 mb-4">
        {room.originalPrice && (
          <span className="text-xs text-secondary-text line-through">{formatCurrency(room.originalPrice)}</span>
        )}
        <span className="text-xl font-semibold text-primary-text">{formatCurrency(room.pricePerNight)}</span>
        <span className="text-sm text-secondary-text">/ night</span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-700 uppercase tracking-wide">Check-in</label>
          <input
            type="date"
            value={checkIn}
            min={toISO(today)}
            onChange={(e) => setCheckIn(e.target.value)}
            className="border border-border rounded-lg px-3 py-2 text-sm text-primary-text focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-700 uppercase tracking-wide">Check-out</label>
          <input
            type="date"
            value={checkOut}
            min={checkIn}
            onChange={(e) => setCheckOut(e.target.value)}
            className="border border-border rounded-lg px-3 py-2 text-sm text-primary-text focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 mb-4">
        <label className="text-xs font-medium text-gray-700 uppercase tracking-wide">Guests</label>
        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="border border-border rounded-lg px-3 py-2 text-sm text-primary-text focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          {Array.from({ length: room.maxGuests }).map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1} Guest{i > 0 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>

      <div className="border-t border-border pt-3 mb-4 space-y-1.5">
        <div className="flex justify-between text-sm text-secondary-text">
          <span>
            {formatCurrency(room.pricePerNight)} x {nights} night{nights > 1 ? "s" : ""}
          </span>
          <span>{formatCurrency(price.subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm text-secondary-text">
          <span>Taxes &amp; fees ({Math.round(price.taxRate * 100)}%)</span>
          <span>{formatCurrency(price.taxAmount)}</span>
        </div>
        <div className="flex justify-between text-sm font-semibold text-primary-text pt-2 border-t border-border">
          <span>Total</span>
<span>{formatCurrency(price.totalAmount)}</span>
        </div>
      </div>

      <Link
        to={getBookingPath(room.id)}
        aria-disabled={!room.isAvailable}
        onClick={(e) => { if (!room.isAvailable) e.preventDefault(); }}
        className={clsx(
          "w-full block text-center font-semibold px-6 py-3 rounded-lg text-sm transition-colors duration-150",
          room.isAvailable ? "bg-primary hover:bg-primary-hover text-white" : "bg-gray-100 text-secondary-text cursor-not-allowed"
        )}
      >
        {room.isAvailable ? "Reserve Now" : "Currently Unavailable"}
      </Link>
      <p className="text-2xs text-secondary-text text-center mt-2">You won't be charged yet</p>
    </aside>
  );
};

export default RoomBookingSidebar;