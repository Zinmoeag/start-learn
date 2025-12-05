import { HttpStatusMap, errorKinds } from "../constants/errorKinds";
import type { errorKindsType } from "../types";

export const getErrorKindsFromHttpStatus = (status: number): errorKindsType => {
    const availableStatus = Object.keys(HttpStatusMap).map((key) => Number(key));
    if (!availableStatus.includes(status)) {
        return errorKinds.internalServerError;
    }
    return HttpStatusMap[status as keyof typeof HttpStatusMap];
};

export const isErrorKinds = (message: any): message is errorKindsType => {
    return Object.values(errorKinds).includes(message);
};