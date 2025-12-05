import { StatusCode } from "@/core/constants/HttpStatus";

export const errorKinds = {
    accessDenied: 'accessDenied',
    alreadyExist: 'alreadyExist',
    badRequest: 'badRequest',
    forbidden: 'forbidden',
    internalServerError: 'internalErrorServer',
    invalidCredential: 'invalidCredential',
    invalidToken: 'invalidToken',
    mailboxUnavailable: 'mailboxUnavailable',
    notAuthorized: 'notAuthorized',
    notFound: 'notFound',
    oauthAccountAlreadyExist: 'oauthAccountAlreadyExist',
    unVerifyAccount: 'unVerifyAccount',
    validationFailed: 'validationFailed',
  } as const;

  export const HttpStatusMap = {
    [StatusCode.Forbidden]: errorKinds.accessDenied,
    [StatusCode.Conflict]: errorKinds.alreadyExist,
    [StatusCode.BadRequest]: errorKinds.badRequest,
    [StatusCode.Forbidden]: errorKinds.forbidden,
    [StatusCode.InternalServerError]: errorKinds.internalServerError,
    [StatusCode.UnprocessableEntity]: errorKinds.invalidCredential,
    [StatusCode.Forbidden]: errorKinds.invalidToken,
    [StatusCode.MailboxUnavailable]: errorKinds.mailboxUnavailable,
    [StatusCode.Unauthorized]: errorKinds.notAuthorized,
    [StatusCode.NotFound]: errorKinds.notFound,
    [StatusCode.Conflict]: errorKinds.oauthAccountAlreadyExist,
    [StatusCode.Forbidden]: errorKinds.unVerifyAccount,
    [StatusCode.UnprocessableEntity]: errorKinds.validationFailed,
  } as const;