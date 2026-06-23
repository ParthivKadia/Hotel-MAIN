export type GalleryCategory = "rooms" | "dining" | "amenities" | "exterior" | "events" | "all";

export interface GalleryImage {
  id: string;
  url: string;
  thumbnailUrl?: string;
  alt: string;
  category: GalleryCategory;
  caption?: string;
}
