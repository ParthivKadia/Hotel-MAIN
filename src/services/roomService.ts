import type { Room, RoomFilter } from "../types/room.types";
import { rooms, getRoomBySlug, getRoomById, getFeaturedRooms } from "../data/rooms";

// These functions simulate API calls using local data.
// Replace with real API calls (api.get / api.post) when a backend is available.

export const roomService = {
  getAllRooms: async (filter?: RoomFilter): Promise<Room[]> => {
    let result = [...rooms];

    if (filter?.type && filter.type !== "all") {
      result = result.filter((r) => r.type === filter.type);
    }
    if (filter?.priceMin !== undefined) {
      result = result.filter((r) => r.pricePerNight >= filter.priceMin!);
    }
    if (filter?.priceMax !== undefined) {
      result = result.filter((r) => r.pricePerNight <= filter.priceMax!);
    }
    if (filter?.guests !== undefined) {
      result = result.filter((r) => r.maxGuests >= filter.guests!);
    }
    if (filter?.bedType && filter.bedType !== "all") {
      result = result.filter((r) => r.bedType === filter.bedType);
    }

    return result;
  },

  getFeaturedRooms: async (): Promise<Room[]> => {
    return getFeaturedRooms();
  },

  getRoomBySlug: async (slug: string): Promise<Room | null> => {
    return getRoomBySlug(slug) ?? null;
  },

  getRoomById: async (id: string): Promise<Room | null> => {
    return getRoomById(id) ?? null;
  },

  checkAvailability: async (
    _roomId: string,
    _checkIn: Date,
    _checkOut: Date
  ): Promise<boolean> => {
    // Placeholder: always returns true until a real API is connected
    return true;
  },
};
