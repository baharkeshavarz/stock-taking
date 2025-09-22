import { axiosInstance } from "src/lib/axios";
import type {
  AddProductService,
  GetProductItemsByBarcodeService,
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
