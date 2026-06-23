import React, { useState } from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import { RoomFilters } from "../../components/rooms/RoomFilters/RoomFilters";
import { RoomCard } from "../../components/rooms/RoomCard/RoomCard";
import { useRooms } from "../../hooks/useRooms";
import { SORT_OPTIONS } from "../../constants/roomTypes";
import type { SortOption } from "../../types/room.types";
import { clsx } from "../../utils/helpers";

const GridIcon = () => (
  <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
    <path d="M3 3h6v6H3V3zm8 0h6v6h-6V3zM3 11h6v6H3v-6zm8 0h6v6h-6v-6z" />
  </svg>
);

const ListIcon = () => (
  <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
    <path d="M3 4h14v2H3V4zm0 5h14v2H3V9zm0 5h14v2H3v-2z" />
  </svg>
);

const RoomsPage: React.FC = () => {
  const { rooms, filter, updateFilter, resetFilter, allAmenities, totalCount } = useRooms({ sortBy: "recommended" });
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <PageContainer>
      <div className="bg-section-bg border-b border-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-primary-text">Rooms &amp; Suites</h1>
          <p className="mt-1.5 text-secondary-text text-sm">
            {rooms.length} of {totalCount} rooms match your search
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          <RoomFilters filter={filter} onChange={updateFilter} onReset={resetFilter} allAmenities={allAmenities} />

          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <input
                type="text"
                value={filter.search ?? ""}
                onChange={(e) => updateFilter({ search: e.target.value })}
                placeholder="Search rooms by name or type..."
                className="flex-1 border border-border rounded-lg px-4 py-2.5 text-sm text-primary-text
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           placeholder-gray-400 bg-white shadow-sm"
              />

              <select
                value={filter.sortBy}
                onChange={(e) => updateFilter({ sortBy: e.target.value as SortOption })}
                className="border border-border rounded-lg px-4 py-2.5 text-sm text-primary-text
                           focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              <div className="flex items-center border border-border rounded-lg overflow-hidden shrink-0">
                <button
                  onClick={() => setView("grid")}
                  className={clsx("p-2.5", view === "grid" ? "bg-primary text-white" : "text-secondary-text hover:bg-section-bg")}
                  aria-label="Grid view"
                >
                  <GridIcon />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={clsx("p-2.5", view === "list" ? "bg-primary text-white" : "text-secondary-text hover:bg-section-bg")}
                  aria-label="List view"
                >
                  <ListIcon />
                </button>
              </div>
            </div>

            {rooms.length === 0 ? (
              <div className="text-center py-20 border border-border rounded-lg bg-white">
                <p className="text-sm text-secondary-text">No rooms match your filters. Try adjusting them.</p>
                <button onClick={resetFilter} className="mt-3 text-sm font-medium text-primary hover:underline">
                  Reset filters
                </button>
              </div>
            ) : (
              <div className={clsx(view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 gap-5" : "flex flex-col gap-5")}>
                {rooms.map((room) => (
                  <RoomCard key={room.id} room={room} variant={view} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default RoomsPage;