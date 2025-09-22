import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { DEFAULT_LOGO_PATH, DEFAULT_SCAN_CODE_ROUTE } from "src/constants";
import useGetProductByBarcode from "./hooks/useGetProductByBarcode";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import LoadingComponent from "src/components/common/LoadingComponent";
import ProductNotFound from "./components/ProductNotFound";
import ProductPhotos from "./components/ProductPhotos";

const Products = () => {
  const navigate = useNavigate();
  const { barcode } = useParams();

  useEffect(() => {
    if (!barcode) {
      navigate(DEFAULT_SCAN_CODE_ROUTE, { replace: true });
    }
  }, [barcode, navigate]);

  const { data, isPending } = useGetProductByBarcode(barcode as string);

  if (isPending) {
    return <LoadingComponent />;
  }

  if (!data) {
    return <ProductNotFound />;
  }

  return (
    <Stack spacing={2}>
      <Card variant="outlined">
        <CardContent>
          <ProductPhotos
            photos={[
              DEFAULT_LOGO_PATH,
              "https://himart.ir/wp-content/uploads/2021/10/fish-printer.png",
              "https://demosoledad.pencidesign.net/soledad-digital-startup-multipurpose/wp-content/uploads/sites/87/2020/01/1.png",
              "https://himart.ir/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-10-12-at-9.57-peg07dzlkol6cvje2wi9omqrwnjfe5y3hdqa855lxo.jpg",
              "https://himart.ir/wp-content/uploads/2022/09/IMG_2679-scaled.jpg",
            ]}
          />
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="subtitle2">بارکد کالا:</Typography>
                <Typography variant="body2">{data.barcode}</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="subtitle2">نام کالا:</Typography>
                <Typography variant="body2">{data.namePersian}</Typography>
              </Box>
            </Grid>
            {data.nameEnglish && (
              <Grid size={{ xs: 12 }}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography variant="subtitle2">
                    نام کالا (انگلیسی):
                  </Typography>
                  <Typography variant="body2">{data.nameEnglish}</Typography>
                </Box>
              </Grid>
            )}
            <Grid size={{ xs: 12 }}>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="subtitle2"> دسته بندی:</Typography>
                <Typography variant="body2">
                  {data?.category?.namePersian}
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="subtitle2">نام برند:</Typography>
                <Typography variant="body2">
                  {data?.brand?.namePersian}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Products;
