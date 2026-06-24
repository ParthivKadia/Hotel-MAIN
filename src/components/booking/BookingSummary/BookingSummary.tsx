import React from "react";
import { useBookingContext } from "../../../context/BookingContext";
import { BED_TYPE_LABELS } from "../../../constants/roomTypes";
import { toDateInputValue, fromDateInputValue } from "../../../utils/formatDate";

const ROOM_IMAGES: Record<string, string> = {
  "room-001": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
  "room-002": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&q=80",
  "room-003": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80",
  "room-004": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80",
  "room-005": "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&q=80",
  "room-006": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80",
};

export const BookingSummary: React.FC = () => {
  const { room, dateRange, setDateRange, errors } = useBookingContext();

  if (!room) {
    return (
      <div className="bg-white border border-border rounded-lg p-6">
        <p className="text-sm text-secondary-text">Loading room details...</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-lg p-6">
      <div className="flex gap-3 mb-4">
        <img
          src={ROOM_IMAGES[room.id] ?? ROOM_IMAGES["room-001"]}
          alt={room.name}
          className="w-20 h-20 rounded-lg object-cover shrink-0"
        />
        <div>
          <h2 className="text-sm font-semibold text-primary-text">{room.name}</h2>
          <p className="text-xs text-secondary-text mt-0.5">
            {BED_TYPE_LABELS[room.bedType]} · {room.size} m²
          </p>
          <p className="text-xs text-secondary-text">Up to {room.maxGuests} guests</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 border-t border-border pt-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-700 uppercase tracking-wide">Check-in</label>
          <input
            type="date"
            value={toDateInputValue(dateRange.checkIn)}
            onChange={(e) => setDateRange({ checkIn: fromDateInputValue(e.target.value) })}
            className={`border rounded-lg px-3 py-2 text-sm text-primary-text focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.checkIn ? "border-red-500" : "border-border"
            }`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-700 uppercase tracking-wide">Check-out</label>
          <input
            type="date"
            value={toDateInputValue(dateRange.checkOut)}
            onChange={(e) => setDateRange({ checkOut: fromDateInputValue(e.target.value) })}
            className={`border rounded-lg px-3 py-2 text-sm text-primary-text focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.checkOut ? "border-red-500" : "border-border"
            }`}
          />
        </div>
      </div>
      {(errors.checkIn || errors.checkOut) && (
        <p className="text-xs text-red-600 mt-1">{errors.checkIn || errors.checkOut}</p>
      )}
    </div>
  );
};

export default BookingSummary;