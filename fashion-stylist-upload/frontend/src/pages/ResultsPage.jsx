import { Box, Button, Card, CardContent, Typography, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MatchCard from "../components/MatchCard";

export default function ResultsPage({ results, onBack }) {
  return (
    <Box sx={{ p: 3, bgcolor: "#f4f6f8", minHeight: "100vh" }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={onBack}
        sx={{ mb: 2 }}
      >
        Back
      </Button>

      <Card sx={{ mb: 3, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight={600}>
            Your Outfit
          </Typography>

          <img
            src={results.inputImage}
            alt="Input"
            style={{ width: "100%", borderRadius: 12, marginTop: 16 }}
          />

          <Typography mt={2}>
            <strong>Detected Style:</strong> {results.style}
          </Typography>
          <Typography>
            <strong>Vibe:</strong> {results.vibe}
          </Typography>
        </CardContent>
      </Card>

      <Typography variant="h5" fontWeight={600} mb={2}>
        Recommended Matches
      </Typography>

      <Grid container spacing={2}>
        {results.matches.map((match, index) => (
          <Grid item xs={12} md={6} key={index}>
            <MatchCard match={match} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
