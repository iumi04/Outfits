import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function UploadPage({ onUpload }) {
  const fileInputRef = useRef();
  const [previewUrl, setPreviewUrl] = useState(null);
  const [context, setContext] = useState("");

  const handleFileSelect = (file) => {
    if (!file || !file.type.startsWith("image/")) {
      alert("Please select an image");
      return;
    }
    setPreviewUrl(URL.createObjectURL(file));
    onUpload(file);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0a121c", // Dark background to match app
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 480,
          borderRadius: 3,
          bgcolor: "#121b27",
          boxShadow: "0 0 15px rgba(0,0,0,0.9)",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            fontWeight={800}
            textAlign="center"
            mb={3}
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#f0f0f0",
              textShadow: "0 0 12px rgba(255,111,97,0.6)",
            }}
          >
            Fashion Stylist
          </Typography>

          <Box
            sx={{
              border: "2px dashed #5577a1",
              borderRadius: 2,
              p: 4,
              textAlign: "center",
              cursor: "pointer",
              mb: 3,
              color: "#7991b0",
              fontWeight: 500,
              fontFamily: "'Poppins', sans-serif",
              userSelect: "none",
              transition: "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
              "&:hover": {
                borderColor: "#ff6f61",
                backgroundColor: "rgba(255,111,97,0.1)",
                color: "#ff6f61",
              },
            }}
            onClick={() => fileInputRef.current.click()}
          >
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                style={{ width: "100%", borderRadius: 12 }}
              />
            ) : (
              <>
                <CloudUploadIcon sx={{ fontSize: 48, color: "inherit" }} />
                <Typography mt={1} sx={{ color: "inherit" }}>
                  Click to upload an outfit image
                </Typography>
              </>
            )}

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              hidden
              onChange={(e) => handleFileSelect(e.target.files[0])}
            />
          </Box>

          <TextField
            label="Optional outfit context"
            fullWidth
            variant="outlined"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder='e.g. "streetwear, casual"'
            sx={{
              mb: 3,
              input: {
                color: "#bbb",
                fontFamily: "'Poppins', sans-serif",
              },
              label: {
                color: "#7991b0",
                fontFamily: "'Poppins', sans-serif",
              },
              ".MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#444c5c",
                },
                "&:hover fieldset": {
                  borderColor: "#ff6f61",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ff6f61",
                  boxShadow: "0 0 8px #ff6f61",
                },
              },
            }}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={() => onUpload(fileInputRef.current.files[0])}
            sx={{
              backgroundColor: "#ff6f61",
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: "0.05em",
              boxShadow: "0 0 15px #ff6f61cc",
              "&:hover": {
                backgroundColor: "#e0564b",
                boxShadow: "0 0 20px #e0564bcc",
              },
            }}
          >
            Analyze Outfit
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}