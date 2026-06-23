import React from "react";
import { clsx } from "../../../utils/helpers";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  hint,
  fullWidth = true,
  className,
  id,
  ...props
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={clsx("flex flex-col gap-1", fullWidth ? "w-full" : "")}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-primary-text"
        >
          {label}
          {props.required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          "px-3 py-2 text-sm rounded border bg-white text-primary-text placeholder:text-secondary-text",
          "transition-colors duration-150",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 focus:border-primary",
          error
            ? "border-red-400 focus:ring-red-400"
            : "border-border hover:border-gray-400",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
      {hint && !error && <p className="text-xs text-secondary-text">{hint}</p>}
    </div>
  );
};

export default Input;
