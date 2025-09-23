import { useState, useEffect, useRef } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  alpha,
} from "@mui/material";
import { CameraAlt, Stop, PlayArrow, Search } from "@mui/icons-material";
import Scanner from "./Scanner";
import LinearFieldset from "./common/LinearFieldset";
import { useNavigate } from "react-router";
import { DEFAULT_ITEMS_ROUTE } from "src/constants";

const BarcodeScanner = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<{ value: string }>({ value: "" });
  const [text, setText] = useState("");
  const [isScanning, setIsScanning] = useState(true);

  const startHandler = (inputText: string) => {
    if (inputText.trim()) {
      setResults((prev) => [...prev, inputText]);
      setText("");
      console.log("Manual barcode entered:", inputText);
    }
  };

  const [results, setResults] = useState<string[]>([]);
  const scannerRef = useRef<HTMLDivElement>(null);

  const onDetected = (result: string) => {
    console.log("Scanner detected:", result);
    if (result && result !== data.value) {
      setData({ value: result });
      setResults((prev) => [...prev, result]);
      console.log("Scanned code added:", result);
    }
  };

  const onScannerReady = () => {
    console.log("Scanner is ready and started");
  };

  const toggleScanning = () => {
    setIsScanning(!isScanning);
  };

  const startManualScan = () => {
    if (text.trim()) {
      startHandler(text);
      navigate(`${DEFAULT_ITEMS_ROUTE}/${text}`);
    }
  };

  useEffect(() => {
    console.log(results);
  }, [results]);
  return (
    <Box
      p={3}
      borderRadius={2}
      bgcolor={(theme) => alpha(theme.palette.common.white, 0.5)}
    >
      <Box
        ref={scannerRef}
        sx={{
          position: "relative",
          border: (theme) =>
            `2px solid ${
              isScanning ? theme.palette.primary.main : theme.palette.grey[300]
            }`,
          borderRadius: 2,
          overflow: "hidden",
          width: "100%",
          maxWidth: { xs: "320px", sm: "400px", md: "500px" },
          height: { xs: "320px", sm: "250px", md: "300px" },
          mx: "auto",
          "& video": {
            width: "100% !important",
            height: "100% !important",
            objectFit: "cover",
          },
          "& canvas": {
            width: "100% !important",
            height: "100% !important",
          },
        }}
      >
        <Box
          component="canvas"
          className="drawingBuffer"
          sx={{
            position: "absolute",
            top: "0px",
            left: "0px",
            height: "100%",
            width: "100%",
          }}
        />
        {!isScanning && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "rgba(0,0,0,0.7)",
              color: "white",
            }}
          >
            <CameraAlt sx={{ fontSize: 60, mb: 2 }} />
            <Typography variant="h6">دوربین متوقف شده</Typography>
          </Box>
        )}
      </Box>

      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 2 }}>
        <Button
          variant={isScanning ? "contained" : "outlined"}
          color={isScanning ? "error" : "primary"}
          startIcon={isScanning ? <Stop /> : <PlayArrow />}
          onClick={toggleScanning}
          size="large"
          sx={{ minWidth: 140 }}
        >
          {isScanning ? "توقف اسکن" : "شروع اسکن"}
        </Button>
      </Box>

      {isScanning && (
        <Scanner
          scannerRef={scannerRef}
          onDetected={onDetected}
          onScannerReady={onScannerReady}
          cameraId={undefined}
          facingMode="environment"
          constraints={{
            width: 320,
            height: 240,
          }}
          decoders={[
            "code_128_reader",
            "ean_reader",
            "ean_8_reader",
            "code_39_reader",
            "upc_reader",
            "codabar_reader",
            "i2of5_reader",
          ]}
          locator={{
            patchSize: "medium",
            halfSample: true,
          }}
        />
      )}

      {data.value && (
        <Paper elevation={2} sx={{ p: 2, my: 2, bgcolor: "success.light" }}>
          <Typography variant="h6" color="success.contrastText" gutterBottom>
            آخرین کد اسکن شده:
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "monospace", fontSize: "1.2rem" }}
          >
            {data.value}
          </Typography>
        </Paper>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          mt: 2,
        }}
      >
        <LinearFieldset title="جستجو با بارکد دستی" />
        <TextField
          value={text}
          placeholder="بارکد خود را وارد نمایید"
          onChange={(e) => setText(e.target.value)}
          size="small"
          fullWidth
          variant="outlined"
        />
        <Button
          variant="contained"
          fullWidth
          onClick={startManualScan}
          disabled={!text.trim()}
          startIcon={<Search />}
          sx={{ mt: 1 }}
        >
          جستجو
        </Button>
      </Box>
    </Box>
  );
};

export default BarcodeScanner;
