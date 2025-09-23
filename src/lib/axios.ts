import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { DEFAULT_STOCK_KEEPER_ROUTE } from "src/constants";

const metadata = JSON.parse(localStorage.getItem("metadata") || "{}");
export const baseUrl = import.meta.env.DEV
  ? ""
  : import.meta.env.VITE_SHOP_GATEWAY_URL;

export const axiosInstance = axios.create({
  headers: {
    token: metadata?.key,
  },
  baseURL: baseUrl,
});

axiosInstance.defaults.timeout = 60000;

axiosInstance.interceptors.request.use(
  (config) => {
    if (config?.headers) {
      if (!config.headers["Content-Type"]) {
        config.headers["Content-Type"] = "application/json;charset=UTF-8";
      }
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(null, (error: AxiosError<any>) => {
  const status = error?.response?.status;

  if (status === 401 || status === 403) {
    localStorage.removeItem("token");
    window.location.href = DEFAULT_STOCK_KEEPER_ROUTE;
    return Promise.reject(error);
  }

  const expectedErrors = status && status >= 400 && status < 500;
  let message = "";

  if (!expectedErrors) {
    message = "مشکلی از سمت سرور رخ داده است";
  } else if (error.response?.data?.message) {
    message = error.response.data.message;
  } else if (error.response?.data?.errors?.length) {
    if (typeof error.response.data.errors.msg === "object") {
      message = error.response.data.errors.msg.join(",");
    } else {
      message = error.response.data.errors.msg;
    }
  } else if (error?.response?.data?.error?.message) {
    message = error?.response.data.error.message;
  }

  toast.error(message);

  return Promise.reject(error);
});

export const headers = {
  contentType: {
    formUrlEncoded: "application/x-www-form-urlencoded",
    formdata: "multipart/form-data",
    body: "application/json;charset=UTF-8",
  },
};

const httpServices = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
  patch: axiosInstance.patch,
  options: axiosInstance.options,
};

export default httpServices;
