import React from "react";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Something went wrong",
  description = "An error occurred. Please try again.",
  onRetry,
}) => (
  <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    </div>
    <h3 className="text-base font-medium text-primary-text mb-1">{title}</h3>
    <p className="text-sm text-secondary-text max-w-xs">{description}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="mt-4 px-4 py-2 text-sm font-medium text-primary border border-primary rounded hover:bg-blue-50 transition-colors"
      >
        Try again
      </button>
    )}
  </div>
);

export default ErrorState;
