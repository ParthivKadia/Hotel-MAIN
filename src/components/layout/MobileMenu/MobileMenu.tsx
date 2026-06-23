import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { SITE_CONFIG } from "../../../constants/siteConfig";
import { clsx } from "../../../utils/helpers";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/30"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={clsx(
          "fixed top-0 right-0 bottom-0 z-50 w-72 bg-white flex flex-col",
          "shadow-lg"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-border">
          <Link to={ROUTES.HOME} onClick={onClose} className="flex flex-col leading-none">
            <span className="text-base font-semibold text-primary-text">{SITE_CONFIG.name}</span>
            <span className="text-xs text-secondary-text tracking-widest uppercase">
              {SITE_CONFIG.tagline}
            </span>
          </Link>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary-text"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={onClose}
              className={({ isActive }) =>
                clsx(
                  "px-3 py-2.5 text-sm rounded transition-colors duration-150",
                  isActive
                    ? "bg-blue-50 text-primary font-medium"
                    : "text-primary-text hover:bg-gray-50"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-border flex flex-col gap-3">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="text-sm text-secondary-text"
          >
            {SITE_CONFIG.phone}
          </a>
          <Link
            to={ROUTES.ROOMS}
            onClick={onClose}
            className="w-full flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-primary rounded hover:bg-primary-hover transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
