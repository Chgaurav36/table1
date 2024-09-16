import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";
import { Star, FormatQuote } from "@mui/icons-material";

const AboutUsCard = () => {
  return (
    <Card
      sx={{
        maxWidth: { xs: 345, sm: 345 }, // Full width on mobile, fixed width on tablets and larger screens
        backgroundColor: "#0000",
        color: "#111",
        padding: { xs: 2, sm: 3 }, // Adjust padding based on screen size
        borderRadius: 3,
        margin: "auto", // Center the card on smaller screens
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "#2c3558", // Background color changes to red on hover
          color: "#fff", // Text color changes to white on hover
        },
        "&:hover .quote-icon": {
          color: "#fff", // Text color changes to white on hover
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
          top: { xs: "-10px", sm: "-20px" }, // Smaller adjustment on mobile
          left: { xs: "-5px", sm: "-10px" }, // Smaller adjustment on mobile
        }}
      >
        <FormatQuote
          className="quote-icon"
          sx={{
            fontSize: { xs: 30, sm: 40 },
            color: "#363672",
          }}
        />
      </Box>

      <CardContent>
        <Grid container spacing={1}>
          <Grid item>
            {Array(5)
              .fill()
              .map((_, index) => (
                <Star key={index} sx={{ color: "#ffc107" }} />
              ))}
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          component="p"
          sx={{
            marginTop: 1,
            fontSize: { xs: "0.9rem", sm: "1rem" }, // Adjust font size for mobile and tablet
          }}
        >
          The Hire Glocal team is effective in executive search because of its
          insights, thorough approach, and ability to focus on what drives and
          inspires leaders. Without a doubt, important for a firm to develop its
          executive team.
        </Typography>
      </CardContent>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: { xs: 1, sm: 2 }, // Adjust margin for different screen sizes
          padding: 2,
          borderTop: "1px dotted #fff",
        }}
      >
        <Avatar
          alt="VP – Human Resource"
          src="https://i.pravatar.cc/300" // Placeholder image
          sx={{ width: { xs: 48, sm: 56 }, height: { xs: 48, sm: 56 } }} // Adjust avatar size
        />
        <Box sx={{ marginLeft: 2 }}>
          <Typography
            variant="body2"
            component="p"
            sx={{ fontWeight: "bold", fontSize: { xs: "0.85rem", sm: "1rem" } }}
          >
            VP – Human Resource,
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ fontSize: { xs: "0.75rem", sm: "0.9rem" } }}
          >
            Leading Pharmaceutical Manufacturer
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default AboutUsCard;
