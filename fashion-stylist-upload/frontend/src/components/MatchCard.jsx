import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function MatchCard({ match }) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={match.image}
        alt={match.name}
      />
      <CardContent>
        <Typography variant="h6" fontWeight={600}>
          {match.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {match.style}
        </Typography>
        <Typography mt={1}>{match.description}</Typography>
      </CardContent>
    </Card>
  );
}
