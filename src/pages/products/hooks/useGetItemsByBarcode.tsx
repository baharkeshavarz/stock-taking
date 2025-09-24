import { useQuery } from "@tanstack/react-query";
import { getItemsByBarcode } from "src/services/items";

export const GET_PRODUCT_ITEMS_BY_BARCODE = "GET_PRODUCT_ITEMS_BY_BARCODE";

const useGetItemsByBarcode = (barcode: string) => {
  return useQuery({
    queryKey: [GET_PRODUCT_ITEMS_BY_BARCODE, barcode],
    queryFn: async () => {
      const { data } = await getItemsByBarcode({
        params: { barcode },
      });

      return data || [];
    },
  });
};

export default useGetItemsByBarcode;
