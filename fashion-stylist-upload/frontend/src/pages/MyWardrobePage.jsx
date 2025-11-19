import React from "react";
import { Box, Card, CardMedia, CardContent, Typography, Grid, Button } from "@mui/material";

const dummyWardrobe = [
  {
    id: 1,
    name: "Black Oversized Hoodie",
    description: "Cozy streetwear essential with a minimal vibe.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4f7e2a1",
  },
  {
    id: 2,
    name: "White Sneakers",
    description: "Clean minimalist sneakers for every occasion.",
    image: "https://images.unsplash.com/photo-1528701800489-20be9f63f14a",
  },
  // Add more sample items here...
];

export default function MyWardrobePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0a121c",
        py: 5,
        px: 3,
        color: "#eee",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          mb: 4,
          color: "#fff",
          textShadow: "0 0 12px rgba(255, 111, 97, 0.9)",
        }}
        textAlign="center"
      >
        My Personal Wardrobe
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {dummyWardrobe.map(({ id, name, description, image }) => (
          <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                bgcolor: "#121b27",
                boxShadow: "0 0 15px rgba(255, 111, 97, 0.4)",
                borderRadius: 3,
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 0 25px rgba(255, 111, 97, 0.7)",
                },
              }}
              elevation={8}
            >
              <CardMedia
                component="img"
                height="220"
                image={`${image}?auto=format&fit=crop&w=600&q=80`}
                alt={name}
              />
              <CardContent>
                <Typography variant="h6" fontWeight={700} mb={1} color="#ff6f61">
                  {name}
                </Typography>
                <Typography variant="body2" color="#ccc">
                  {description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add "Add item" button or other UI later */}
    </Box>
  );
}