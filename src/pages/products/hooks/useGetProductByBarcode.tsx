import { useQuery } from "@tanstack/react-query";
import { getProductBarcode } from "src/services/items";

const useGetProductByBarcode = (barcode: string) => {
  return useQuery({
    queryKey: ["GET_PRODUCT_BY_BARCODE", barcode],
    queryFn: async () => {
      const { data } = await getProductBarcode(barcode);

      return data;
    },
  });
};

export default useGetProductByBarcode;
