import { Card, CardContent, Box, Grid, Skeleton } from "@mui/material";

const ProductDetailsSkeleton = () => {
  return (
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
  );
};

export default ProductDetailsSkeleton;
