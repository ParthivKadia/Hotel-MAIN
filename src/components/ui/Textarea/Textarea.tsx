import React from "react";
import { clsx } from "../../../utils/helpers";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  hint,
  fullWidth = true,
  className,
  id,
  ...props
}) => {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className={clsx("flex flex-col gap-1", fullWidth ? "w-full" : "")}>
      {label && (
        <label htmlFor={textareaId} className="text-sm font-medium text-primary-text">
          {label}
          {props.required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={4}
        className={clsx(
          "px-3 py-2 text-sm rounded border bg-white text-primary-text placeholder:text-secondary-text resize-vertical",
          "transition-colors duration-150",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
          error ? "border-red-400" : "border-border hover:border-gray-400",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
      {hint && !error && <p className="text-xs text-secondary-text">{hint}</p>}
    </div>
  );
};

export default Textarea;
