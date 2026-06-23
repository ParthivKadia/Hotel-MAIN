// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { ROUTES } from "../../../constants/routes";
// // import { clsx } from "../../../utils/helpers";

// // const ROOM_TYPES = [
// //   { value: "", label: "All Room Types" },
// //   { value: "standard", label: "Standard Room" },
// //   { value: "deluxe", label: "Deluxe Room" },
// //   { value: "executive", label: "Executive Room" },
// //   { value: "suite", label: "Suite" },
// // ];

// // const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6];

// // const today = new Date().toISOString().split("T")[0];
// // const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

// // export const Hero: React.FC = () => {
// //   const navigate = useNavigate();
// //   const [checkIn, setCheckIn] = useState(today);
// //   const [checkOut, setCheckOut] = useState(tomorrow);
// //   const [guests, setGuests] = useState(1);
// //   const [children, setChildren] = useState(0);
// //   const [roomType, setRoomType] = useState("");
// //   const [promoCode, setPromoCode] = useState("");
// //   const [errors, setErrors] = useState<Record<string, string>>({});

// //   const validate = () => {
// //     const errs: Record<string, string> = {};
// //     if (!checkIn) errs.checkIn = "Select check-in date";
// //     if (!checkOut) errs.checkOut = "Select check-out date";
// //     if (checkIn && checkOut && checkOut <= checkIn)
// //       errs.checkOut = "Check-out must be after check-in";
// //     if (checkIn && checkIn < today) errs.checkIn = "Check-in cannot be in the past";
// //     return errs;
// //   };

// //   const handleSearch = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     const errs = validate();
// //     if (Object.keys(errs).length) { setErrors(errs); return; }
// //     setErrors({});
// //     const params = new URLSearchParams({
// //       checkIn,
// //       checkOut,
// //       guests: String(guests),
// //       children: String(children),
// //       ...(roomType && { type: roomType }),
// //       ...(promoCode && { promo: promoCode }),
// //     });
// //     navigate(`${ROUTES.ROOMS}?${params.toString()}`);
// //   };

// //   return (
// //     <section className="relative min-h-screen flex flex-col" aria-label="Hero">
// //       {/* Background */}
// //       <div className="absolute inset-0 z-0">
// //         <img
// //           src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80&auto=format&fit=crop"
// //           alt="Raj Mahal Modern Hotel"
// //           className="w-full h-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
// //       </div>

// //       {/* Content */}
// //       <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-12 text-center">
// //         <p className="text-xs font-medium tracking-[0.25em] uppercase text-white/60 mb-3">
// //           Mumbai, India
// //         </p>
// //         <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-4 max-w-3xl">
// //           Raj Mahal<br />
// //           <span className="font-light">Modern Hotel</span>
// //         </h1>
// //         <p className="text-base sm:text-lg text-white/75 max-w-xl mb-10 font-normal">
// //           A modern stay in the heart of Mumbai — clean rooms, honest service, and everything you need.
// //         </p>

// //         {/* Availability Search Card */}
// //         <div className="w-full max-w-5xl bg-white rounded-md shadow-lg overflow-visible">
// //           <form onSubmit={handleSearch}>
// //             {/* Main row */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
// //               {/* Check-in */}
// //               <div className="px-4 py-3">
// //                 <label className="block text-xs font-medium text-secondary-text mb-1 uppercase tracking-wide">
// //                   Check-in
// //                 </label>
// //                 <input
// //                   type="date"
// //                   value={checkIn}
// //                   min={today}
// //                   onChange={(e) => { setCheckIn(e.target.value); setErrors((p) => ({ ...p, checkIn: "" })); }}
// //                   className={clsx(
// //                     "w-full text-sm font-medium text-primary-text bg-transparent focus:outline-none",
// //                     errors.checkIn ? "text-red-500" : ""
// //                   )}
// //                 />
// //                 {errors.checkIn && <p className="text-xs text-red-500 mt-0.5">{errors.checkIn}</p>}
// //               </div>

// //               {/* Check-out */}
// //               <div className="px-4 py-3">
// //                 <label className="block text-xs font-medium text-secondary-text mb-1 uppercase tracking-wide">
// //                   Check-out
// //                 </label>
// //                 <input
// //                   type="date"
// //                   value={checkOut}
// //                   min={checkIn || today}
// //                   onChange={(e) => { setCheckOut(e.target.value); setErrors((p) => ({ ...p, checkOut: "" })); }}
// //                   className={clsx(
// //                     "w-full text-sm font-medium text-primary-text bg-transparent focus:outline-none",
// //                     errors.checkOut ? "text-red-500" : ""
// //                   )}
// //                 />
// //                 {errors.checkOut && <p className="text-xs text-red-500 mt-0.5">{errors.checkOut}</p>}
// //               </div>

// //               {/* Guests */}
// //               <div className="px-4 py-3">
// //                 <label className="block text-xs font-medium text-secondary-text mb-1 uppercase tracking-wide">
// //                   Guests &amp; Children
// //                 </label>
// //                 <div className="flex items-center gap-3">
// //                   <div className="flex items-center gap-1.5">
// //                     <span className="text-xs text-secondary-text">Adults</span>
// //                     <select
// //                       value={guests}
// //                       onChange={(e) => setGuests(Number(e.target.value))}
// //                       className="text-sm font-medium text-primary-text bg-transparent focus:outline-none"
// //                     >
// //                       {GUEST_OPTIONS.map((n) => (
// //                         <option key={n} value={n}>{n}</option>
// //                       ))}
// //                     </select>
// //                   </div>
// //                   <span className="text-border">|</span>
// //                   <div className="flex items-center gap-1.5">
// //                     <span className="text-xs text-secondary-text">Child</span>
// //                     <select
// //                       value={children}
// //                       onChange={(e) => setChildren(Number(e.target.value))}
// //                       className="text-sm font-medium text-primary-text bg-transparent focus:outline-none"
// //                     >
// //                       {[0,1,2,3,4].map((n) => (
// //                         <option key={n} value={n}>{n}</option>
// //                       ))}
// //                     </select>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Room Type */}
// //               <div className="px-4 py-3">
// //                 <label className="block text-xs font-medium text-secondary-text mb-1 uppercase tracking-wide">
// //                   Room Type
// //                 </label>
// //                 <select
// //                   value={roomType}
// //                   onChange={(e) => setRoomType(e.target.value)}
// //                   className="w-full text-sm font-medium text-primary-text bg-transparent focus:outline-none appearance-none"
// //                 >
// //                   {ROOM_TYPES.map((rt) => (
// //                     <option key={rt.value} value={rt.value}>{rt.label}</option>
// //                   ))}
// //                 </select>
// //               </div>
// //             </div>

// //             {/* Second row: promo + CTA */}
// //             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 px-4 py-3 border-t border-border bg-section-bg/60">
// //               <div className="flex-1">
// //                 <input
// //                   type="text"
// //                   value={promoCode}
// //                   onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
// //                   placeholder="Promo code (optional)"
// //                   className="w-full sm:max-w-xs text-sm text-primary-text bg-transparent placeholder:text-secondary-text focus:outline-none border-b border-dashed border-border pb-0.5"
// //                 />
// //               </div>
// //               <button
// //                 type="submit"
// //                 className="sm:ml-auto px-8 py-2.5 text-sm font-semibold text-white bg-primary rounded hover:bg-primary-hover transition-colors"
// //               >
// //                 Search Availability
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>

// //       {/* Scroll indicator */}
// //       <div className="relative z-10 flex justify-center pb-8">
// //         <a
// //           href="#featured-rooms"
// //           className="flex flex-col items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors"
// //           aria-label="Scroll down"
// //         >
// //           <span className="text-xs tracking-widest uppercase">Explore</span>
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-4 w-4 animate-bounce"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
// //           </svg>
// //         </a>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ROUTES } from "../../../constants/routes";
// import { clsx } from "../../../utils/helpers";

// const ROOM_TYPES = [
//   { value: "", label: "All Room Types" },
//   { value: "standard", label: "Standard Room" },
//   { value: "deluxe", label: "Deluxe Room" },
//   { value: "executive", label: "Executive Room" },
//   { value: "suite", label: "Suite" },
// ];

// const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6];

// const today = new Date().toISOString().split("T")[0];
// const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

// export const Hero: React.FC = () => {
//   const navigate = useNavigate();
//   const [checkIn, setCheckIn] = useState(today);
//   const [checkOut, setCheckOut] = useState(tomorrow);
//   const [guests, setGuests] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [roomType, setRoomType] = useState("");
//   const [promoCode, setPromoCode] = useState("");
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const validate = () => {
//     const errs: Record<string, string> = {};
//     if (!checkIn) errs.checkIn = "Select check-in date";
//     if (!checkOut) errs.checkOut = "Select check-out date";
//     if (checkIn && checkOut && checkOut <= checkIn)
//       errs.checkOut = "Check-out must be after check-in";
//     if (checkIn && checkIn < today) errs.checkIn = "Check-in cannot be in the past";
//     return errs;
//   };

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     const errs = validate();
//     if (Object.keys(errs).length) { setErrors(errs); return; }
//     setErrors({});
//     const params = new URLSearchParams({
//       checkIn,
//       checkOut,
//       guests: String(guests),
//       children: String(children),
//       ...(roomType && { type: roomType }),
//       ...(promoCode && { promo: promoCode }),
//     });
//     navigate(`${ROUTES.ROOMS}?${params.toString()}`);
//   };

//   return (
//     <section className="relative min-h-screen flex flex-col" aria-label="Hero">
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80&auto=format&fit=crop"
//           alt="Raj Mahal Modern Hotel"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
//       </div>

//       <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-12 text-center">
//         <p className="text-xs font-medium tracking-[0.25em] uppercase text-white/60 mb-3">
//           Mumbai, India
//         </p>
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-4 max-w-3xl">
//           Raj Mahal<br />
//           <span className="font-light">Modern Hotel</span>
//         </h1>
//         <p className="text-base sm:text-lg text-white/75 max-w-xl mb-10 font-normal">
//           A modern stay in the heart of Mumbai — clean rooms, honest service, and everything you need.
//         </p>

//         <div className="w-full max-w-5xl bg-white rounded-md shadow-lg overflow-visible">
//           <form onSubmit={handleSearch}>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
//               <div className="px-4 py-3">
//                 <label className="block text-xs font-medium text-secondary-text mb-1 uppercase tracking-wide">
//                   Check-in
//                 </label>
//                 <input
//                   type="date"
//                   value={checkIn}
//                   min={today}
//                   onChange={(e) => { setCheckIn(e.target.value); setErrors((p) => ({ ...p, checkIn: "" })); }}
//                   className={clsx(
//                     "w-full text-sm font-medium text-primary-text bg-transparent focus:outline-none",
//                     errors.checkIn ? "text-red-500" : ""
//                   )}
//                 />
//                 {errors.checkIn && <p className="text-xs text-red-500 mt-0.5">{errors.checkIn}</p>}
//               </div>

//               <div className="px-4 py-3">
//                 <label className="block text-xs font-medium text-secondary-text mb-1 uppercase tracking-wide">
//                   Check-out
//                 </label>
//                 <input
//                   type="date"
//                   value={checkOut}
//                   min={checkIn || today}
//                   onChange={(e) => { setCheckOut(e.target.value); setErrors((p) => ({ ...p, checkOut: "" })); }}
//                   className={clsx(
//                     "w-full text-sm font-medium text-primary-text bg-transparent focus:outline-none",
//                     errors.checkOut ? "text-red-500" : ""
//                   )}
//                 />
//                 {errors.checkOut && <p className="text-xs text-red-500 mt-0.5">{errors.checkOut}</p>}
//               </div>

//               <div className="px-4 py-3">
//                 <label className="block text-xs font-medium text-secondary-text mb-1 uppercase tracking-wide">
//                   Guests & Children
//                 </label>
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center gap-1.5">
//                     <span className="text-xs text-secondary-text">Adults</span>
//                     <select
//                       value={guests}
//                       onChange={(e) => setGuests(Number(e.target.value))}
//                       className="text-sm font-medium text-primary-text bg-transparent focus:outline-none"
//                     >
//                       {GUEST_OPTIONS.map((n) => <option key={n} value={n}>{n}</option>)}
//                     </select>
//                   </div>
//                   <span className="text-border">|</span>
//                   <div className="flex items-center gap-1.5">
//                     <span className="text-xs text-secondary-text">Child</span>
//                     <select
//                       value={children}
//                       onChange={(e) => setChildren(Number(e.target.value))}
//                       className="text-sm font-medium text-primary-text bg-transparent focus:outline-none"
//                     >
//                       {[0,1,2,3,4].map((n) => <option key={n} value={n}>{n}</option>)}
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               <div className="px-4 py-3">
//                 <label className="block text-xs font-medium text-secondary-text mb-1 uppercase tracking-wide">
//                   Room Type
//                 </label>
//                 <select
//                   value={roomType}
//                   onChange={(e) => setRoomType(e.target.value)}
//                   className="w-full text-sm font-medium text-primary-text bg-transparent focus:outline-none appearance-none"
//                 >
//                   {ROOM_TYPES.map((rt) => <option key={rt.value} value={rt.value}>{rt.label}</option>)}
//                 </select>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 px-4 py-3 border-t border-border bg-section-bg/60">
//               <div className="flex-1">
//                 <input
//                   type="text"
//                   value={promoCode}
//                   onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
//                   placeholder="Promo code (optional)"
//                   className="w-full sm:max-w-xs text-sm text-primary-text bg-transparent placeholder:text-secondary-text focus:outline-none border-b border-dashed border-border pb-0.5"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="sm:ml-auto px-8 py-2.5 text-sm font-semibold text-white bg-primary rounded hover:bg-primary-hover transition-colors"
//               >
//                 Search Availability
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//      <div className="relative z-10 flex justify-center pb-8">
//   <a
//     href="#featured-rooms"
//     className="flex flex-col items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors"
//     aria-label="Scroll down"
//   >
//     <span className="text-xs tracking-widest uppercase">
//       Explore
//     </span>

//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-4 w-4 animate-bounce"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={1.5}
//         d="M19 9l-7 7-7-7"
//       />
//     </svg>
//   </a>
// </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { clsx } from "../../../utils/helpers";

const ROOM_TYPES = [
  { value: "", label: "All Room Types" },
  { value: "standard", label: "Standard Room" },
  { value: "deluxe", label: "Deluxe Room" },
  { value: "executive", label: "Executive Room" },
  { value: "suite", label: "Suite" },
];

const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6];

const today = new Date().toISOString().split("T")[0];
const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState(1);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!checkIn) errs.checkIn = "Select check-in date";
    if (!checkOut) errs.checkOut = "Select check-out date";
    if (checkIn && checkOut && checkOut <= checkIn)
      errs.checkOut = "Check-out must be after check-in";
    if (checkIn && checkIn < today) errs.checkIn = "Check-in cannot be in the past";
    return errs;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      guests: String(guests),
      children: String(children),
      ...(roomType && { type: roomType }),
      ...(promoCode && { promo: promoCode }),
    });
    navigate(`${ROUTES.ROOMS}?${params.toString()}`);
  };

  return (
    <section className="relative min-h-screen flex flex-col" aria-label="Hero">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80&auto=format&fit=crop"
          alt="Hotel Ananta"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-12 text-center">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-white/60 mb-3">
          Mumbai, India
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-4 max-w-3xl">
          Ananta<br />
          <span className="font-light">Hotel</span>
        </h1>
        <p className="text-base sm:text-lg text-white/75 max-w-xl mb-10 font-normal">
          A modern stay in the heart of Mumbai — clean rooms, honest service, and everything you need.
        </p>

        <div className="w-full max-w-5xl bg-white rounded-md shadow-lg overflow-visible">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
              <div className="px-4 py-3">
                <label className="block text-xs font-medium text-secondary-text mb-1 uppercase tracking-wide">
                  Check-in
                </label>
                <input
                  type="date"
                  value={checkIn}
                  min={today}
                  onChange={(e) => { setCheckIn(e.target.value); setErrors((p) => ({ ...p, checkIn: "" })); }}
                  className={clsx(
                    "w-full text-sm font-medium text-primary-text bg-transparent focus:outline-none",
                    errors.checkIn ? "text-red-500" : ""
                  )}
                />
                {errors.checkIn && <p className="text-xs text-red-500 mt-0.5">{errors.checkIn}</p>}
              </div>

              <div className="px-4 py-3">
                <label className="block text-xs font-medium text-secondary-text mb-1 uppercase tracking-wide">
                  Check-out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || today}
                  onChange={(e) => { setCheckOut(e.target.value); setErrors((p) => ({ ...p, checkOut: "" })); }}
                  className={clsx(
                    "w-full text-sm font-medium text-primary-text bg-transparent focus:outline-none",
                    errors.checkOut ? "text-red-500" : ""
                  )}
                />
                {errors.checkOut && <p className="text-xs text-red-500 mt-0.5">{errors.checkOut}</p>}
              </div>

              <div className="px-4 py-3">
                <label className="block text-xs font-medium text-secondary-text mb-1 uppercase tracking-wide">
                  Guests & Children
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-secondary-text">Adults</span>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="text-sm font-medium text-primary-text bg-transparent focus:outline-none"
                    >
                      {GUEST_OPTIONS.map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <span className="text-border">|</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-secondary-text">Child</span>
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="text-sm font-medium text-primary-text bg-transparent focus:outline-none"
                    >
                      {[0,1,2,3,4].map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3">
                <label className="block text-xs font-medium text-secondary-text mb-1 uppercase tracking-wide">
                  Room Type
                </label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full text-sm font-medium text-primary-text bg-transparent focus:outline-none appearance-none"
                >
                  {ROOM_TYPES.map((rt) => <option key={rt.value} value={rt.value}>{rt.label}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 px-4 py-3 border-t border-border bg-section-bg/60">
              <div className="flex-1">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                  placeholder="Promo code (optional)"
                  className="w-full sm:max-w-xs text-sm text-primary-text bg-transparent placeholder:text-secondary-text focus:outline-none border-b border-dashed border-border pb-0.5"
                />
              </div>
              <button
                type="submit"
                className="sm:ml-auto px-8 py-2.5 text-sm font-semibold text-white bg-primary rounded hover:bg-primary-hover transition-colors"
              >
                Search Availability
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-8">
  <a
    href="#featured-rooms"
    className="flex flex-col items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors"
    aria-label="Scroll down"
  >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;