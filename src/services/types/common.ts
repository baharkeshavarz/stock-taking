import type { AxiosResponse } from "axios";

export type Response<T = unknown> = Promise<AxiosResponse<T>>;

export interface Basic<T = unknown> {
  message: boolean;
  data: T;
  detail?: string;
}
