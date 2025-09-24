import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { DEFAULT_SCAN_CODE_ROUTE } from "src/constants";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import LoadingComponent from "src/components/common/LoadingComponent";
import ProductNotFound from "./components/ProductNotFound";
import ProductPhotos from "./components/ProductPhotos";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { CustomTextField } from "src/components/Fields";
import type { IAddProduct } from "src/services/items/types";
import ButtonWithLoading from "src/components/common/ButtonWithLoading";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "src/services/items";
import { HttpStatusCode } from "axios";
import toast from "react-hot-toast";
import { getProductBarcode } from "src/services/products";
import LinearFieldset from "src/components/common/LinearFieldset";
import ProductsList from "./components/ProductsList";
import ProductsPageSkeleton from "./components/ProductsPageSkeleton";
import { GET_PRODUCT_ITEMS_BY_BARCODE } from "./hooks/useGetItemsByBarcode";

type StockProductPayload = Omit<IAddProduct, "operator">;

const Products = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { barcode } = useParams();

  const { data: productInfo, isPending } = useQuery({
    queryKey: ["GET_PRODUCT_BY_BARCODE", barcode],
    queryFn: async () => {
      const { data } = await getProductBarcode(barcode!);
      reset({
        barcode: data.barcode,
        name: data.namePersian,
        brand: data.brand?.namePersian,
      });
      return data;
    },
  });

  const labels: Record<keyof StockProductPayload, string> = {
    name: "نام کالا",
    barcode: "بارکد کالا",
    brand: "ّبرند کالا",
    price: "قیمت کالا",
    quantity: "تعداد کالا",
  };

  const resolveSchema: yup.ObjectSchema<StockProductPayload> = yup.object({
    barcode: yup.string().required().label(labels.barcode),
    name: yup.string().required().label(labels.name),
    brand: yup.string().required().label(labels.brand),
    price: yup.number().required().label(labels.price),
    quantity: yup.number().required().label(labels.quantity),
  });

  const methods = useForm<StockProductPayload>({
    resolver: yupResolver(resolveSchema),
  });

  const { handleSubmit, reset } = methods;
  const { mutateAsync, isPending: isPendingInsert } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [GET_PRODUCT_ITEMS_BY_BARCODE],
      });
    },
  });

  const onSubmit: SubmitHandler<StockProductPayload> = async (payload) => {
    const metadata = JSON.parse(localStorage.getItem("metadata") || "{}");
    const newPayload = {
      operator: metadata?.name,
      barcode,
      ...payload,
    };

    const { data, status } = await mutateAsync({ payload: newPayload });
    if (status === HttpStatusCode.Ok && data?.succeeded) {
      toast.success(
        `کالای شما با کد ${(data?.data as any)?.stockTakingItemId} ثبت شد`
      );
      methods.reset();
    }
  };

  useEffect(() => {
    if (!barcode) {
      navigate(DEFAULT_SCAN_CODE_ROUTE, { replace: true });
    }
  }, [barcode, navigate]);

  if (isPending) {
    return <ProductsPageSkeleton />;
  }

  if (isPendingInsert) {
    return <LoadingComponent />;
  }

  if (!productInfo) {
    return <ProductNotFound />;
  }

  return (
    <Stack spacing={1}>
      <ProductPhotos photos={productInfo?.productPhotos} />
      <Card variant="outlined" sx={{ borderRadius: 1.5 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="subtitle2">بارکد کالا:</Typography>
                <Typography variant="body2" fontWeight={600}>
                  {productInfo.barcode}
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="subtitle2">نام کالا:</Typography>
                <Typography variant="body2">
                  {productInfo.namePersian}
                </Typography>
              </Box>
            </Grid>
            {productInfo.nameEnglish && (
              <Grid size={{ xs: 12 }}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography variant="subtitle2">
                    :نام کالا (انگلیسی):
                  </Typography>
                  <Typography variant="body2">
                    {productInfo.nameEnglish}
                  </Typography>
                </Box>
              </Grid>
            )}
            <Grid size={{ xs: 12 }}>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="subtitle2"> دسته بندی/برند:</Typography>
                <Typography variant="body2">
                  {productInfo?.category?.namePersian}/{" "}
                  {productInfo?.brand?.namePersian}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ borderRadius: 1.5 }}>
        <CardContent>
          <LinearFieldset title="ثبت مشخصات کالا" />
          <FormProvider {...methods}>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              my={2}
              width="100%"
            >
              <Grid container spacing={3}>
                <Grid size={{ xs: 12 }}>
                  <CustomTextField label={labels.name} name="name" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <CustomTextField label={labels.brand} name="brand" />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <CustomTextField
                    label={labels.price}
                    name="price"
                    type="number"
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <CustomTextField
                    label={labels.quantity}
                    name="quantity"
                    type="number"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <ButtonWithLoading
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    loading={isPendingInsert}
                  >
                    ثبت کالا
                  </ButtonWithLoading>
                </Grid>
              </Grid>
            </Box>
          </FormProvider>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ borderRadius: 1.5 }}>
        <CardContent>
          <ProductsList barcode={barcode as string} />
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Products;
