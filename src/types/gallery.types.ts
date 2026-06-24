export type GalleryCategory = "all" | "exterior" | "rooms" | "amenities" | "dining" | "events";

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  caption: string;
}