import { errorKinds } from '../constants/errorKinds';
import { ErrorBase } from './error.base';
import type { Payload, errorKindsType } from '../types';

class AppError extends ErrorBase {
  constructor(
    error: errorKindsType,
    message: string,
    payload?: Payload,
    service?: string
  ) {
    super(error, message, payload, service);
  }

  static new(
    error: errorKindsType = errorKinds.internalServerError,
    payload?: Payload,
    service?: string
  ) {
    return new AppError(error, error, payload, service);
  }
}

export default AppError;
