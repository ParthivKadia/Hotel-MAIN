// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { rooms } from "../../../data/rooms";
// // import { getRoomDetailsPath } from "../../../constants/routes";
// // import { formatCurrency } from "../../../utils/formatCurrency";
// // import { clsx } from "../../../utils/helpers";

// // const BED_LABELS: Record<string, string> = {
// //   single: "Single", double: "Double", queen: "Queen", king: "King", twin: "Twin",
// // };

// // const StarIcon = ({ filled }: { filled: boolean }) => (
// //   <svg
// //     viewBox="0 0 20 20"
// //     className={clsx("w-3.5 h-3.5", filled ? "text-yellow-400" : "text-gray-200")}
// //     fill="currentColor"
// //   >
// //     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //   </svg>
// // );

// // const ROOM_IMAGES: Record<string, string> = {
// //   "room-001": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
// //   "room-002": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
// //   "room-003": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
// //   "room-004": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
// //   "room-005": "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
// //   "room-006": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
// // };

// // export const FeaturedRooms: React.FC = () => {
// //   const featured = rooms.slice(0, 6);

// //   return (
// //     <section id="featured-rooms" className="py-16 md:py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Heading */}
// //         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
// //           <div>
// //             <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">
// //               Accommodation
// //             </p>
// //             <h2 className="text-2xl md:text-3xl font-semibold text-primary-text">
// //               Rooms &amp; Suites
// //             </h2>
// //             <p className="mt-1.5 text-secondary-text text-sm max-w-lg">
// //               Thoughtfully designed spaces for business and leisure — every room includes high-speed Wi-Fi and 24-hour room service.
// //             </p>
// //           </div>
// //           <Link
// //             to="/rooms"
// //             className="shrink-0 text-sm font-medium text-primary hover:underline underline-offset-2"
// //           >
// //             View all rooms →
// //           </Link>
// //         </div>

// //         {/* Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
// //           {featured.map((room) => (
// //             <article
// //               key={room.id}
// //               className="group bg-white border border-border rounded-md overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200"
// //             >
// //               {/* Image */}
// //               <div className="relative overflow-hidden h-52">
// //                 <img
// //                   src={ROOM_IMAGES[room.id] ?? "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"}
// //                   alt={room.name}
// //                   className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
// //                 />
// //                 {/* Availability badge */}
// //                 <span
// //                   className={clsx(
// //                     "absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-medium",
// //                     room.isAvailable
// //                       ? "bg-green-100 text-success"
// //                       : "bg-red-100 text-red-600"
// //                   )}
// //                 >
// //                   {room.isAvailable ? "Available" : "Sold Out"}
// //                 </span>
// //                 {/* Original price strikethrough if discounted */}
// //                 {room.originalPrice && (
// //                   <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-medium bg-primary text-white">
// //                     Sale
// //                   </span>
// //                 )}
// //               </div>

// //               {/* Body */}
// //               <div className="flex flex-col flex-1 p-4">
// //                 {/* Name + Rating row */}
// //                 <div className="flex items-start justify-between gap-2 mb-1">
// //                   <h3 className="text-sm font-semibold text-primary-text leading-snug">
// //                     {room.name}
// //                   </h3>
// //                   <div className="flex items-center gap-1 shrink-0">
// //                     <div className="flex items-center gap-0.5">
// //                       {Array.from({ length: 5 }).map((_, i) => (
// //                         <StarIcon key={i} filled={i < Math.floor(room.rating)} />
// //                       ))}
// //                     </div>
// //                     <span className="text-xs text-secondary-text">{room.rating.toFixed(1)}</span>
// //                   </div>
// //                 </div>

// //                 {/* Meta row */}
// //                 <div className="flex items-center gap-3 text-xs text-secondary-text mb-2.5">
// //                   <span>{room.size} m²</span>
// //                   <span className="text-border">·</span>
// //                   <span>{BED_LABELS[room.bedType]} bed</span>
// //                   <span className="text-border">·</span>
// //                   <span>Up to {room.maxGuests} guests</span>
// //                 </div>

// //                 {/* Description */}
// //                 <p className="text-xs text-secondary-text leading-relaxed mb-3 line-clamp-2">
// //                   {room.shortDescription}
// //                 </p>

// //                 {/* Amenities pills */}
// //                 <div className="flex flex-wrap gap-1 mb-4">
// //                   {room.amenities.slice(0, 3).map((a) => (
// //                     <span
// //                       key={a.id}
// //                       className="px-2 py-0.5 bg-section-bg text-xs text-secondary-text rounded"
// //                     >
// //                       {a.name}
// //                     </span>
// //                   ))}
// //                   {room.amenities.length > 3 && (
// //                     <span className="px-2 py-0.5 bg-section-bg text-xs text-secondary-text rounded">
// //                       +{room.amenities.length - 3} more
// //                     </span>
// //                   )}
// //                 </div>

// //                 {/* Price + CTA */}
// //                 <div className="mt-auto flex items-center justify-between pt-3 border-t border-border">
// //                   <div>
// //                     {room.originalPrice && (
// //                       <p className="text-xs text-secondary-text line-through">
// //                         {formatCurrency(room.originalPrice)}
// //                       </p>
// //                     )}
// //                     <div className="flex items-baseline gap-1">
// //                       <span className="text-base font-semibold text-primary-text">
// //                         {formatCurrency(room.pricePerNight)}
// //                       </span>
// //                       <span className="text-xs text-secondary-text">/ night</span>
// //                     </div>
// //                   </div>
// //                   <Link
// //                     to={getRoomDetailsPath(room.slug)}
// //                     className={clsx(
// //                       "px-4 py-1.5 text-xs font-medium rounded border transition-colors duration-150",
// //                       room.isAvailable
// //                         ? "border-primary text-primary hover:bg-primary hover:text-white"
// //                         : "border-border text-secondary-text cursor-not-allowed"
// //                     )}
// //                     aria-disabled={!room.isAvailable}
// //                     onClick={(e) => { if (!room.isAvailable) e.preventDefault(); }}
// //                   >
// //                     View Details
// //                   </Link>
// //                 </div>
// //               </div>
// //             </article>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default FeaturedRooms;
// import React from "react";
// import { Link } from "react-router-dom";
// import { rooms } from "../../../data/rooms";
// import { getRoomDetailsPath } from "../../../constants/routes";
// import { formatCurrency } from "../../../utils/formatCurrency";
// import { clsx } from "../../../utils/helpers";

// const BED_LABELS: Record<string, string> = {
//   single: "Single", double: "Double", queen: "Queen", king: "King", twin: "Twin",
// };

// const StarIcon = ({ filled }: { filled: boolean }) => (
//   <svg viewBox="0 0 20 20" className={clsx("w-3.5 h-3.5", filled ? "text-yellow-400" : "text-gray-200")} fill="currentColor">
//     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//   </svg>
// );

// const ROOM_IMAGES: Record<string, string> = {
//   "room-001": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
//   "room-002": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
//   "room-003": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
//   "room-004": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
//   "room-005": "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
//   "room-006": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
// };

// export const FeaturedRooms: React.FC = () => {
//   const featured = rooms.slice(0, 6);

//   return (
//     <section id="featured-rooms" className="py-16 md:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
//           <div>
//             <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">Accommodation</p>
//             <h2 className="text-2xl md:text-3xl font-semibold text-primary-text">Rooms & Suites</h2>
//             <p className="mt-1.5 text-secondary-text text-sm max-w-lg">
//               Thoughtfully designed spaces for business and leisure — every room includes high-speed Wi-Fi and 24-hour room service.
//             </p>
//           </div>
//           <Link to="/rooms" className="shrink-0 text-sm font-medium text-primary hover:underline underline-offset-2">
//             View all rooms →
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {featured.map((room) => (
//             <article
//               key={room.id}
//               className="group bg-white border border-border rounded-md overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200"
//             >
//               <div className="relative overflow-hidden h-52">
//                 <img
//                   src={ROOM_IMAGES[room.id] ?? "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"}
//                   alt={room.name}
//                   className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
//                 />
//                 <span className={clsx(
//                   "absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-medium",
//                   room.isAvailable ? "bg-green-100 text-success" : "bg-red-100 text-red-600"
//                 )}>
//                   {room.isAvailable ? "Available" : "Sold Out"}
//                 </span>
//                 {room.originalPrice && (
//                   <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-medium bg-primary text-white">Sale</span>
//                 )}
//               </div>

//               <div className="flex flex-col flex-1 p-4">
//                 <div className="flex items-start justify-between gap-2 mb-1">
//                   <h3 className="text-sm font-semibold text-primary-text leading-snug">{room.name}</h3>
//                   <div className="flex items-center gap-1 shrink-0">
//                     <div className="flex items-center gap-0.5">
//                       {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} filled={i < Math.floor(room.rating)} />)}
//                     </div>
//                     <span className="text-xs text-secondary-text">{room.rating.toFixed(1)}</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 text-xs text-secondary-text mb-2.5">
//                   <span>{room.size} m²</span>
//                   <span className="text-border">·</span>
//                   <span>{BED_LABELS[room.bedType]} bed</span>
//                   <span className="text-border">·</span>
//                   <span>Up to {room.maxGuests} guests</span>
//                 </div>

//                 <p className="text-xs text-secondary-text leading-relaxed mb-3 line-clamp-2">{room.shortDescription}</p>

//                 <div className="flex flex-wrap gap-1 mb-4">
//                   {room.amenities.slice(0, 3).map((a) => (
//                     <span key={a.id} className="px-2 py-0.5 bg-section-bg text-xs text-secondary-text rounded">{a.name}</span>
//                   ))}
//                   {room.amenities.length > 3 && (
//                     <span className="px-2 py-0.5 bg-section-bg text-xs text-secondary-text rounded">+{room.amenities.length - 3} more</span>
//                   )}
//                 </div>

//                 <div className="mt-auto flex items-center justify-between pt-3 border-t border-border">
//                   <div>
//                     {room.originalPrice && (
//                       <p className="text-xs text-secondary-text line-through">{formatCurrency(room.originalPrice)}</p>
//                     )}
//                     <div className="flex items-baseline gap-1">
//                       <span className="text-base font-semibold text-primary-text">{formatCurrency(room.pricePerNight)}</span>
//                       <span className="text-xs text-secondary-text">/ night</span>
//                     </div>
//                   </div>
//                   <Link
//                     to={getRoomDetailsPath(room.slug)}
//                     className={clsx(
//                       "px-4 py-1.5 text-xs font-medium rounded border transition-colors duration-150",
//                       room.isAvailable
//                         ? "border-primary text-primary hover:bg-primary hover:text-white"
//                         : "border-border text-secondary-text cursor-not-allowed"
//                     )}
//                     aria-disabled={!room.isAvailable}
//                     onClick={(e) => { if (!room.isAvailable) e.preventDefault(); }}
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedRooms;
import React from "react";
import { Link } from "react-router-dom";
import { rooms } from "../../../data/rooms";
import { getRoomDetailsPath } from "../../../constants/routes";
import { formatCurrency } from "../../../utils/formatCurrency";
import { clsx } from "../../../utils/helpers";

const BED_LABELS: Record<string, string> = {
  single: "Single", double: "Double", queen: "Queen", king: "King", twin: "Twin",
};

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg viewBox="0 0 20 20" className={clsx("w-3.5 h-3.5", filled ? "text-yellow-400" : "text-gray-200")} fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ROOM_IMAGES: Record<string, string> = {
  "room-001": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  "room-002": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
  "room-003": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  "room-004": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  "room-005": "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
  "room-006": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
};

export const FeaturedRooms: React.FC = () => {
  const featured = rooms.slice(0, 6);

  return (
    <section id="featured-rooms" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">Accommodation</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-text">Rooms & Suites</h2>
            <p className="mt-1.5 text-secondary-text text-sm max-w-lg">
              Thoughtfully designed spaces for business and leisure — every room includes high-speed Wi-Fi and 24-hour room service.
            </p>
          </div>
          <Link to="/rooms" className="shrink-0 text-sm font-medium text-primary hover:underline underline-offset-2">
            View all rooms →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((room) => (
            <article
              key={room.id}
              className="group bg-white border border-border rounded-md overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={ROOM_IMAGES[room.id] ?? "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
                <span className={clsx(
                  "absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-medium",
                  room.isAvailable ? "bg-green-100 text-success" : "bg-red-100 text-red-600"
                )}>
                  {room.isAvailable ? "Available" : "Sold Out"}
                </span>
                {room.originalPrice && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-medium bg-primary text-white">Sale</span>
                )}
              </div>

              <div className="flex flex-col flex-1 p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-primary-text leading-snug">{room.name}</h3>
                  <div className="flex items-center gap-1 shrink-0">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} filled={i < Math.floor(room.rating)} />)}
                    </div>
                    <span className="text-xs text-secondary-text">{room.rating.toFixed(1)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-secondary-text mb-2.5">
                  <span>{room.size} m²</span>
                  <span className="text-border">·</span>
                  <span>{BED_LABELS[room.bedType]} bed</span>
                  <span className="text-border">·</span>
                  <span>Up to {room.maxGuests} guests</span>
                </div>

                <p className="text-xs text-secondary-text leading-relaxed mb-3 line-clamp-2">{room.shortDescription}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {room.amenities.slice(0, 3).map((a) => (
                    <span key={a.id} className="px-2 py-0.5 bg-section-bg text-xs text-secondary-text rounded">{a.name}</span>
                  ))}
                  {room.amenities.length > 3 && (
                    <span className="px-2 py-0.5 bg-section-bg text-xs text-secondary-text rounded">+{room.amenities.length - 3} more</span>
                  )}
                </div>

                <div className="mt-auto flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    {room.originalPrice && (
                      <p className="text-xs text-secondary-text line-through">{formatCurrency(room.originalPrice)}</p>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-base font-semibold text-primary-text">{formatCurrency(room.pricePerNight)}</span>
                      <span className="text-xs text-secondary-text">/ night</span>
                    </div>
                  </div>
                  <Link
                    to={getRoomDetailsPath(room.slug)}
                    className={clsx(
                      "px-4 py-1.5 text-xs font-medium rounded border transition-colors duration-150",
                      room.isAvailable
                        ? "border-primary text-primary hover:bg-primary hover:text-white"
                        : "border-border text-secondary-text cursor-not-allowed"
                    )}
                    aria-disabled={!room.isAvailable}
                    onClick={(e) => { if (!room.isAvailable) e.preventDefault(); }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;