import { Search } from "lucide-react";
import { Link } from "@tanstack/react-router";
import InternalServerComponent from "./DefaultInternalServerError";

interface NotFoundComponentProps {
  maxWidth?: string;
  padded?: boolean;
}

const DefaultNotFound = ({ maxWidth = "500px", padded = true }: NotFoundComponentProps) => {
  return (
    <InternalServerComponent maxWidth={maxWidth} padded={padded}>
        <div className="flex flex-col items-center text-center space-y-4">
          <Search className="w-12 h-12 text-yellow-500" />

          <h1 className="text-2xl font-bold text-gray-900">Page Not Found</h1>

          <p className="text-gray-600 leading-relaxed">
            The page you are looking for doesn’t exist or has been moved.
          </p>

          <div className="flex gap-4 mt-4">
            <Link to="/" className="px-6 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
              Go Home
            </Link>
          </div>
        </div>
    </InternalServerComponent>
  );
}

export default DefaultNotFound;