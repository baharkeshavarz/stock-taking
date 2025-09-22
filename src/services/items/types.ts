import type { Basic, List, Response } from "../types/common";

export interface IBarcode {
  barcode: string;
}

export interface IAddProduct {
  operator?: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  barcode?: string;
}

export interface IProductItem {
  stockTakingItemId: number;
  stockTakingId: number;
  status: string;
  createTime: string;
  operator: string;
  shopId: number;
  name: string;
  barcode: string;
  productCode: string;
  brand: string;
  photoUrl: string;
  price: number;
  purchasedPrice: number;
  manufacturerPrice: number;
  productionDate: string;
  expirationDate: string;
  description: string;
  quantity: number;
  boxQuantity: number;
  packetQuantity: number;
}
export interface IProductItems {
  data: any;
  items: IProductItem[];
  totalQuantity: number;
  currentInventory: string;
}

export interface IProductItemRemovePayload {
  stockTakingItemId: number;
  operator: string;
}

export interface GetProductItemsByBarcodeService {
  (args: { params: IBarcode }): Response<IProductItems>;
}

export interface AddProductService {
  (args: { payload: IAddProduct }): Response<Basic>;
}

export interface RemoveProductService {
  (args: { payload: IProductItemRemovePayload }): Response<Basic>;
}
