import { useQuery } from "@tanstack/react-query";
import { getBarcode } from "src/services/products";

export interface UseGetBarcodeProps {
  barcode: string;
}

const useGetBarcode = ({ barcode }: UseGetBarcodeProps) => {
  return useQuery({
    queryKey: ["GET_BARCODE", barcode],
    queryFn: async () => {
      const { data } = await getBarcode({
        params: { barcode },
      });

      return data;
    },
    placeholderData: [],
  });
};

export default useGetBarcode;
