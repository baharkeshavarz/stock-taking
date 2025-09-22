import type { AxiosResponse } from "axios";

export type Response<T = unknown> = Promise<AxiosResponse<T>>;

export interface Basic<T = unknown> {
  message: boolean;
  data: T;
  error?: string;
  succeeded?: boolean;
}

export interface List<T> {
  data: T[];
  succeeded: boolean;
  error: boolean;
}
