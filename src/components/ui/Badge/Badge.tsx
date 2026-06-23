import React from "react";
import { clsx } from "../../../utils/helpers";

type BadgeVariant = "default" | "primary" | "success" | "warning" | "danger" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-secondary-text",
  primary: "bg-blue-100 text-primary",
  success: "bg-green-100 text-success",
  warning: "bg-yellow-100 text-yellow-700",
  danger: "bg-red-100 text-red-600",
  outline: "bg-transparent border border-border text-secondary-text",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
}) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
