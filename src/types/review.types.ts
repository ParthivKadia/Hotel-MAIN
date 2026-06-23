export interface Review {
  id: string;
  roomId?: string;

  // ✅ matches your component usage
  guestName: string;
  stayType?: string;
  comment: string;

  // optional extras (keep for future use)
  authorLocation?: string;
  authorAvatar?: string;

  rating: number;
  title?: string;

  createdAt: Date;

  isVerified?: boolean;
  helpfulCount?: number;

  categories?: {
    cleanliness: number;
    service: number;
    location: number;
    value: number;
  };
}