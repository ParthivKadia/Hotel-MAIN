export const ROUTES = {
  HOME: "/",
  ROOMS: "/rooms",
  ROOM_DETAILS: "/rooms/:slug",
  BOOKING: "/booking/:roomId",
  GALLERY: "/gallery",
  ABOUT: "/about",
  CONTACT: "/contact",
} as const;

export const getRoomDetailsPath = (slug: string) => `/rooms/${slug}`;
export const getBookingPath = (roomId: string) => `/booking/${roomId}`;
