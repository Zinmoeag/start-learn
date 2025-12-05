import { Link } from "@tanstack/react-router";
import { ShieldAlert } from "lucide-react";
import { DefaultInternalServerError } from ".";

const DefaultUnAuthorized = () => {
  console.log("DefaultUnAuthorized ==>");
  const hello = "mello";
  return (
    <DefaultInternalServerError>
      <div>
        <ShieldAlert className="w-16 h-16 text-red-500 mb-4" />

        <h1 className="text-4xl font-bold mb-2">401 - Unauthorized</h1>
        <p className="text-gray-600 mb-6 max-w-md">
          You don’t have permission to view this page. Please log in or contact an administrator.
        </p>

        <div className="flex gap-3">
          <Link to="/" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Go to Login
          </Link>

          <Link to="/" className="px-5 py-2 border border-gray-400 rounded-lg hover:bg-gray-100">
            Back Home
          </Link>
        </div>
      </div>
    </DefaultInternalServerError>
  );
};

export default DefaultUnAuthorized;
