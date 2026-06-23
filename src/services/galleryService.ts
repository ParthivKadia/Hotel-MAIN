import type { GalleryImage, GalleryCategory } from "../types/gallery.types";
import { galleryImages } from "../data/gallery";

export const galleryService = {
  getAllImages: async (): Promise<GalleryImage[]> => galleryImages,

  getImagesByCategory: async (
    category: GalleryCategory
  ): Promise<GalleryImage[]> => {
    if (category === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === category);
  },
};
