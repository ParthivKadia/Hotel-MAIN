// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { ROUTES } from "../../../constants/routes";

// // const previewImages = [
// //   { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80", alt: "Hotel Exterior", label: "Exterior", span: "col-span-2 row-span-2" },
// //   { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80", alt: "Deluxe Room", label: "Rooms", span: "" },
// //   { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", alt: "Restaurant", label: "Restaurant", span: "" },
// //   { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80", alt: "Swimming Pool", label: "Pool", span: "" },
// //   { src: "https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=600&q=80", alt: "Fitness Center", label: "Gym", span: "" },
// //   { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80", alt: "Conference Room", label: "Conference", span: "" },
// // ];

// // export const GalleryPreview: React.FC = () => {
// //   return (
// //     <section className="py-16 md:py-20 bg-section-bg">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Heading */}
// //         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
// //           <div>
// //             <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">
// //               Photo Tour
// //             </p>
// //             <h2 className="text-2xl md:text-3xl font-semibold text-primary-text">
// //               Gallery
// //             </h2>
// //             <p className="mt-1.5 text-secondary-text text-sm">
// //               Take a closer look at our spaces before you arrive.
// //             </p>
// //           </div>
// //           <Link
// //             to={ROUTES.GALLERY}
// //             className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors"
// //           >
// //             View All Gallery
// //             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
// //             </svg>
// //           </Link>
// //         </div>

// //         {/* Grid — asymmetric layout */}
// //         <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[480px] md:h-[520px]">
// //           {previewImages.map((img, idx) => (
// //             <Link
// //               key={img.alt}
// //               to={ROUTES.GALLERY}
// //               className={`relative overflow-hidden rounded-md group ${img.span}`}
// //             >
// //               <img
// //                 src={img.src}
// //                 alt={img.alt}
// //                 className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
// //               <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/50 text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
// //                 {img.label}
// //               </span>
// //               {/* Last image: show +more overlay */}
// //               {idx === previewImages.length - 1 && (
// //                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
// //                   <span className="text-white text-sm font-medium">View All →</span>
// //                 </div>
// //               )}
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default GalleryPreview;
// import React from "react";
// import { Link } from "react-router-dom";
// import { ROUTES } from "../../../constants/routes";

// const previewImages = [
//   { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80", alt: "Hotel Exterior", label: "Exterior", span: "col-span-2 row-span-2" },
//   { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80", alt: "Deluxe Room", label: "Rooms", span: "" },
//   { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", alt: "Restaurant", label: "Restaurant", span: "" },
//   { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80", alt: "Swimming Pool", label: "Pool", span: "" },
//   { src: "https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=600&q=80", alt: "Fitness Center", label: "Gym", span: "" },
//   { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80", alt: "Conference Room", label: "Conference", span: "" },
// ];

// export const GalleryPreview: React.FC = () => {
//   return (
//     <section className="py-16 md:py-20 bg-section-bg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
//           <div>
//             <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">Photo Tour</p>
//             <h2 className="text-2xl md:text-3xl font-semibold text-primary-text">Gallery</h2>
//             <p className="mt-1.5 text-secondary-text text-sm">Take a closer look at our spaces before you arrive.</p>
//           </div>
//           <Link to={ROUTES.GALLERY} className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors">
//             View All Gallery
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
//           </Link>
//         </div>

//         <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[480px] md:h-[520px]">
//           {previewImages.map((img, idx) => (
//             <Link key={img.alt} to={ROUTES.GALLERY} className={`relative overflow-hidden rounded-md group ${img.span}`}>
//               <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300" />
//               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
//               <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/50 text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                 {img.label}
//               </span>
//               {idx === previewImages.length - 1 && (
//                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                   <span className="text-white text-sm font-medium">View All →</span>
//                 </div>
//               )}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GalleryPreview;
import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

const previewImages = [
  { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80", alt: "Hotel Exterior", label: "Exterior", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80", alt: "Deluxe Room", label: "Rooms", span: "" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", alt: "Restaurant", label: "Restaurant", span: "" },
  { src: "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Swimming Pool", label: "Pool", span: "" },
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", alt: "Fitness Center", label: "Gym", span: "" },
  { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80", alt: "Conference Room", label: "Conference", span: "" },
];

export const GalleryPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">Photo Tour</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-text">Gallery</h2>
            <p className="mt-1.5 text-secondary-text text-sm">Take a closer look at our spaces before you arrive.</p>
          </div>
          <Link to={ROUTES.GALLERY} className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors">
            View All Gallery
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[480px] md:h-[520px]">
          {previewImages.map((img, idx) => (
            <Link key={img.alt} to={ROUTES.GALLERY} className={`relative overflow-hidden rounded-md group ${img.span}`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/50 text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {img.label}
              </span>
              {idx === previewImages.length - 1 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">View All →</span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;