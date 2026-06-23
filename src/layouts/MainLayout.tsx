// import React from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import { Navbar } from "../components/layout/Navbar";
// import { Footer } from "../components/layout/Footer";

// const MainLayout: React.FC = () => {
//   const location = useLocation();
//   const isHome = location.pathname === "/";

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       {/* On home, no pt-16 — Hero is full-screen with its own padding */}
//       <main className={`flex-1 ${isHome ? "" : "pt-16"}`}>
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

const MainLayout: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-1 ${isHome ? "" : "pt-16"}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;