import React, { useState } from "react";

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

interface RoomGalleryProps {
  images: GalleryImage[];
  roomName: string;
}

export const RoomGallery: React.FC<RoomGalleryProps> = ({ images, roomName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const safeImages: GalleryImage[] =
    images.length > 0
      ? images
      : [{ id: "fallback", url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80", alt: roomName }];

  const openAt = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-80 sm:h-96 rounded-lg overflow-hidden">
        <button onClick={() => openAt(0)} className="col-span-2 row-span-2 relative overflow-hidden">
          <img
            src={safeImages[0].url}
            alt={safeImages[0].alt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </button>
        {safeImages.slice(1, 5).map((img, i) => (
          <button key={img.id} onClick={() => openAt(i + 1)} className="relative overflow-hidden">
            <img src={img.url} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            {i === 3 && safeImages.length > 5 && (
              <span className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-sm font-medium">
                +{safeImages.length - 5} photos
              </span>
            )}
          </button>
        ))}
        {Array.from({ length: Math.max(0, 5 - safeImages.length) }).map((_, i) => (
          <div key={`empty-${i}`} className="bg-section-bg" />
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
          <button className="absolute top-5 right-5 text-white text-sm font-medium" onClick={() => setLightboxOpen(false)}>
            Close
          </button>
          <img
            src={safeImages[activeIndex].url}
            alt={safeImages[activeIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((activeIndex - 1 + safeImages.length) % safeImages.length);
            }}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-2xl px-3 py-2"
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((activeIndex + 1) % safeImages.length);
            }}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-2xl px-3 py-2"
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default RoomGallery;