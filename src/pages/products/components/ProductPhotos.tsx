import { type FC, useState } from "react";
import { Box, Card, CardMedia, Grid, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DEFAULT_LOGO_PATH } from "src/constants";

type ProductPhotosProps = {
  photos: string[];
};

const ProductPhotos: FC<ProductPhotosProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const placeholder = DEFAULT_LOGO_PATH;

  const hasPhotos = photos && photos.length > 0;

  return (
    <>
      {hasPhotos ? (
        <Grid container spacing={2}>
          {photos.map((photo, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
              <Card
                sx={{
                  cursor: "pointer",
                  borderRadius: 2,
                  overflow: "hidden",
                  height: 100,
                }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <CardMedia
                  component="img"
                  image={photo}
                  alt={`عکس ${index + 1}`}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={150}
        >
          <Card
            sx={{
              width: 150,
              height: 80,
              borderRadius: 2,
              overflow: "hidden",
              cursor: "pointer",
            }}
            onClick={() => setSelectedPhoto(placeholder)}
          >
            <CardMedia
              component="img"
              image={placeholder}
              alt="Placeholder"
              sx={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Card>
        </Box>
      )}

      {/* Modal for full-size image */}
      <Modal
        open={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          position="relative"
          maxWidth="90%"
          maxHeight="90%"
          bgcolor="background.paper"
          borderRadius={2}
          boxShadow={5}
        >
          <IconButton
            onClick={() => setSelectedPhoto(null)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "primary.light" },
            }}
          >
            <CloseIcon />
          </IconButton>

          <CardMedia
            component="img"
            image={selectedPhoto || placeholder}
            alt="Selected product"
            sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default ProductPhotos;
