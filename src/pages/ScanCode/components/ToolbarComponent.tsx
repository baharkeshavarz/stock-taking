import { Box, Button, Toolbar, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HimartLogo from "src/components/icons/HimartLogo";

const ToolbarComponent = () => {
  return (
    <Toolbar
      sx={{
        minHeight: "auto",
        width: "100%",
        backgroundColor: "white",
        py: 2.5,
      }}
    >
      {/* <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar
          sx={{
            width: 40,
            height: 40,
            bgcolor: "primary.light",
            fontSize: "1rem",
          }}
          src="/avatar-sample-2.png"
        />
        <Box> */}
      <Typography variant="subtitle2" fontWeight={600}>
        کاربر میهمان
      </Typography>
      {/* </Box>
      </Box> */}
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <HimartLogo size="medium" showTitle={false} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="outlined"
          size="small"
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            boxShadow: "none",
            "&:hover": {
              boxShadow: "0 4px 12px rgba(46, 114, 184, 0.1)",
            },
          }}
        >
          <AddIcon sx={{ fontSize: 24 }} />
        </Button>
      </Box>
    </Toolbar>
  );
};

export default ToolbarComponent;
