import { errorKinds } from "../constants/errorKinds";
import type { Payload, errorKindsType, errorPayload } from "../types";
import { StatusCode } from "@/core/constants/HttpStatus";

export abstract class ErrorBase extends Error {
  public statusCode: number = StatusCode.InternalServerError;
  constructor(
    public error: errorKindsType,
    public message: string,
    public payload?: Payload | {},
    public service?: string
  ) {
    super();
    this.statusCode = this.getStatus();
    (Error as any).captureStackTrace(this, this.constructor);
  }

  errorPayload(payload?: Payload): errorPayload<Payload | {}> {
    return {
      errors: payload ?? {},
      message: this.message,
    };
  }

  getStatus() {
    switch (this.error) {
      case errorKinds.accessDenied:
        this.statusCode = StatusCode.Forbidden;
        break;
      case errorKinds.alreadyExist:
        this.statusCode = StatusCode.Conflict;
        break;
      case errorKinds.badRequest:
        this.statusCode = StatusCode.BadRequest;
        break;
      case errorKinds.forbidden:
        this.statusCode = StatusCode.Forbidden;
        break;
      case errorKinds.internalServerError:
        this.statusCode = StatusCode.InternalServerError;
        break;
      case errorKinds.invalidCredential:
        this.statusCode = StatusCode.UnprocessableEntity;
        break;
      case errorKinds.invalidToken:
        this.statusCode = StatusCode.Forbidden;
        break;
      case errorKinds.mailboxUnavailable:
        this.statusCode = StatusCode.MailboxUnavailable;
        break;
      case errorKinds.notAuthorized:
        this.statusCode = StatusCode.Unauthorized;
        break;
      case errorKinds.notFound:
        this.statusCode = StatusCode.NotFound;
        break;
      case errorKinds.oauthAccountAlreadyExist:
        this.statusCode = StatusCode.Conflict;
        break;
      case errorKinds.unVerifyAccount:
        this.statusCode = StatusCode.Forbidden;
        break;
      case errorKinds.validationFailed:
        this.statusCode = StatusCode.UnprocessableEntity;
        break;
    }
    return this.statusCode;
  }
}
