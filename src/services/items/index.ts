import { axiosInstance } from "src/lib/axios";
import type {
  AddProductService,
  GetProductItemsByBarcodeService,
  RemoveProductService,
} from "./types";

const BASE_URL = "/g/shop/stocktaking";

export const getItemsByBarcode: GetProductItemsByBarcodeService = ({
  params,
}) => {
  return axiosInstance.get(`${BASE_URL}/items/get/barcode`, { params });
};

export const addProduct: AddProductService = ({ payload }) => {
  return axiosInstance.post(`${BASE_URL}/items/add`, payload);
};

export const removeProduct: RemoveProductService = ({ payload }) => {
  return axiosInstance.delete(`${BASE_URL}/items/remove`, { data: payload });
};
