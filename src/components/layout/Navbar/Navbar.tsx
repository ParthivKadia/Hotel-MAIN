import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { SITE_CONFIG } from "../../../constants/siteConfig";
import { PageContainer } from "../PageContainer";
import { MobileMenu } from "../MobileMenu";
import { clsx } from "../../../utils/helpers";

const navLinks = [
  { label: "Rooms", href: ROUTES.ROOMS },
  { label: "Gallery", href: ROUTES.GALLERY },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Contact", href: ROUTES.CONTACT },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isTransparent
            ? "bg-transparent"
            : "bg-white border-b border-border shadow-sm"
        )}
      >
        <PageContainer>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to={ROUTES.HOME} className="flex flex-col leading-none">
              <span
                className={clsx(
                  "text-lg font-semibold tracking-tight transition-colors duration-300",
                  isTransparent ? "text-white" : "text-primary-text"
                )}
              >
                {SITE_CONFIG.name}
              </span>

              <span
                className={clsx(
                  "text-xs font-normal tracking-widest uppercase transition-colors duration-300",
                  isTransparent ? "text-white/70" : "text-secondary-text"
                )}
              >
                {SITE_CONFIG.tagline}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    clsx(
                      "px-3 py-2 text-sm rounded transition-colors duration-150",
                      isActive && !isTransparent
                        ? "text-primary font-medium"
                        : isTransparent
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-secondary-text hover:text-primary-text hover:bg-gray-50"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className={clsx(
                  "text-sm transition-colors duration-300",
                  isTransparent
                    ? "text-white/80 hover:text-white"
                    : "text-secondary-text hover:text-primary-text"
                )}
              >
                {SITE_CONFIG.phone}
              </a>

              <Link
                to={ROUTES.ROOMS}
                className={clsx(
                  "px-4 py-2 text-sm font-medium rounded transition-colors duration-150",
                  isTransparent
                    ? "bg-white text-primary-text hover:bg-gray-100"
                    : "bg-primary text-white hover:bg-primary-hover"
                )}
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={clsx(
                "md:hidden flex items-center justify-center w-9 h-9 rounded transition-colors",
                isTransparent ? "hover:bg-white/10" : "hover:bg-gray-100"
              )}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={clsx(
                  "h-5 w-5 transition-colors duration-300",
                  isTransparent ? "text-white" : "text-primary-text"
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </PageContainer>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export default Navbar;