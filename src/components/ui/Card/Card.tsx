import React from "react";
import { clsx } from "../../../utils/helpers";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  border?: boolean;
  shadow?: boolean;
  hover?: boolean;
  as?: React.ElementType;
}

const paddingClasses = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

export const Card: React.FC<CardProps> = ({
  children,
  className,
  padding = "md",
  border = true,
  shadow = false,
  hover = false,
  as: Component = "div",
}) => {
  return (
    <Component
      className={clsx(
        "bg-white rounded-md",
        border ? "border border-border" : "",
        shadow ? "shadow-md" : "",
        hover ? "transition-shadow duration-200 hover:shadow-md cursor-pointer" : "",
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </Component>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={clsx("pb-3 mb-3 border-b border-border", className)}>
    {children}
  </div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={clsx("pt-3 mt-3 border-t border-border", className)}>
    {children}
  </div>
);

export default Card;
