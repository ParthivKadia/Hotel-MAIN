import React from "react";
import type { RoomAmenity } from "../../../types/room.types";

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" className="w-4 h-4 text-success shrink-0" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M16.704 5.29a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L4.296 9.5a.75.75 0 111.06-1.06l3.543 3.543 6.72-6.72a.75.75 0 011.085.027z"
      clipRule="evenodd"
    />
  </svg>
);

interface RoomAmenitiesProps {
  amenities: RoomAmenity[];
}

export const RoomAmenities: React.FC<RoomAmenitiesProps> = ({ amenities }) => (
  <div>
    <h2 className="text-lg font-semibold text-primary-text mb-4">Room Amenities</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {amenities.map((a) => (
        <div key={a.id} className="flex items-center gap-2 text-sm text-primary-text">
          <CheckIcon />
          {a.name}
        </div>
      ))}
    </div>
  </div>
);

export default RoomAmenities;