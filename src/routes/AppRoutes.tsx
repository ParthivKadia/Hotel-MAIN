import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BookingLayout from "../layouts/BookingLayout";
import { ROUTES } from "../constants/routes";

// Pages
import HomePage from "../pages/Home/HomePage";
import RoomsPage from "../pages/Rooms/RoomsPage";
import RoomDetailsPage from "../pages/RoomDetails/RoomDetailsPage";
import BookingPage from "../pages/Booking/BookingPage";
import GalleryPage from "../pages/Gallery/GalleryPage";
import AboutPage from "../pages/About/AboutPage";
import ContactPage from "../pages/Contact/ContactPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ROOMS} element={<RoomsPage />} />
        <Route path={ROUTES.ROOM_DETAILS} element={<RoomDetailsPage />} />
        <Route path={ROUTES.GALLERY} element={<GalleryPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route element={<BookingLayout />}>
        <Route path={ROUTES.BOOKING} element={<BookingPage />} />
        
      </Route>
    </Routes>
  );
};

export default AppRoutes;
