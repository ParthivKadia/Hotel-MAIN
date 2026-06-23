import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { SITE_CONFIG } from "../constants/siteConfig";
import { PageContainer } from "../components/layout/PageContainer";

const BookingLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-section-bg">
      {/* Minimal header */}
      <header className="bg-white border-b border-border">
        <PageContainer>
          <div className="flex items-center justify-between h-14">
            <Link to={ROUTES.HOME} className="flex flex-col leading-none">
              <span className="text-base font-semibold text-primary-text">
                {SITE_CONFIG.name}
              </span>
              <span className="text-xs text-secondary-text tracking-widest uppercase">
                {SITE_CONFIG.tagline}
              </span>
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-sm text-secondary-text hover:text-primary-text transition-colors"
            >
              Need help? {SITE_CONFIG.phone}
            </a>
          </div>
        </PageContainer>
      </header>

      <main className="flex-1 py-8">
        <Outlet />
      </main>

      <footer className="py-4 border-t border-border bg-white">
        <PageContainer>
          <p className="text-xs text-secondary-text text-center">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.fullName}. All rights reserved.
          </p>
        </PageContainer>
      </footer>
    </div>
  );
};

export default BookingLayout;
