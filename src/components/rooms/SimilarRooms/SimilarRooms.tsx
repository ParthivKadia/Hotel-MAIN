import React from "react";
import type { Room } from "../../../types/room.types";
import { RoomCard } from "../RoomCard/RoomCard";

interface SimilarRoomsProps {
  rooms: Room[];
}

export const SimilarRooms: React.FC<SimilarRoomsProps> = ({ rooms }) => {
  if (rooms.length === 0) return null;

  return (
    <div>
      <h2 className="text-lg font-semibold text-primary-text mb-5">Similar Rooms You May Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} variant="grid" />
        ))}
      </div>
    </div>
  );
};

export default SimilarRooms;