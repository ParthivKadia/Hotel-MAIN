import React from "react";
import { SITE_CONFIG } from "../../../constants/siteConfig";

export const MapPreview: React.FC = () => (
  <div className="w-full h-64 bg-section-bg border border-border rounded-md flex items-center justify-center">
    <div className="text-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-text mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <p className="text-sm text-secondary-text">{SITE_CONFIG.address}</p>
    </div>
  </div>
);

export default MapPreview;
