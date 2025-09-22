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
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMutation } from "@tanstack/react-query";
import { removeProduct } from "src/services/items";
import type { IProductItem } from "src/services/items/types";
import { useConfirm } from "material-ui-confirm";

type ProductsListProps = {
  barcode: string;
};

const ProductsList: FC<ProductsListProps> = ({ barcode }) => {
  const confirm = useConfirm();
  const { data, isPending, isError } = useGetItemsByBarcode(barcode);
  const { mutateAsync } = useMutation({
    mutationFn: removeProduct,
  });

  const handleDelete = async (item: IProductItem) => {
    console.log(item);
    confirm().then(async () => {
      await mutateAsync({
        payload: {
          stockTakingItemId: item.stockTakingId,
          operator: item.operator,
        },
      });
    });
  };

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

  if (!data?.data?.items || data?.data?.items.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <Typography>هیچ آیتمی برای این بارکد یافت نشد</Typography>
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

      {data.data.items.map((item: IProductItem) => (
        <Grid size={{ xs: 12 }} key={item.stockTakingId}>
          <Card variant="outlined">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body2" color="text.secondary">
                نام کالا: {item.name}
              </Typography>
              <IconButton
                onClick={() => handleDelete(item)}
                sx={{
                  bgcolor: "error.main",
                  color: "white",
                  "&:hover": { bgcolor: "error.dark" },
                }}
                size="small"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>

            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              <Typography variant="body2" color="text.secondary">
                ثبت شده توسط: {item.operator}
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2" color="text.secondary">
                  برند: {item.brand}
                </Typography>
                <Typography variant="button" color="text.secondary">
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
