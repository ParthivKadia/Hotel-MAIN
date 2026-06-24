import React from "react";
import type { GalleryCategory } from "../../../types/gallery.types";

const CATEGORIES: { label: string; value: GalleryCategory }[] = [
  { label: "All", value: "all" },
  { label: "Exterior", value: "exterior" },
  { label: "Rooms", value: "rooms" },
  { label: "Amenities", value: "amenities" },
  { label: "Dining", value: "dining" },
  { label: "Events", value: "events" },
];

interface Props {
  active: GalleryCategory;
  onChange: (category: GalleryCategory) => void;
}

export const GalleryFilter: React.FC<Props> = ({ active, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {CATEGORIES.map((cat) => (
      <button
        key={cat.value}
        onClick={() => onChange(cat.value)}
        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-150 ${
          active === cat.value
            ? "bg-primary text-white border-primary"
            : "bg-white text-secondary-text border-border hover:border-primary hover:text-primary"
        }`}
      >
        {cat.label}
      </button>
    ))}
  </div>
);