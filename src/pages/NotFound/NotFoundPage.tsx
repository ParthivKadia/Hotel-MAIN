import React from "react";
import { PageContainer } from "../../components/layout/PageContainer";

const NotFoundPage: React.FC = () => {
  return (
    <PageContainer>
      <div className="py-20 text-center">
        <p className="text-secondary-text text-sm">404 — Page Not Found — coming soon</p>
      </div>
    </PageContainer>
  );
};

export default NotFoundPage;
