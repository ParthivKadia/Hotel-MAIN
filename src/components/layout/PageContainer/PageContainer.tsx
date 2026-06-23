import React from "react";
import { clsx } from "../../../utils/helpers";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className,
  narrow = false,
}) => {
  return (
    <div
      className={clsx(
        "mx-auto px-4 sm:px-6 lg:px-8",
        narrow ? "max-w-4xl" : "max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageContainer;
