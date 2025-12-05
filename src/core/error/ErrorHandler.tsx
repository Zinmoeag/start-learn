import {
  DefaultAccessDeniedPage,
  DefaultInternalServerError,
  DefaultNotFound,
  DefaultUnAuthorized,
} from "./components";

import { errorKinds } from "./constants/errorKinds";
import type { Fallback, errorKindsType } from "./types";

interface ErrorHandlerProps {
  errorType: errorKindsType;
  fallback?: Fallback;
}

const ErrorHandler = ({ errorType, fallback }: ErrorHandlerProps) => {
  const fallbackComponent = fallback?.[errorType];
  const defaultFallbackComponent = fallback?.["default"];

  if (fallbackComponent) return fallbackComponent;
  if (defaultFallbackComponent) return defaultFallbackComponent;

  switch (errorType) {
    case errorKinds.accessDenied:
      return (
        <DefaultAccessDeniedPage
          title="Access Denied"
          message="You do not have permission to view this feature."
        />
      );
    case errorKinds.alreadyExist:
      return <div>Already Exist</div>;
    case errorKinds.badRequest:
      return <div>Bad Request</div>;
    case errorKinds.invalidCredential:
      return <div>Invalid Credential</div>;
    case errorKinds.invalidToken:
      return <div>Invalid Token</div>;
    case errorKinds.mailboxUnavailable:
      return <div>Mailbox Unavailable</div>;
    case errorKinds.notAuthorized:
      return <DefaultUnAuthorized />;
    case errorKinds.notFound:
      return <DefaultNotFound />;
    case errorKinds.oauthAccountAlreadyExist:
      return <div>OAuth Account Already Exist</div>;
    case errorKinds.unVerifyAccount:
      return <div>Unverify Account</div>;
    case errorKinds.validationFailed:
      return <div>Validation Failed</div>;
    default:
      return <DefaultInternalServerError />;
  }
};

export default ErrorHandler;
