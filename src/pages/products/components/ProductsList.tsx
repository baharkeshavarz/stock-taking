import { Box, Chip, Grid, Typography } from "@mui/material";
import { type FC } from "react";
import type { IProductItem } from "src/services/items/types";
import useGetItemsByBarcode from "../hooks/useGetItemsByBarcode";

import ProductItem from "./ProductItem";
import ProductsListSkeleton from "./ProductsListSkeleton";

type ProductsListProps = {
  barcode: string;
};

const ProductsList: FC<ProductsListProps> = ({ barcode }) => {
  const { data, isPending, isError } = useGetItemsByBarcode(barcode);
  const itemsList =
    data?.data?.items.filter(
      (item: IProductItem) => item.status === "Active"
    ) || [];

  if (isPending) {
    return <ProductsListSkeleton />;
  }

  if (isError) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <Typography color="error">خطا در دریافت اطلاعات</Typography>
      </Box>
    );
  }

  if (!itemsList || itemsList.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <Typography variant="body1" color="text.primary">
          هیچ آیتمی برای این بارکد یافت نشد!
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={1}>
      <Grid size={{ xs: 12 }}>
        <Chip
          size="medium"
          color="success"
          label={`تعداد کالاهای ثبت شده: ${data?.data?.totalQuantity}`}
        />
      </Grid>

      {itemsList.map((item: IProductItem) => (
        <Grid size={{ xs: 12 }} key={item.stockTakingId}>
          <ProductItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
