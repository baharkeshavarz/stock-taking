import type { Response } from "../types/common";

export interface IBrand {
  id: number;
  code: number;
  namePersian: string;
  nameEnglish: string;
  isActive: boolean;
  logoUrl: string;
}

export interface ICategory {
  id: number;
  code: number;
  namePersian: string;
  nameEnglish: string;
  level: number;
  isActive: boolean;
  description: string;
  parentId: number;
  categoryPhotos: string[];
}

export interface IProduct {
  id: number;
  barcode: string;
  isActive: boolean;
  namePersian: string;
  nameEnglish: string | null;
  description: string | null;
  brand: IBrand;
  category: ICategory;
  isSubsidy: boolean;
  subsidyType: string | null;
  lastPrice: number;
  productPhotos: string[];
}

export interface GetProductByBarcodeService {
  (barcode: string): Response<IProduct>;
}
