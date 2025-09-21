import { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Scanner from "./Scanner";

const BarcodeScanner = () => {
  const [data, setData] = useState<{ value: string }>({ value: "" });
  const [text, setText] = useState<string>("");

  const startHandler = (inputText: string) => {
    if (inputText.trim()) {
      setResults((prev) => [...prev, inputText]);
      setText("");
      console.log("Manual barcode entered:", inputText);
    }
    //  router.push(`items/${inputText}/`).then(() => setText("setText"));
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
    // router.push(`items/${result}/`);
  };

  const onScannerReady = () => {
    console.log("Scanner is ready and started");
  };
  useEffect(() => {
    console.log(results);
  }, [results]);
  return (
    <Box sx={{ p: 2 }}>
      {/* Current scanned code display */}
      {data.value && (
        <Paper elevation={2} sx={{ p: 2, mb: 2, bgcolor: "success.light" }}>
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

      {/* All scanned results */}
      {results.length > 0 && (
        <Paper elevation={1} sx={{ mb: 2 }}>
          <Typography
            variant="h6"
            sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}
          >
            تمام کدهای اسکن شده ({results.length})
          </Typography>
          <List>
            {results.map((result, index) => (
              <ListItem key={index} divider>
                <ListItemText
                  primary={result}
                  secondary={`شماره ${index + 1}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
      {!text && (
        <>
          <Box
            ref={scannerRef}
            sx={{
              position: "relative",
              border: "3px solid red",
              borderRadius: 1,
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
          </Box>
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
        </>
      )}

      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
        <Typography variant="body1">بارکد دستی:</Typography>
        <TextField
          value={text}
          placeholder="نام"
          onChange={(e) => setText(e.target.value)}
          size="small"
          variant="outlined"
        />
      </Box>
      {text && (
        <Button
          variant="contained"
          fullWidth
          onClick={() => startHandler(text)}
          sx={{ mt: 2 }}
        >
          بررسی
        </Button>
      )}
    </Box>
  );
};

export default BarcodeScanner;
