import type { Response } from "../types/common";

export interface IBarcode {
  barcode: string;
}

export interface GetBarcodeService {
  (args: { params: IBarcode }): Response;
}
