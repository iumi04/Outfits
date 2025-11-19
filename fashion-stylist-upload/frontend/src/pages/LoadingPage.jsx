import { Box, CircularProgress, Typography } from "@mui/material";

export default function LoadingPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        bgcolor: "#f4f6f8",
      }}
    >
      <CircularProgress size={70} thickness={4} />
      <Typography mt={3} variant="h6">
        Analyzing outfit...
      </Typography>
    </Box>
  );
}
