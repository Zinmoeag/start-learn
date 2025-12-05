import React from "react";
import InternalServerComponent from "./DefaultInternalServerError";

interface AccessDeniedPageProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  showHome?: boolean;
  homeHref?: string;
}

const DefaultAccessDeniedPage = ({
  title = "Access Denied",
  message = "You do not have permission to view this page.",
  onRetry,
  showHome = true,
  homeHref = "/",
}: AccessDeniedPageProps) => {
  return (
    <InternalServerComponent maxWidth="480px" padded>
      <div className="flex flex-col items-center gap-4 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z" clipRule="evenodd" />
        </svg>

        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        <p className="text-gray-600">{message}</p>

        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 rounded-lg border border-transparent text-sm font-medium shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Retry
            </button>
          )}

          {showHome && (
            <a
              href={homeHref}
              className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Home
            </a>
          )}
        </div>
      </div>
    </InternalServerComponent>
  );
}

export default DefaultAccessDeniedPage;