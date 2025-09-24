import { Stack, Card, CardContent, Grid, Box, Skeleton } from "@mui/material";

const ProductsPageSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Card variant="outlined" sx={{ borderRadius: 1.5 }}>
        <CardContent>
          <Box display="flex" justifyContent="center" alignItems="center" p={2}>
            <Skeleton
              variant="rectangular"
              width={200}
              height={200}
              sx={{ borderRadius: 2 }}
            />
          </Box>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ borderRadius: 1.5 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <Box display="flex" alignItems="center" gap={1}>
                <Skeleton variant="text" width="20%" height={24} />
                <Skeleton variant="text" width="40%" height={24} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box display="flex" alignItems="center" gap={1}>
                <Skeleton variant="text" width="20%" height={24} />
                <Skeleton variant="text" width="50%" height={24} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box display="flex" alignItems="center" gap={1}>
                <Skeleton variant="text" width="20%" height={24} />
                <Skeleton variant="text" width="45%" height={24} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box display="flex" alignItems="center" gap={1}>
                <Skeleton variant="text" width="25%" height={24} />
                <Skeleton variant="text" width="55%" height={24} />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Product Details Form Skeleton */}
      <Card variant="outlined" sx={{ borderRadius: 1.5 }}>
        <CardContent>
          <Skeleton variant="text" width="100%" height={44} />
          <Grid container spacing={3}>
            {/* Name field skeleton */}
            <Grid size={{ xs: 12 }}>
              <Box display="flex" alignItems="center" width="100%" gap={1}>
                <Skeleton variant="text" width="20%" height={56} />
                <Skeleton
                  variant="rectangular"
                  width="80%"
                  height={56}
                  sx={{ borderRadius: 1 }}
                />
              </Box>
            </Grid>

            {/* Brand field skeleton */}
            <Grid size={{ xs: 12 }}>
              <Box sx={{ mb: 1 }}>
                <Skeleton variant="text" width="25%" height={20} />
              </Box>
              <Skeleton
                variant="rectangular"
                height={56}
                sx={{ borderRadius: 1 }}
              />
            </Grid>

            {/* Price field skeleton */}
            <Grid size={{ xs: 6 }}>
              <Box sx={{ mb: 1 }}>
                <Skeleton variant="text" width="30%" height={20} />
              </Box>
              <Skeleton
                variant="rectangular"
                height={56}
                sx={{ borderRadius: 1 }}
              />
            </Grid>

            {/* Quantity field skeleton */}
            <Grid size={{ xs: 6 }}>
              <Box sx={{ mb: 1 }}>
                <Skeleton variant="text" width="35%" height={20} />
              </Box>
              <Skeleton
                variant="rectangular"
                height={56}
                sx={{ borderRadius: 1 }}
              />
            </Grid>

            {/* Submit button skeleton */}
            <Grid size={{ xs: 12 }}>
              <Skeleton
                variant="rectangular"
                height={48}
                sx={{ borderRadius: 1 }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Products List Skeleton */}
      <Card variant="outlined" sx={{ borderRadius: 1.5 }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid size={{ xs: 12 }}>
              <Skeleton
                variant="rectangular"
                width="60%"
                height={32}
                sx={{ borderRadius: 2 }}
              />
            </Grid>

            {/* Skeleton for product cards */}
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
        </CardContent>
      </Card>
    </Stack>
  );
};

export default ProductsPageSkeleton;

