// // import React, { useState } from "react";
// // import { isValidEmail } from "../../../utils/validation";

// // export const Newsletter: React.FC = () => {
// //   const [email, setEmail] = useState("");
// //   const [error, setError] = useState("");
// //   const [submitted, setSubmitted] = useState(false);
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!email) { setError("Please enter your email address."); return; }
// //     if (!isValidEmail(email)) { setError("Please enter a valid email address."); return; }
// //     setError("");
// //     setLoading(true);
// //     await new Promise((r) => setTimeout(r, 700));
// //     setLoading(false);
// //     setSubmitted(true);
// //   };

// //   return (
// //     <section className="py-14 bg-primary">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
// //           {/* Text */}
// //           <div className="max-w-md">
// //             <h2 className="text-xl font-semibold text-white mb-1.5">
// //               Stay informed, stay ahead
// //             </h2>
// //             <p className="text-sm text-white/70 leading-relaxed">
// //               Get early access to room deals, seasonal offers, and hotel updates — no spam, unsubscribe any time.
// //             </p>
// //           </div>

// //           {/* Form */}
// //           <div className="w-full max-w-md">
// //             {submitted ? (
// //               <div className="flex items-center gap-3 px-5 py-3.5 bg-white/10 rounded-md border border-white/20">
// //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-300 shrink-0" viewBox="0 0 20 20" fill="currentColor">
// //                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// //                 </svg>
// //                 <p className="text-sm text-white">
// //                   You're subscribed. Thanks for signing up!
// //                 </p>
// //               </div>
// //             ) : (
// //               <form onSubmit={handleSubmit} noValidate>
// //                 <div className="flex flex-col sm:flex-row gap-2">
// //                   <div className="flex-1">
// //                     <input
// //                       type="email"
// //                       value={email}
// //                       onChange={(e) => { setEmail(e.target.value); setError(""); }}
// //                       placeholder="Your email address"
// //                       className="w-full px-4 py-2.5 text-sm rounded bg-white text-primary-text placeholder:text-secondary-text focus:outline-none focus:ring-2 focus:ring-white/50"
// //                       aria-label="Email address"
// //                       aria-invalid={!!error}
// //                       aria-describedby={error ? "nl-error" : undefined}
// //                     />
// //                     {error && (
// //                       <p id="nl-error" className="text-xs text-red-300 mt-1.5">{error}</p>
// //                     )}
// //                   </div>
// //                   <button
// //                     type="submit"
// //                     disabled={loading}
// //                     className="px-5 py-2.5 text-sm font-semibold text-primary bg-white rounded hover:bg-gray-100 disabled:opacity-60 transition-colors whitespace-nowrap"
// //                   >
// //                     {loading ? "Subscribing…" : "Subscribe"}
// //                   </button>
// //                 </div>
// //                 <p className="text-xs text-white/50 mt-2">
// //                   By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
// //                 </p>
// //               </form>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Newsletter;
// import React, { useState } from "react";
// import { isValidEmail } from "../../../utils/validation";

// export const Newsletter: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) { setError("Please enter your email address."); return; }
//     if (!isValidEmail(email)) { setError("Please enter a valid email address."); return; }
//     setError("");
//     setLoading(true);
//     await new Promise((r) => setTimeout(r, 700));
//     setLoading(false);
//     setSubmitted(true);
//   };

//   return (
//     <section className="py-14 bg-primary">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
//           <div className="max-w-md">
//             <h2 className="text-xl font-semibold text-white mb-1.5">Stay informed, stay ahead</h2>
//             <p className="text-sm text-white/70 leading-relaxed">
//               Get early access to room deals, seasonal offers, and hotel updates — no spam, unsubscribe any time.
//             </p>
//           </div>
//           <div className="w-full max-w-md">
//             {submitted ? (
//               <div className="flex items-center gap-3 px-5 py-3.5 bg-white/10 rounded-md border border-white/20">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-300 shrink-0" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//                 <p className="text-sm text-white">You're subscribed. Thanks for signing up!</p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} noValidate>
//                 <div className="flex flex-col sm:flex-row gap-2">
//                   <div className="flex-1">
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => { setEmail(e.target.value); setError(""); }}
//                       placeholder="Your email address"
//                       className="w-full px-4 py-2.5 text-sm rounded bg-white text-primary-text placeholder:text-secondary-text focus:outline-none focus:ring-2 focus:ring-white/50"
//                     />
//                     {error && <p className="text-xs text-red-300 mt-1.5">{error}</p>}
//                   </div>
//                   <button type="submit" disabled={loading} className="px-5 py-2.5 text-sm font-semibold text-primary bg-white rounded hover:bg-gray-100 disabled:opacity-60 transition-colors whitespace-nowrap">
//                     {loading ? "Subscribing…" : "Subscribe"}
//                   </button>
//                 </div>
//                 <p className="text-xs text-white/50 mt-2">By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.</p>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Newsletter;

import React, { useState } from "react";
import { isValidEmail } from "../../../utils/validation";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { setError("Please enter your email address."); return; }
    if (!isValidEmail(email)) { setError("Please enter a valid email address."); return; }
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="py-14 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-xl font-semibold text-white mb-1.5">Stay informed, stay ahead</h2>
            <p className="text-sm text-white/70 leading-relaxed">
              Get early access to room deals, seasonal offers, and hotel updates — no spam, unsubscribe any time.
            </p>
          </div>
          <div className="w-full max-w-md">
            {submitted ? (
              <div className="flex items-center gap-3 px-5 py-3.5 bg-white/10 rounded-md border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-300 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-white">You're subscribed. Thanks for signing up!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(""); }}
                      placeholder="Your email address"
                      className="w-full px-4 py-2.5 text-sm rounded bg-white text-primary-text placeholder:text-secondary-text focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    {error && <p className="text-xs text-red-300 mt-1.5">{error}</p>}
                  </div>
                  <button type="submit" disabled={loading} className="px-5 py-2.5 text-sm font-semibold text-primary bg-white rounded hover:bg-gray-100 disabled:opacity-60 transition-colors whitespace-nowrap">
                    {loading ? "Subscribing…" : "Subscribe"}
                  </button>
                </div>
                <p className="text-xs text-white/50 mt-2">By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;