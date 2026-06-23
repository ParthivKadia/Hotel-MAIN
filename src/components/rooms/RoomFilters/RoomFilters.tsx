import React from "react";
import type { RoomFilter } from "../../../types/room.types";
import { ROOM_TYPE_OPTIONS, BED_TYPE_OPTIONS, VIEW_TYPE_OPTIONS, PRICE_RANGES } from "../../../constants/roomTypes";
import { clsx } from "../../../utils/helpers";

interface RoomFiltersProps {
  filter: RoomFilter;
  onChange: (updates: Partial<RoomFilter>) => void;
  onReset: () => void;
  allAmenities: string[];
}

const ChevronIcon = () => (
  <svg className="w-4 h-4 text-secondary-text group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const FilterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <details className="border-b border-border py-4 group" open>
    <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-primary-text">
      {title}
      <ChevronIcon />
    </summary>
    <div className="mt-3 space-y-2">{children}</div>
  </details>
);

export const RoomFilters: React.FC<RoomFiltersProps> = ({ filter, onChange, onReset, allAmenities }) => {
  const toggleAmenity = (name: string) => {
    const current = filter.amenities ?? [];
    const next = current.includes(name) ? current.filter((a) => a !== name) : [...current, name];
    onChange({ amenities: next });
  };

  return (
    <aside className="bg-white border border-border rounded-lg p-5 self-start">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-semibold text-primary-text">Filters</h2>
        <button onClick={onReset} className="text-xs font-medium text-primary hover:underline">
          Reset all
        </button>
      </div>

      <FilterSection title="Price per night">
        {PRICE_RANGES.map((range) => {
          const isLast = range.max === Infinity;
          const checked = filter.priceMin === range.min && (isLast ? filter.priceMax === undefined : filter.priceMax === range.max);
          return (
            <label key={range.label} className="flex items-center gap-2 text-sm text-secondary-text cursor-pointer">
              <input
                type="radio"
                name="price-range"
                checked={checked}
                onChange={() => onChange({ priceMin: range.min, priceMax: isLast ? undefined : range.max })}
                className="accent-primary"
              />
              {range.label}
            </label>
          );
        })}
      </FilterSection>

      <FilterSection title="Guests">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((g) => (
            <button
              key={g}
              onClick={() => onChange({ guests: filter.guests === g ? undefined : g })}
              className={clsx(
                "w-9 h-9 rounded-lg border text-sm font-medium transition-colors duration-150",
                filter.guests === g ? "bg-primary text-white border-primary" : "border-border text-primary-text hover:bg-section-bg"
              )}
            >
              {g}+
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Room type">
        {ROOM_TYPE_OPTIONS.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 text-sm text-secondary-text cursor-pointer">
            <input
              type="radio"
              name="room-type"
              checked={filter.type === opt.value}
              onChange={() => onChange({ type: opt.value as RoomFilter["type"] })}
              className="accent-primary"
            />
            {opt.label}
          </label>
        ))}
      </FilterSection>

      <FilterSection title="Bed type">
        {BED_TYPE_OPTIONS.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 text-sm text-secondary-text cursor-pointer">
            <input
              type="radio"
              name="bed-type"
              checked={filter.bedType === opt.value}
              onChange={() => onChange({ bedType: opt.value as RoomFilter["bedType"] })}
              className="accent-primary"
            />
            {opt.label}
          </label>
        ))}
      </FilterSection>

      <FilterSection title="View">
        {VIEW_TYPE_OPTIONS.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 text-sm text-secondary-text cursor-pointer">
            <input
              type="radio"
              name="view-type"
              checked={filter.view === opt.value}
              onChange={() => onChange({ view: opt.value as RoomFilter["view"] })}
              className="accent-primary"
            />
            {opt.label}
          </label>
        ))}
      </FilterSection>

      <FilterSection title="Amenities">
        {allAmenities.map((name) => (
          <label key={name} className="flex items-center gap-2 text-sm text-secondary-text cursor-pointer">
            <input
              type="checkbox"
              checked={(filter.amenities ?? []).includes(name)}
              onChange={() => toggleAmenity(name)}
              className="accent-primary"
            />
            {name}
          </label>
        ))}
      </FilterSection>

      <div className="pt-4">
        <label className="flex items-center gap-2 text-sm text-secondary-text cursor-pointer">
          <input
            type="checkbox"
            checked={filter.availableOnly ?? false}
            onChange={(e) => onChange({ availableOnly: e.target.checked })}
            className="accent-primary"
          />
          Show available rooms only
        </label>
      </div>
    </aside>
  );
};

export default RoomFilters;