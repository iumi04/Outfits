import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  Fade,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { motion } from "framer-motion";

export default function UploadPage({ onUpload }) {
  const fileInputRef = useRef();
  const [previewUrl, setPreviewUrl] = useState(null);
  const [context, setContext] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleFileSelect = (file) => {
    if (!file || !file.type.startsWith("image/")) {
      alert("Please select an image");
      return;
    }
    setImageLoaded(false);
    setPreviewUrl(URL.createObjectURL(file));
    onUpload(file);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0a121c",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 480,
          borderRadius: 3,
          bgcolor: "#121b27",
          boxShadow: "0 0 18px rgba(255, 255, 255, 0.15)",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            fontWeight={800}
            textAlign="center"
            mb={4}
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#f0f0f0",
              textShadow: "0 0 14px rgba(255,111,97,0.8)",
            }}
          >
            Fashion Stylist
          </Typography>

          <Box
            sx={{
              border: "2.5px dashed rgba(255, 255, 255, 0.4)",
              borderRadius: 2,
              p: 5,
              mb: 4,
              cursor: "pointer",
              color: "rgba(255, 255, 255, 0.7)",
              fontWeight: 500,
              fontSize: "1.1rem",
              userSelect: "none",
              position: "relative",
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
              animation: previewUrl ? "none" : "pulseGlow 2.5s infinite",
              transition: "background-color 0.3s ease, border-color 0.3s ease",
              "&:hover": {
                borderColor: "#ffffff",
                color: "#fff",
                backgroundColor: "rgba(255,111,97,0.1)",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            onClick={() => fileInputRef.current.click()}
          >
            {!previewUrl && (
              <>
                <CloudUploadIcon sx={{ fontSize: 56, mb: 1, color: "inherit" }} />
                Click to upload an outfit image
              </>
            )}

            {previewUrl && (
              <Fade in={imageLoaded}>
                <Box
                  component="img"
                  src={previewUrl}
                  alt="Upload preview"
                  sx={{
                    maxWidth: "100%",
                    maxHeight: 280,
                    borderRadius: 2,
                    boxShadow: "0 0 20px #ff6f61cc",
                    transformOrigin: "center center",
                    animation: "fadeScaleIn 0.6s ease forwards",
                  }}
                  onLoad={() => setImageLoaded(true)}
                />
              </Fade>
            )}

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              hidden
              onChange={(e) => {
                if (e.target.files.length) handleFileSelect(e.target.files[0]);
              }}
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
              mb: 4,
              input: { color: "#ccc", fontFamily: "'Poppins', sans-serif" },
              label: { color: "#bbb", fontFamily: "'Poppins', sans-serif" },
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
              fontWeight: 800,
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: "0.05em",
              boxShadow: "0 0 24px #ff6f61cc",
              transition: "background-color 0.4s ease, box-shadow 0.4s ease",
              "&:hover": {
                backgroundColor: "#e0564b",
                boxShadow: "0 0 32px #e0564bcc",
              },
            }}
          >
            Analyze Outfit
          </Button>
          <Button
  variant="text"
  onClick={goToWardrobe}
  sx={{
    mt: 2,
    color: "#aaa",
    fontWeight: 600,
    textTransform: "none",
    "&:hover": { color: "#ff6f61" },
  }}
>
  View My Wardrobe
</Button>
        </CardContent>

        {/* CSS animations */}
        <style>
          {`
            @keyframes pulseGlow {
              0%, 100% {
                box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.5);
              }
              50% {
                box-shadow: 0 0 20px 8px rgba(255, 255, 255, 0.9);
              }
            }

            @keyframes fadeScaleIn {
              0% {
                opacity: 0;
                transform: scale(0.85);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}
        </style>
      </Card>
    </Box>
  );
}
