import { useEffect } from "react";
import { useBookingContext } from "../context/BookingContext";
import { roomService } from "../services/roomService";

export const useBooking = (roomId?: string) => {
  const { setRoom } = useBookingContext();

  useEffect(() => {
    if (!roomId) return;
    roomService.getRoomById(roomId).then((room) => {
      if (room) setRoom(room);
    });
  }, [roomId]);
};