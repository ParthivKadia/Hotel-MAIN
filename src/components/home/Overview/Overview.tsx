// // import React from "react";
// // import { SITE_CONFIG } from "../../../constants/siteConfig";

// // const highlights = [
// //   { label: "150+", desc: "Rooms & Suites" },
// //   { label: "4.7", desc: "Average Rating" },
// //   { label: "12+", desc: "Years in Operation" },
// //   { label: "24/7", desc: "Front Desk Service" },
// // ];

// // const whyUs = [
// //   {
// //     title: "Prime Location",
// //     desc: "Situated on Marine Drive with easy access to business districts, shopping, and iconic Mumbai landmarks.",
// //   },
// //   {
// //     title: "Direct Booking Benefits",
// //     desc: "Book directly with us for the best rates, free cancellation up to 48 hours, and complimentary early check-in on availability.",
// //   },
// //   {
// //     title: "Modern Facilities",
// //     desc: "Rooftop pool, full-service spa, fitness center, and meeting rooms — all in one building.",
// //   },
// //   {
// //     title: "Reliable Wi-Fi",
// //     desc: "High-speed internet across all rooms and public areas — no login forms or speed limits.",
// //   },
// // ];

// // const nearbyAttractions = [
// //   { name: "Gateway of India", distance: "2.4 km" },
// //   { name: "Chhatrapati Shivaji Terminus", distance: "3.1 km" },
// //   { name: "Bandra-Kurla Complex", distance: "8.5 km" },
// //   { name: "Chhatrapati Shivaji Maharaj Airport", distance: "27 km" },
// //   { name: "Colaba Causeway", distance: "2.8 km" },
// //   { name: "Marine Lines Station", distance: "0.4 km" },
// // ];

// // export const Overview: React.FC = () => {
// //   return (
// //     <section className="py-16 md:py-20 bg-section-bg">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
// //           {/* Left column */}
// //           <div>
// //             <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">
// //               About the Hotel
// //             </p>
// //             <h2 className="text-2xl md:text-3xl font-semibold text-primary-text mb-4">
// //               A practical base for every traveller
// //             </h2>
// //             <p className="text-secondary-text text-sm leading-relaxed mb-6">
// //               Raj Mahal Modern Hotel is a full-service property on Mumbai's Marine Drive — well-located, professionally run, and built around what guests actually need. Whether you're here for a business trip, a weekend getaway, or an extended stay, you'll find clean rooms, attentive staff, and reliable amenities without the fuss.
// //             </p>
// //             <p className="text-secondary-text text-sm leading-relaxed mb-8">
// //               We focus on consistent quality over excess. Every room is maintained to a strict standard, our restaurant serves straightforward, good food, and our staff are trained to fix problems quickly — not just apologise for them.
// //             </p>

// //             {/* Stats */}
// //             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
// //               {highlights.map((h) => (
// //                 <div key={h.label} className="text-center p-4 bg-white rounded-md border border-border">
// //                   <p className="text-2xl font-semibold text-primary-text">{h.label}</p>
// //                   <p className="text-xs text-secondary-text mt-0.5">{h.desc}</p>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Operating hours */}
// //             <div className="mt-8 border-t border-border pt-6">
// //               <h3 className="text-sm font-semibold text-primary-text mb-3">Operating Hours</h3>
// //               <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
// //                 {[
// //                   ["Check-in", `${SITE_CONFIG.checkInTime} onwards`],
// //                   ["Check-out", `By ${SITE_CONFIG.checkOutTime}`],
// //                   ["Restaurant", "7:00 AM – 11:00 PM"],
// //                   ["Lobby Bar", "11:00 AM – 11:00 PM"],
// //                   ["Pool", "7:00 AM – 9:00 PM"],
// //                   ["Gym", "6:00 AM – 10:00 PM"],
// //                   ["Spa", "9:00 AM – 8:00 PM"],
// //                   ["Front Desk", "24 hours"],
// //                 ].map(([label, time]) => (
// //                   <div key={label} className="flex justify-between">
// //                     <span className="text-secondary-text">{label}</span>
// //                     <span className="text-primary-text font-medium text-right">{time}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right column */}
// //           <div className="flex flex-col gap-6">
// //             {/* Why us */}
// //             <div>
// //               <h3 className="text-sm font-semibold text-primary-text mb-4">Why guests choose us</h3>
// //               <div className="grid sm:grid-cols-2 gap-3">
// //                 {whyUs.map((item) => (
// //                   <div key={item.title} className="p-4 bg-white rounded-md border border-border">
// //                     <div className="flex items-center gap-2 mb-1.5">
// //                       <div className="w-1.5 h-1.5 rounded-full bg-primary" />
// //                       <h4 className="text-sm font-medium text-primary-text">{item.title}</h4>
// //                     </div>
// //                     <p className="text-xs text-secondary-text leading-relaxed pl-3.5">{item.desc}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Nearby attractions */}
// //             <div className="bg-white rounded-md border border-border p-5">
// //               <h3 className="text-sm font-semibold text-primary-text mb-4">Nearby Attractions</h3>
// //               <ul className="divide-y divide-border">
// //                 {nearbyAttractions.map((a) => (
// //                   <li key={a.name} className="flex items-center justify-between py-2.5">
// //                     <span className="text-sm text-primary-text">{a.name}</span>
// //                     <span className="text-xs text-secondary-text bg-section-bg px-2 py-0.5 rounded">{a.distance}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             {/* Map preview */}
// //             <div className="rounded-md overflow-hidden border border-border">
// //               <iframe
// //                 title="Raj Mahal Hotel location"
// //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.906!2d72.8254!3d18.9442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU2JzM5LjEiTiA3MsKwNDknMzEuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
// //                 width="100%"
// //                 height="220"
// //                 style={{ border: 0, display: "block" }}
// //                 allowFullScreen={false}
// //                 loading="lazy"
// //                 referrerPolicy="no-referrer-when-downgrade"
// //               />
// //               <div className="px-4 py-3 bg-section-bg flex items-center justify-between">
// //                 <div>
// //                   <p className="text-xs font-medium text-primary-text">{SITE_CONFIG.fullName}</p>
// //                   <p className="text-xs text-secondary-text">{SITE_CONFIG.address}</p>
// //                 </div>
// //                 <a
// //                   href="https://maps.google.com"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="text-xs text-primary hover:underline shrink-0 ml-3"
// //                 >
// //                   Get directions →
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Overview;
// import React from "react";
// import { SITE_CONFIG } from "../../../constants/siteConfig";

// const highlights = [
//   { label: "150+", desc: "Rooms & Suites" },
//   { label: "4.7", desc: "Average Rating" },
//   { label: "12+", desc: "Years in Operation" },
//   { label: "24/7", desc: "Front Desk Service" },
// ];

// const whyUs = [
//   { title: "Prime Location", desc: "Situated on Marine Drive with easy access to business districts, shopping, and iconic Mumbai landmarks." },
//   { title: "Direct Booking Benefits", desc: "Book directly with us for the best rates, free cancellation up to 48 hours, and complimentary early check-in on availability." },
//   { title: "Modern Facilities", desc: "Rooftop pool, full-service spa, fitness center, and meeting rooms — all in one building." },
//   { title: "Reliable Wi-Fi", desc: "High-speed internet across all rooms and public areas — no login forms or speed limits." },
// ];

// const nearbyAttractions = [
//   { name: "Gateway of India", distance: "2.4 km" },
//   { name: "Chhatrapati Shivaji Terminus", distance: "3.1 km" },
//   { name: "Bandra-Kurla Complex", distance: "8.5 km" },
//   { name: "Chhatrapati Shivaji Maharaj Airport", distance: "27 km" },
//   { name: "Colaba Causeway", distance: "2.8 km" },
//   { name: "Marine Lines Station", distance: "0.4 km" },
// ];

// export const Overview: React.FC = () => {
//   return (
//     <section className="py-16 md:py-20 bg-section-bg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//           <div>
//             <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">About the Hotel</p>
//             <h2 className="text-2xl md:text-3xl font-semibold text-primary-text mb-4">
//               A practical base for every traveller
//             </h2>
//             <p className="text-secondary-text text-sm leading-relaxed mb-6">
//               Raj Mahal Modern Hotel is a full-service property on Mumbai's Marine Drive — well-located, professionally run, and built around what guests actually need. Whether you're here for a business trip, a weekend getaway, or an extended stay, you'll find clean rooms, attentive staff, and reliable amenities without the fuss.
//             </p>
//             <p className="text-secondary-text text-sm leading-relaxed mb-8">
//               We focus on consistent quality over excess. Every room is maintained to a strict standard, our restaurant serves straightforward, good food, and our staff are trained to fix problems quickly — not just apologise for them.
//             </p>

//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//               {highlights.map((h) => (
//                 <div key={h.label} className="text-center p-4 bg-white rounded-md border border-border">
//                   <p className="text-2xl font-semibold text-primary-text">{h.label}</p>
//                   <p className="text-xs text-secondary-text mt-0.5">{h.desc}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-8 border-t border-border pt-6">
//               <h3 className="text-sm font-semibold text-primary-text mb-3">Operating Hours</h3>
//               <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
//                 {[
//                   ["Check-in", `${SITE_CONFIG.checkInTime} onwards`],
//                   ["Check-out", `By ${SITE_CONFIG.checkOutTime}`],
//                   ["Restaurant", "7:00 AM – 11:00 PM"],
//                   ["Lobby Bar", "11:00 AM – 11:00 PM"],
//                   ["Pool", "7:00 AM – 9:00 PM"],
//                   ["Gym", "6:00 AM – 10:00 PM"],
//                   ["Spa", "9:00 AM – 8:00 PM"],
//                   ["Front Desk", "24 hours"],
//                 ].map(([label, time]) => (
//                   <div key={label} className="flex justify-between">
//                     <span className="text-secondary-text">{label}</span>
//                     <span className="text-primary-text font-medium text-right">{time}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col gap-6">
//             <div>
//               <h3 className="text-sm font-semibold text-primary-text mb-4">Why guests choose us</h3>
//               <div className="grid sm:grid-cols-2 gap-3">
//                 {whyUs.map((item) => (
//                   <div key={item.title} className="p-4 bg-white rounded-md border border-border">
//                     <div className="flex items-center gap-2 mb-1.5">
//                       <div className="w-1.5 h-1.5 rounded-full bg-primary" />
//                       <h4 className="text-sm font-medium text-primary-text">{item.title}</h4>
//                     </div>
//                     <p className="text-xs text-secondary-text leading-relaxed pl-3.5">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white rounded-md border border-border p-5">
//               <h3 className="text-sm font-semibold text-primary-text mb-4">Nearby Attractions</h3>
//               <ul className="divide-y divide-border">
//                 {nearbyAttractions.map((a) => (
//                   <li key={a.name} className="flex items-center justify-between py-2.5">
//                     <span className="text-sm text-primary-text">{a.name}</span>
//                     <span className="text-xs text-secondary-text bg-section-bg px-2 py-0.5 rounded">{a.distance}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="rounded-md overflow-hidden border border-border">
//               <iframe
//                 title="Raj Mahal Hotel location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.906!2d72.8254!3d18.9442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU2JzM5LjEiTiA3MsKwNDknMzEuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
//                 width="100%"
//                 height="220"
//                 style={{ border: 0, display: "block" }}
//                 allowFullScreen={false}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//               <div className="px-4 py-3 bg-section-bg flex items-center justify-between">
//                 <div>
//                   <p className="text-xs font-medium text-primary-text">{SITE_CONFIG.fullName}</p>
//                   <p className="text-xs text-secondary-text">{SITE_CONFIG.address}</p>
//                 </div>
//                 <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline shrink-0 ml-3">
//                   Get directions →
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Overview;
import React from "react";
import { SITE_CONFIG } from "../../../constants/siteConfig";

const highlights = [
  { label: "150+", desc: "Rooms & Suites" },
  { label: "4.7", desc: "Average Rating" },
  { label: "12+", desc: "Years in Operation" },
  { label: "24/7", desc: "Front Desk Service" },
];

const whyUs = [
  { title: "Prime Location", desc: "Situated on Marine Drive with easy access to business districts, shopping, and iconic Mumbai landmarks." },
  { title: "Direct Booking Benefits", desc: "Book directly with us for the best rates, free cancellation up to 48 hours, and complimentary early check-in on availability." },
  { title: "Modern Facilities", desc: "Rooftop pool, full-service spa, fitness center, and meeting rooms — all in one building." },
  { title: "Reliable Wi-Fi", desc: "High-speed internet across all rooms and public areas — no login forms or speed limits." },
];

const nearbyAttractions = [
  { name: "Gateway of India", distance: "2.4 km" },
  { name: "Chhatrapati Shivaji Terminus", distance: "3.1 km" },
  { name: "Bandra-Kurla Complex", distance: "8.5 km" },
  { name: "Chhatrapati Shivaji Maharaj Airport", distance: "27 km" },
  { name: "Colaba Causeway", distance: "2.8 km" },
  { name: "Marine Lines Station", distance: "0.4 km" },
];

export const Overview: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">About the Hotel</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-text mb-4">
              A practical base for every traveller
            </h2>
            <p className="text-secondary-text text-sm leading-relaxed mb-6">
              Ananta Hotel is a full-service property on Mumbai's Marine Drive — well-located, professionally run, and built around what guests actually need. Whether you're here for a business trip, a weekend getaway, or an extended stay, you'll find clean rooms, attentive staff, and reliable amenities without the fuss.
            </p>
            <p className="text-secondary-text text-sm leading-relaxed mb-8">
              We focus on consistent quality over excess. Every room is maintained to a strict standard, our restaurant serves straightforward, good food, and our staff are trained to fix problems quickly — not just apologise for them.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="text-center p-4 bg-white rounded-md border border-border">
                  <p className="text-2xl font-semibold text-primary-text">{h.label}</p>
                  <p className="text-xs text-secondary-text mt-0.5">{h.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <h3 className="text-sm font-semibold text-primary-text mb-3">Operating Hours</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {[
                  ["Check-in", `${SITE_CONFIG.checkInTime} onwards`],
                  ["Check-out", `By ${SITE_CONFIG.checkOutTime}`],
                  ["Restaurant", "7:00 AM – 11:00 PM"],
                  ["Lobby Bar", "11:00 AM – 11:00 PM"],
                  ["Pool", "7:00 AM – 9:00 PM"],
                  ["Gym", "6:00 AM – 10:00 PM"],
                  ["Spa", "9:00 AM – 8:00 PM"],
                  ["Front Desk", "24 hours"],
                ].map(([label, time]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-secondary-text">{label}</span>
                    <span className="text-primary-text font-medium text-right">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-sm font-semibold text-primary-text mb-4">Why guests choose us</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {whyUs.map((item) => (
                  <div key={item.title} className="p-4 bg-white rounded-md border border-border">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <h4 className="text-sm font-medium text-primary-text">{item.title}</h4>
                    </div>
                    <p className="text-xs text-secondary-text leading-relaxed pl-3.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-md border border-border p-5">
              <h3 className="text-sm font-semibold text-primary-text mb-4">Nearby Attractions</h3>
              <ul className="divide-y divide-border">
                {nearbyAttractions.map((a) => (
                  <li key={a.name} className="flex items-center justify-between py-2.5">
                    <span className="text-sm text-primary-text">{a.name}</span>
                    <span className="text-xs text-secondary-text bg-section-bg px-2 py-0.5 rounded">{a.distance}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-md overflow-hidden border border-border">
              <iframe
                title="Ananta Hotel"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.906!2d72.8254!3d18.9442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU2JzM5LjEiTiA3MsKwNDknMzEuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="px-4 py-3 bg-section-bg flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-primary-text">{SITE_CONFIG.fullName}</p>
                  <p className="text-xs text-secondary-text">{SITE_CONFIG.address}</p>
                </div>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline shrink-0 ml-3">
                  Get directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;