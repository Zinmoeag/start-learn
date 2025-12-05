import type { ReactNode } from "react";
import type { HttpStatusMap, errorKinds } from "../constants/errorKinds";

type Payload = Record<number | string | symbol, Array<string>>;

interface errorPayload<T extends Payload> {
  errors?: T | {};
  message: string;
}

type HttpStatusMapType = (typeof HttpStatusMap)[keyof typeof HttpStatusMap];
type errorKindsType = (typeof errorKinds)[keyof typeof errorKinds];
type Fallback = Partial<Record<errorKindsType | "default", ReactNode>>;

export type { Payload, errorPayload, HttpStatusMapType, errorKindsType, Fallback };
