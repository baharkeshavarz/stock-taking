import { Grid, Card, CardContent, Box, Skeleton } from "@mui/material";

const ProductsListSkeleton = () => {
  return (
    <Grid container spacing={1}>
      <Grid size={{ xs: 12 }}>
        <Skeleton
          variant="rectangular"
          width="60%"
          height={32}
          sx={{ borderRadius: 2 }}
        />
      </Grid>

      {[1, 2, 3].map((index) => (
        <Grid size={{ xs: 12 }} key={index}>
          <Card variant="outlined">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={2}
            >
              <Skeleton variant="text" width="40%" height={24} />
              <Skeleton variant="circular" width={32} height={32} />
            </Box>

            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              <Skeleton variant="text" width="60%" height={20} />
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Skeleton variant="text" width="30%" height={20} />
                <Skeleton variant="text" width="35%" height={20} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsListSkeleton;
