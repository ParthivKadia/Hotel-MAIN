// // import React, { useState } from "react";
// // import { faqs } from "../../../data/faq";

// // export const FAQ: React.FC = () => {
// //   const [openId, setOpenId] = useState<string | null>(faqs[0].id);

// //   const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

// //   return (
// //     <section className="py-16 md:py-20 bg-section-bg">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
// //           {/* Left — heading */}
// //           <div className="lg:col-span-4">
// //             <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">
// //               FAQs
// //             </p>
// //             <h2 className="text-2xl md:text-3xl font-semibold text-primary-text mb-4">
// //               Frequently asked questions
// //             </h2>
// //             <p className="text-secondary-text text-sm leading-relaxed mb-6">
// //               Can't find your answer here? Contact our team directly.
// //             </p>
// //             <a
// //               href="tel:+912266778899"
// //               className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-2"
// //             >
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
// //               </svg>
// //               +91 22 6677 8899
// //             </a>
// //           </div>

// //           {/* Right — accordion */}
// //           <div className="lg:col-span-8">
// //             <div className="divide-y divide-border border border-border rounded-md bg-white overflow-hidden">
// //               {faqs.map((faq) => {
// //                 const isOpen = openId === faq.id;
// //                 return (
// //                   <div key={faq.id}>
// //                     <button
// //                       onClick={() => toggle(faq.id)}
// //                       className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-section-bg/60 transition-colors"
// //                       aria-expanded={isOpen}
// //                     >
// //                       <span className="text-sm font-medium text-primary-text pr-4">
// //                         {faq.question}
// //                       </span>
// //                       <span
// //                         className={`shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-border transition-transform duration-200 ${isOpen ? "rotate-45 bg-primary border-primary text-white" : "bg-white text-secondary-text"}`}
// //                       >
// //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
// //                           <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
// //                         </svg>
// //                       </span>
// //                     </button>
// //                     {isOpen && (
// //                       <div className="px-5 pb-5 text-sm text-secondary-text leading-relaxed border-t border-border bg-section-bg/30">
// //                         <div className="pt-4">{faq.answer}</div>
// //                       </div>
// //                     )}
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default FAQ;
// import React, { useState } from "react";
// import { faqs } from "../../../data/faq";

// export const FAQ: React.FC = () => {
//   const [openId, setOpenId] = useState<string | null>(faqs[0].id);
//   const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

//   return (
//     <section className="py-16 md:py-20 bg-section-bg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
//           <div className="lg:col-span-4">
//             <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">FAQs</p>
//             <h2 className="text-2xl md:text-3xl font-semibold text-primary-text mb-4">Frequently asked questions</h2>
//             <p className="text-secondary-text text-sm leading-relaxed mb-6">Can't find your answer here? Contact our team directly.</p>
//             <a href="tel:+912266778899" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//               +91 22 6677 8899
//             </a>
//           </div>

//           <div className="lg:col-span-8">
//             <div className="divide-y divide-border border border-border rounded-md bg-white overflow-hidden">
//               {faqs.map((faq) => {
//                 const isOpen = openId === faq.id;
//                 return (
//                   <div key={faq.id}>
//                     <button onClick={() => toggle(faq.id)} className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-section-bg/60 transition-colors" aria-expanded={isOpen}>
//                       <span className="text-sm font-medium text-primary-text pr-4">{faq.question}</span>
//                       <span className={`shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-border transition-transform duration-200 ${isOpen ? "rotate-45 bg-primary border-primary text-white" : "bg-white text-secondary-text"}`}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                           <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//                         </svg>
//                       </span>
//                     </button>
//                     {isOpen && (
//                       <div className="px-5 pb-5 text-sm text-secondary-text leading-relaxed border-t border-border bg-section-bg/30">
//                         <div className="pt-4">{faq.answer}</div>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;
import React, { useState } from "react";
import { faqs } from "../../../data/faq";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);
  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="py-16 md:py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-2">FAQs</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-text mb-4">Frequently asked questions</h2>
            <p className="text-secondary-text text-sm leading-relaxed mb-6">Can't find your answer here? Contact our team directly.</p>
            <a href="tel:+912266778899" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 22 6677 8899
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-border border border-border rounded-md bg-white overflow-hidden">
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id}>
                    <button onClick={() => toggle(faq.id)} className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-section-bg/60 transition-colors" aria-expanded={isOpen}>
                      <span className="text-sm font-medium text-primary-text pr-4">{faq.question}</span>
                      <span className={`shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-border transition-transform duration-200 ${isOpen ? "rotate-45 bg-primary border-primary text-white" : "bg-white text-secondary-text"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm text-secondary-text leading-relaxed border-t border-border bg-section-bg/30">
                        <div className="pt-4">{faq.answer}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;