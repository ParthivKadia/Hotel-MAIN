import { useState, useMemo } from "react";
import { rooms } from "../data/rooms";
import type { Room, RoomFilter } from "../types/room.types";
import { useDebounce } from "./useDebounce";

export const useRooms = (initialFilter: RoomFilter = {}) => {
  const [filter, setFilter] = useState<RoomFilter>(initialFilter);
  const debouncedFilter = useDebounce(filter, 200);

  const filteredRooms = useMemo<Room[]>(() => {
    let result = rooms.filter((room) => {
      if (debouncedFilter.type && debouncedFilter.type !== "all" && room.type !== debouncedFilter.type) {
        return false;
      }
      if (debouncedFilter.priceMin !== undefined && room.pricePerNight < debouncedFilter.priceMin) {
        return false;
      }
      if (debouncedFilter.priceMax !== undefined && room.pricePerNight > debouncedFilter.priceMax) {
        return false;
      }
      if (debouncedFilter.guests !== undefined && room.maxGuests < debouncedFilter.guests) {
        return false;
      }
      if (debouncedFilter.bedType && debouncedFilter.bedType !== "all" && room.bedType !== debouncedFilter.bedType) {
        return false;
      }
      if (debouncedFilter.view && debouncedFilter.view !== "all" && room.viewType !== debouncedFilter.view) {
        return false;
      }
      if (debouncedFilter.availableOnly && !room.isAvailable) {
        return false;
      }
      if (debouncedFilter.amenities && debouncedFilter.amenities.length > 0) {
        const roomAmenityNames = room.amenities.map((a) => a.name);
        const hasAll = debouncedFilter.amenities.every((a) => roomAmenityNames.includes(a));
        if (!hasAll) return false;
      }
      if (debouncedFilter.search) {
        const query = debouncedFilter.search.toLowerCase();
        const haystack = `${room.name} ${room.shortDescription} ${room.type}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });

    switch (debouncedFilter.sortBy) {
      case "price-low":
        result = [...result].sort((a, b) => a.pricePerNight - b.pricePerNight);
        break;
      case "price-high":
        result = [...result].sort((a, b) => b.pricePerNight - a.pricePerNight);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [debouncedFilter]);

  const allAmenities = useMemo(() => {
    const set = new Set<string>();
    rooms.forEach((r) => r.amenities.forEach((a) => set.add(a.name)));
    return Array.from(set).sort();
  }, []);

  const updateFilter = (updates: Partial<RoomFilter>) => {
    setFilter((prev) => ({ ...prev, ...updates }));
  };

  const resetFilter = () => setFilter({});

  return {
    rooms: filteredRooms,
    filter,
    updateFilter,
    resetFilter,
    allAmenities,
    totalCount: rooms.length,
  };
};