import { AlertTriangle } from "lucide-react";

interface InternalServerErrorProps {
  children?: React.ReactNode;
  maxWidth?: string;
  padded?: boolean;
}

const DefaultInternalServerError = ({
  children,
  maxWidth = "500px",
  padded = true,
}: InternalServerErrorProps) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 rounded-lg border border-gray-200">
      <div
        className={`w-full ${
          padded ? "p-8" : ""
        }`}
        style={{ maxWidth }}
      >
        {children ?? (
          <>
            <div className="flex flex-col items-center text-center space-y-4">
              <AlertTriangle className="w-12 h-12 text-red-500" />

              <h1 className="text-2xl font-bold text-gray-900">
                Internal Server Error
              </h1>

              <p className="text-gray-600 leading-relaxed">
                Something went wrong on our side.  
                Please try again later or contact support if the issue persists.
              </p>

              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
              >
                Retry
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DefaultInternalServerError;