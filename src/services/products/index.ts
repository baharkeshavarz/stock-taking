import { axiosInstance } from "src/lib/axios";
import type { GetBarcodeService } from "./types";

const BASE_URL = "/stocktaking";

export const getBarcode: GetBarcodeService = ({ params }) => {
  return axiosInstance.get(`${BASE_URL}/items/get/barcode`, { params });
};
