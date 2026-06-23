import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { SITE_CONFIG } from "../../../constants/siteConfig";
import { PageContainer } from "../PageContainer";

const footerLinks = {
  Hotel: [
    { label: "About Us", href: ROUTES.ABOUT },
    { label: "Gallery", href: ROUTES.GALLERY },
    { label: "Contact", href: ROUTES.CONTACT },
  ],
  Rooms: [
    { label: "All Rooms", href: ROUTES.ROOMS },
    { label: "Standard Rooms", href: `${ROUTES.ROOMS}?type=standard` },
    { label: "Deluxe Rooms", href: `${ROUTES.ROOMS}?type=deluxe` },
    { label: "Suites", href: `${ROUTES.ROOMS}?type=suite` },
  ],
  Policies: [
    { label: "Cancellation Policy", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
};

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-section-bg border-t border-border mt-auto">
      <PageContainer>
        {/* Main grid */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to={ROUTES.HOME} className="flex flex-col leading-none mb-4">
              <span className="text-base font-semibold text-primary-text">
                {SITE_CONFIG.name}
              </span>
              <span className="text-xs text-secondary-text tracking-widest uppercase">
                {SITE_CONFIG.tagline}
              </span>
            </Link>
            <address className="not-italic text-sm text-secondary-text leading-relaxed">
              {SITE_CONFIG.address}
            </address>
            <div className="mt-4 flex flex-col gap-1">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="text-sm text-secondary-text hover:text-primary-text transition-colors"
              >
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-sm text-secondary-text hover:text-primary-text transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold text-primary-text uppercase tracking-wider mb-4">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-secondary-text hover:text-primary-text transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-secondary-text">
            &copy; {year} {SITE_CONFIG.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {Object.entries(SITE_CONFIG.socialLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-secondary-text hover:text-primary-text capitalize transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </PageContainer>
    </footer>
  );
};

export default Footer;
