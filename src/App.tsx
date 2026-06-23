import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { BookingProvider } from "./context/BookingContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/globals.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <BookingProvider>
          <AppRoutes />
        </BookingProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
