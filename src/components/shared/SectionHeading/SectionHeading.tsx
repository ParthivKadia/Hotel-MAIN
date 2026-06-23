import React from "react";
import { clsx } from "../../../utils/helpers";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = "left",
  className,
}) => {
  return (
    <div
      className={clsx(
        "mb-8",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-primary-text leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-secondary-text text-base max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
