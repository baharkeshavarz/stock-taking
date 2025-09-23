import { ExitToAppOutlined, WhatsApp, Phone } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
  Stack,
  alpha,
} from "@mui/material";

const Settings = () => {
  const metadata = JSON.parse(localStorage.getItem("metadata") || "{}");

  return (
    <Box
      bgcolor={(theme) => alpha(theme.palette.common.white, 0.5)}
      height="90dvh"
      p={3}
      borderRadius={2}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: `linear-gradient(rgb(208, 237, 255) 100%, rgb(200, 244, 255) 100%)`,
          borderRadius: 2,
          p: 3,
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
          <Avatar
            sx={{
              width: 65,
              height: 65,
              bgcolor: "primary.light",
              fontSize: "1rem",
            }}
            src="/avatar-sample-2.png"
          />
          <Typography variant="body1" fontWeight={600}>
            {metadata?.name || "کاربر میهمان"}
          </Typography>
        </Box>

        <IconButton>
          <ExitToAppOutlined sx={{ fontSize: 30, color: "grey.500" }} />
        </IconButton>
      </Box>

      <Stack spacing={2} sx={{ mt: 3 }}>
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
          <CardContent>
            <Box display="flex" alignItems="center" gap={4}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 5,
                  bgcolor: "success.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <WhatsApp sx={{ color: "white", fontSize: 28 }} />
              </Box>
              <Box>
                <Typography variant="body1" color="text.primary">
                  پشتیبانی واتساپ
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  09018063279
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{
            borderRadius: 2,
            cursor: "pointer",
            "&:hover": {
              boxShadow: 1,
            },
          }}
          onClick={() => window.open("tel:02147638000", "_self")}
        >
          <CardContent>
            <Box display="flex" alignItems="center" gap={4}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 5,
                  bgcolor: "primary.dark",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Phone sx={{ color: "white", fontSize: 28 }} />
              </Box>
              <Box>
                <Typography variant="body1" color="text.primary">
                  پشتیبانی تلفنی
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      color: "primary.dark",
                    },
                  }}
                >
                  02147638000
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default Settings;
