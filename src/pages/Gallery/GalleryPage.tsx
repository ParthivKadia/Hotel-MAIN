import React, { useState, useEffect } from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import { GalleryFilter } from "../../components/gallery/GalleryFilter";
import { GalleryGrid } from "../../components/gallery/GalleryGrid";
import { Lightbox } from "../../components/gallery/Lightbox";
import { galleryService } from "../../services/galleryService";
import type { GalleryImage, GalleryCategory } from "../../types/gallery.types";

const GalleryPage: React.FC = () => {
  const [filtered, setFiltered] = useState<GalleryImage[]>([]);
  const [category, setCategory] = useState<GalleryCategory>("all");
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  useEffect(() => {
    galleryService.getAllImages().then(setFiltered);
  }, []);

  const handleCategoryChange = async (cat: GalleryCategory) => {
    setCategory(cat);
    const result = await galleryService.getImagesByCategory(cat);
    setFiltered(result);
  };

  const selectedIndex = selected ? filtered.findIndex((img) => img.id === selected.id) : -1;

  const handlePrev = () => {
    if (selectedIndex > 0) setSelected(filtered[selectedIndex - 1]);
    else setSelected(filtered[filtered.length - 1]);
  };

  const handleNext = () => {
    if (selectedIndex < filtered.length - 1) setSelected(filtered[selectedIndex + 1]);
    else setSelected(filtered[0]);
  };

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">Photo Gallery</p>
          <h1 className="text-2xl md:text-3xl font-semibold text-primary-text">Explore Our Hotel</h1>
          <p className="mt-1.5 text-secondary-text text-sm max-w-xl">
            Browse through our collection of photos showcasing our rooms, amenities, dining, and more.
          </p>
        </div>
        <div className="mb-8">
          <GalleryFilter active={category} onChange={handleCategoryChange} />
        </div>
        <p className="text-xs text-secondary-text mb-5">{filtered.length} photos</p>
        <GalleryGrid images={filtered} onSelect={setSelected} />
      </div>

      {selected && (
        <Lightbox
          image={selected}
          total={filtered.length}
          index={selectedIndex}
          onClose={() => setSelected(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </PageContainer>
  );
};

export default GalleryPage;