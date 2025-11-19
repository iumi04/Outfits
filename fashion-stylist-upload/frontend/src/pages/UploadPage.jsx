import React, { useRef, useState } from "react";
import { Box, Button, Card, CardContent, Typography, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { motion } from "framer-motion";

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
        width: "100vw",
        bgcolor: "#f4ece3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ width: "100%", maxWidth: 700, position: "relative" }}
      >
        {/* Scrapbook Card */}
        <Card
          sx={{
            width: "100%",
            borderRadius: 3,
            bgcolor: "#e6d7c5",
            boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 3,
            border: "2px solid #a88b72",
            borderStyle: "dashed",
            position: "relative",
          }}
        >
          {/* Tape corners */}
          <Box
            sx={{
              position: "absolute",
              top: -10,
              left: -10,
              width: 40,
              height: 20,
              bgcolor: "#d9c3a3",
              transform: "rotate(-12deg)",
              borderRadius: "2px",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: -10,
              right: -10,
              width: 40,
              height: 20,
              bgcolor: "#d9c3a3",
              transform: "rotate(12deg)",
              borderRadius: "2px",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -10,
              left: -10,
              width: 40,
              height: 20,
              bgcolor: "#d9c3a3",
              transform: "rotate(10deg)",
              borderRadius: "2px",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -10,
              right: -10,
              width: 40,
              height: 20,
              bgcolor: "#d9c3a3",
              transform: "rotate(-10deg)",
              borderRadius: "2px",
            }}
          />

          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              variant="h4"
              fontWeight={700}
              textAlign="center"
              mb={3}
              sx={{ color: "#5a3e36", letterSpacing: "0.05em" }}
            >
              My Fashion Scrapbook
            </Typography>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              onClick={() => fileInputRef.current.click()}
              style={{
                border: "2px dashed #a88b72",
                borderRadius: 12,
                padding: "1.5rem",
                textAlign: "center",
                cursor: "pointer",
                marginBottom: "1.5rem",
                background: previewUrl ? "#f2e8de" : "#f7f1ea",
              }}
            >
              {previewUrl ? (
                <motion.img
                  src={previewUrl}
                  alt="Preview"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: "100%",
                    borderRadius: 12,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                />
              ) : (
                <>
                  <CloudUploadIcon sx={{ fontSize: 50, color: "#8c6d5c" }} />
                  <Typography mt={1} sx={{ color: "#8c6d5c" }}>
                    Click to upload your outfit
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
            </motion.div>

            <TextField
              label="Optional outfit context"
              fullWidth
              variant="outlined"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder='e.g. "cozy streetwear, cafe look"'
              sx={{
                mb: 3,
                input: { color: "#5a3e36" },
                label: { color: "#7b5e4c" },
                ".MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#d3bfa1" },
                  "&:hover fieldset": { borderColor: "#a88b72" },
                  "&.Mui-focused fieldset": {
                    borderColor: "#8c6d5c",
                    boxShadow: "0 0 5px rgba(140,109,92,0.4)",
                  },
                },
              }}
            />

            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={() => onUpload(fileInputRef.current.files[0])}
                sx={{
                  backgroundColor: "#a88b72",
                  color: "#fff",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  "&:hover": { backgroundColor: "#8c6d5c" },
                }}
              >
                Analyze Outfit
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}
