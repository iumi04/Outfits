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
        bgcolor: "#f4f6f8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Card sx={{ width: "100%", maxWidth: 480, p: 2, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h4" fontWeight={600} textAlign="center" mb={3}>
            Fashion Stylist
          </Typography>

          <Box
            sx={{
              border: "2px dashed #90caf9",
              borderRadius: 2,
              p: 4,
              textAlign: "center",
              cursor: "pointer",
              mb: 3,
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
                <CloudUploadIcon sx={{ fontSize: 48, color: "#90caf9" }} />
                <Typography mt={1}>Click to upload an outfit image</Typography>
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
            sx={{ mb: 3 }}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={() => onUpload(fileInputRef.current.files[0])}
          >
            Analyze Outfit
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
