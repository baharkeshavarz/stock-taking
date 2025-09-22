import { useNavigate, useParams } from "react-router";
import useGetBarcode from "./hooks/useGetBarcode";
import { DEFAULT_SCAN_CODE_ROUTE } from "src/constants";

const Products = () => {
  const navigate = useNavigate();

  const { barcode } = useParams();
  if (!barcode) {
    navigate(DEFAULT_SCAN_CODE_ROUTE);
  }

  const { data } = useGetBarcode({ barcode: barcode as string });
  console.log(data);

  return <div>Items List</div>;
};

export default Products;
