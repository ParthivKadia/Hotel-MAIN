import React from "react";
import type { GalleryImage } from "../../../types/gallery.types";

interface Props {
  images: GalleryImage[];
  onSelect: (image: GalleryImage) => void;
}

export const GalleryGrid: React.FC<Props> = ({ images, onSelect }) => {
  if (images.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-secondary-text text-sm">No images in this category.</p>
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      {images.map((img) => (
        <div
          key={img.id}
          className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer border border-border"
          onClick={() => onSelect(img)}
        >
          <img
            src={img.url}
            alt={img.alt}
            loading="lazy"
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
            <p className="text-white text-xs font-medium px-3 py-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              {img.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};