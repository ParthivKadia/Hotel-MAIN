// // import React, { useState } from "react";
// // import { testimonials } from "../../../data/testimonials";
// // import { formatDate } from "../../../utils/formatDate";

// // const AVATAR_COLORS = ["bg-blue-100 text-blue-700", "bg-emerald-100 text-emerald-700", "bg-violet-100 text-violet-700", "bg-orange-100 text-orange-700"];

// // const StarRow = ({ rating }: { rating: number }) => (
// //   <div className="flex items-center gap-0.5">
// //     {Array.from({ length: 5 }).map((_, i) => (
// //       <svg key={i} viewBox="0 0 20 20" className={`w-3.5 h-3.5 ${i < rating ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor">
// //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //       </svg>
// //     ))}
// //   </div>
// // );

// // export const Testimonials: React.FC = () => {
// //   const [active, setActive] = useState(0);

// //   return (
// //     <section className="py-16 md:py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Heading */}
// //         <div className="mb-10">
// //           <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">Guest Reviews</p>
// //           <h2 className="text-2xl md:text-3xl font-semibold text-primary-text">What guests say</h2>
// //           <p className="mt-1.5 text-secondary-text text-sm">
// //             Verified reviews from guests who have stayed with us.
// //           </p>
// //         </div>

// //         {/* Cards desktop */}
// //         <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
// //           {testimonials.map((t, idx) => (
// //             <div key={t.id} className="flex flex-col p-5 rounded-md border border-border bg-white hover:shadow-md transition-shadow duration-200">
// //               {/* Header */}
// //               <div className="flex items-center gap-3 mb-4">
// //                 <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${AVATAR_COLORS[idx % AVATAR_COLORS.length]}`}>
// //                   {t.authorName.charAt(0)}
// //                 </div>
// //                 <div className="min-w-0">
// //                   <p className="text-sm font-medium text-primary-text truncate">{t.authorName}</p>
// //                   <p className="text-xs text-secondary-text">{t.authorLocation}</p>
// //                 </div>
// //               </div>
// //               {/* Rating + verified */}
// //               <div className="flex items-center gap-2 mb-3">
// //                 <StarRow rating={t.rating} />
// //                 {t.isVerified && (
// //                   <span className="flex items-center gap-1 text-xs text-success">
// //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
// //                       <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// //                     </svg>
// //                     Verified
// //                   </span>
// //                 )}
// //               </div>
// //               {/* Title + content */}
// //               <p className="text-xs font-semibold text-primary-text mb-1.5">{t.title}</p>
// //               <p className="text-xs text-secondary-text leading-relaxed flex-1">{t.content}</p>
// //               {/* Date */}
// //               <p className="text-xs text-secondary-text mt-4 pt-3 border-t border-border">
// //                 {formatDate(t.createdAt)}
// //               </p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Mobile carousel */}
// //         <div className="md:hidden">
// //           <div className="p-5 rounded-md border border-border">
// //             {(() => {
// //               const t = testimonials[active];
// //               const idx = active;
// //               return (
// //                 <>
// //                   <div className="flex items-center gap-3 mb-4">
// //                     <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold ${AVATAR_COLORS[idx % AVATAR_COLORS.length]}`}>
// //                       {t.authorName.charAt(0)}
// //                     </div>
// //                     <div>
// //                       <p className="text-sm font-medium text-primary-text">{t.authorName}</p>
// //                       <p className="text-xs text-secondary-text">{t.authorLocation}</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-center gap-2 mb-3">
// //                     <StarRow rating={t.rating} />
// //                     {t.isVerified && (
// //                       <span className="text-xs text-success flex items-center gap-1">
// //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
// //                           <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// //                         </svg>
// //                         Verified
// //                       </span>
// //                     )}
// //                   </div>
// //                   <p className="text-xs font-semibold text-primary-text mb-1.5">{t.title}</p>
// //                   <p className="text-xs text-secondary-text leading-relaxed">{t.content}</p>
// //                   <p className="text-xs text-secondary-text mt-4 pt-3 border-t border-border">{formatDate(t.createdAt)}</p>
// //                 </>
// //               );
// //             })()}
// //           </div>
// //           {/* Dots */}
// //           <div className="flex justify-center gap-2 mt-4">
// //             {testimonials.map((_, i) => (
// //               <button
// //                 key={i}
// //                 onClick={() => setActive(i)}
// //                 className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-primary" : "bg-border"}`}
// //                 aria-label={`Review ${i + 1}`}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* Overall rating summary */}
// //         <div className="mt-8 flex flex-wrap items-center gap-6 p-4 bg-section-bg rounded-md border border-border">
// //           <div className="text-center">
// //             <p className="text-3xl font-semibold text-primary-text">4.7</p>
// //             <StarRow rating={5} />
// //             <p className="text-xs text-secondary-text mt-1">Overall rating</p>
// //           </div>
// //           <div className="h-10 w-px bg-border hidden sm:block" />
// //           {[["Cleanliness", 4.8], ["Service", 4.7], ["Location", 4.9], ["Value", 4.5]].map(([label, val]) => (
// //             <div key={label} className="flex flex-col gap-1 min-w-[100px]">
// //               <div className="flex justify-between text-xs mb-0.5">
// //                 <span className="text-secondary-text">{label}</span>
// //                 <span className="font-medium text-primary-text">{val}</span>
// //               </div>
// //               <div className="h-1.5 bg-border rounded-full overflow-hidden">
// //                 <div
// //                   className="h-full bg-primary rounded-full"
// //                   style={{ width: `${(Number(val) / 5) * 100}%` }}
// //                 />
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Testimonials;
// import React, { useState } from "react";
// import { testimonials } from "../../../data/testimonials";
// import { formatDate } from "../../../utils/formatDate";

// const AVATAR_COLORS = ["bg-blue-100 text-blue-700", "bg-emerald-100 text-emerald-700", "bg-violet-100 text-violet-700", "bg-orange-100 text-orange-700"];

// const StarRow = ({ rating }: { rating: number }) => (
//   <div className="flex items-center gap-0.5">
//     {Array.from({ length: 5 }).map((_, i) => (
//       <svg key={i} viewBox="0 0 20 20" className={`w-3.5 h-3.5 ${i < rating ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor">
//         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//       </svg>
//     ))}
//   </div>
// );

// const VerifiedBadge = () => (
//   <span className="flex items-center gap-1 text-xs text-success">
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
//       <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//     </svg>
//     Verified
//   </span>
// );

// export const Testimonials: React.FC = () => {
//   const [active, setActive] = useState(0);

//   return (
//     <section className="py-16 md:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mb-10">
//           <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">Guest Reviews</p>
//           <h2 className="text-2xl md:text-3xl font-semibold text-primary-text">What guests say</h2>
//           <p className="mt-1.5 text-secondary-text text-sm">Verified reviews from guests who have stayed with us.</p>
//         </div>

//         <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {testimonials.map((t, idx) => (
//             <div key={t.id} className="flex flex-col p-5 rounded-md border border-border bg-white hover:shadow-md transition-shadow duration-200">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${AVATAR_COLORS[idx % AVATAR_COLORS.length]}`}>
//                   {t.authorName.charAt(0)}
//                 </div>
//                 <div className="min-w-0">
//                   <p className="text-sm font-medium text-primary-text truncate">{t.authorName}</p>
//                   <p className="text-xs text-secondary-text">{t.authorLocation}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 mb-3">
//                 <StarRow rating={t.rating} />
//                 {t.isVerified && <VerifiedBadge />}
//               </div>
//               <p className="text-xs font-semibold text-primary-text mb-1.5">{t.title}</p>
//               <p className="text-xs text-secondary-text leading-relaxed flex-1">{t.content}</p>
//               <p className="text-xs text-secondary-text mt-4 pt-3 border-t border-border">{formatDate(t.createdAt)}</p>
//             </div>
//           ))}
//         </div>

//         <div className="md:hidden">
//           <div className="p-5 rounded-md border border-border">
//             {(() => {
//               const t = testimonials[active];
//               return (
//                 <>
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold ${AVATAR_COLORS[active % AVATAR_COLORS.length]}`}>
//                       {t.authorName.charAt(0)}
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-primary-text">{t.authorName}</p>
//                       <p className="text-xs text-secondary-text">{t.authorLocation}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2 mb-3">
//                     <StarRow rating={t.rating} />
//                     {t.isVerified && <VerifiedBadge />}
//                   </div>
//                   <p className="text-xs font-semibold text-primary-text mb-1.5">{t.title}</p>
//                   <p className="text-xs text-secondary-text leading-relaxed">{t.content}</p>
//                   <p className="text-xs text-secondary-text mt-4 pt-3 border-t border-border">{formatDate(t.createdAt)}</p>
//                 </>
//               );
//             })()}
//           </div>
//           <div className="flex justify-center gap-2 mt-4">
//             {testimonials.map((_, i) => (
//               <button key={i} onClick={() => setActive(i)} className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-primary" : "bg-border"}`} aria-label={`Review ${i + 1}`} />
//             ))}
//           </div>
//         </div>

//         <div className="mt-8 flex flex-wrap items-center gap-6 p-4 bg-section-bg rounded-md border border-border">
//           <div className="text-center">
//             <p className="text-3xl font-semibold text-primary-text">4.7</p>
//             <StarRow rating={5} />
//             <p className="text-xs text-secondary-text mt-1">Overall rating</p>
//           </div>
//           <div className="h-10 w-px bg-border hidden sm:block" />
//           {[["Cleanliness", 4.8], ["Service", 4.7], ["Location", 4.9], ["Value", 4.5]].map(([label, val]) => (
//             <div key={String(label)} className="flex flex-col gap-1 min-w-[100px]">
//               <div className="flex justify-between text-xs mb-0.5">
//                 <span className="text-secondary-text">{label}</span>
//                 <span className="font-medium text-primary-text">{val}</span>
//               </div>
//               <div className="h-1.5 bg-border rounded-full overflow-hidden">
//                 <div className="h-full bg-primary rounded-full" style={{ width: `${(Number(val) / 5) * 100}%` }} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React, { useState } from "react";
import { testimonials } from "../../../data/testimonials";
import { formatDate } from "../../../utils/formatDate";

const AVATAR_COLORS = ["bg-blue-100 text-blue-700", "bg-emerald-100 text-emerald-700", "bg-violet-100 text-violet-700", "bg-orange-100 text-orange-700"];

const StarRow = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" className={`w-3.5 h-3.5 ${i < rating ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const VerifiedBadge = () => (
  <span className="flex items-center gap-1 text-xs text-success">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    Verified
  </span>
);

export const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">Guest Reviews</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-text">What guests say</h2>
          <p className="mt-1.5 text-secondary-text text-sm">Verified reviews from guests who have stayed with us.</p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, idx) => (
            <div key={t.id} className="flex flex-col p-5 rounded-md border border-border bg-white hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${AVATAR_COLORS[idx % AVATAR_COLORS.length]}`}>
                  {t.authorName.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-primary-text truncate">{t.authorName}</p>
                  <p className="text-xs text-secondary-text">{t.authorLocation}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <StarRow rating={t.rating} />
                {t.isVerified && <VerifiedBadge />}
              </div>
              <p className="text-xs font-semibold text-primary-text mb-1.5">{t.title}</p>
              <p className="text-xs text-secondary-text leading-relaxed flex-1">{t.content}</p>
              <p className="text-xs text-secondary-text mt-4 pt-3 border-t border-border">{formatDate(t.createdAt)}</p>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="p-5 rounded-md border border-border">
            {(() => {
              const t = testimonials[active];
              return (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold ${AVATAR_COLORS[active % AVATAR_COLORS.length]}`}>
                      {t.authorName.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary-text">{t.authorName}</p>
                      <p className="text-xs text-secondary-text">{t.authorLocation}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <StarRow rating={t.rating} />
                    {t.isVerified && <VerifiedBadge />}
                  </div>
                  <p className="text-xs font-semibold text-primary-text mb-1.5">{t.title}</p>
                  <p className="text-xs text-secondary-text leading-relaxed">{t.content}</p>
                  <p className="text-xs text-secondary-text mt-4 pt-3 border-t border-border">{formatDate(t.createdAt)}</p>
                </>
              );
            })()}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-primary" : "bg-border"}`} aria-label={`Review ${i + 1}`} />
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6 p-4 bg-section-bg rounded-md border border-border">
          <div className="text-center">
            <p className="text-3xl font-semibold text-primary-text">4.7</p>
            <StarRow rating={5} />
            <p className="text-xs text-secondary-text mt-1">Overall rating</p>
          </div>
          <div className="h-10 w-px bg-border hidden sm:block" />
          {[["Cleanliness", 4.8], ["Service", 4.7], ["Location", 4.9], ["Value", 4.5]].map(([label, val]) => (
            <div key={String(label)} className="flex flex-col gap-1 min-w-[100px]">
              <div className="flex justify-between text-xs mb-0.5">
                <span className="text-secondary-text">{label}</span>
                <span className="font-medium text-primary-text">{val}</span>
              </div>
              <div className="h-1.5 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${(Number(val) / 5) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;