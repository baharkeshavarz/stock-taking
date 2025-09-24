import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpStatusCode } from "axios";
import { useConfirm } from "material-ui-confirm";
import { type FC } from "react";
import toast from "react-hot-toast";
import { removeProduct } from "src/services/items";
import type { IProductItem } from "src/services/items/types";
import { GET_PRODUCT_ITEMS_BY_BARCODE } from "../hooks/useGetItemsByBarcode";

type ProductItemProps = {
  item: IProductItem;
};

const ProductItem: FC<ProductItemProps> = ({ item }) => {
  const confirm = useConfirm();
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: removeProduct,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [GET_PRODUCT_ITEMS_BY_BARCODE],
      });
    },
  });

  const handleDelete = async (item: IProductItem) => {
    confirm().then(async () => {
      const { data, status } = await mutateAsync({
        payload: {
          stockTakingItemId: item.stockTakingItemId,
          operator: item.operator,
        },
      });

      if (status === HttpStatusCode.Ok && data?.succeeded) {
        toast.success(`کالای شما با کد ${item.stockTakingItemId} حذف شد`);
      }
    });
  };

  return (
    <Card variant="outlined">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1}>
          <Chip size="small" color="primary" label={item.quantity} />
          <Typography variant="body2" color="text.secondary">
            نام کالا: {item.name}
          </Typography>
        </Stack>

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

      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="body2" color="text.secondary">
          ثبت شده توسط: {item.operator}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="text.secondary">
            برند: {item.brand}
          </Typography>
          <Typography variant="button" color="text.secondary">
            قیمت: {item.price.toLocaleString()} ریال
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
