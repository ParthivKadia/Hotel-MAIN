export interface Review {
  id: string;
  roomId?: string;
  authorName: string;
  guestName?: string;        // optional — used in RoomReviews
  authorLocation?: string;
  authorAvatar?: string;
  rating: number;
  title?: string;
  content: string;
  comment?: string;          // optional — used in RoomReviews
  stayType?: string;
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