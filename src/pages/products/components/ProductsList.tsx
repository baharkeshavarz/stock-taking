import { type FC } from "react";
import useGetItemsByBarcode from "../hooks/useGetItemsByBarcode";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Chip,
} from "@mui/material";

type ProductsListProps = {
  barcode: string;
};

const ProductsList: FC<ProductsListProps> = ({ barcode }) => {
  const { data, isPending, isError } = useGetItemsByBarcode(barcode);
  console.log(data);

  if (isPending) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <Typography color="error">خطا در دریافت اطلاعات</Typography>
      </Box>
    );
  }

  if (!data?.data?.items || data?.data?.items?.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <Typography>هیچ آیتمی برای این بارکد یافت نشد</Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <Typography variant="body2" gutterBottom>
          <Chip
            size="medium"
            color="success"
            label={`تعداد کالاهای ثبت شده: ${data?.data?.totalQuantity}`}
          />
        </Typography>
      </Grid>
      {data?.data?.items?.map((item: any, index: number) => (
        <Grid size={{ xs: 12 }} key={index}>
          <Card variant="outlined" sx={{ borderRadius: 1 }}>
            <CardContent sx={{ gap: 2 }}>
              <Typography variant="body2" color="text.secondary">
                ثبت شده توسط: {item.operator}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                نام کالا: {item.name}
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2" color="text.secondary">
                  برند: {item.brand}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  قیمت: {item.price.toLocaleString()} ریال
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
