import { axiosInstance } from "src/lib/axios";
import type { GetProductByBarcodeService } from "./types";

const BASE_URL = "/g/shop/productbank/services";

export const getProductBarcode: GetProductByBarcodeService = (barcode) => {
  return axiosInstance.get(`${BASE_URL}/product/GetByBarcode/${barcode}`);
};
