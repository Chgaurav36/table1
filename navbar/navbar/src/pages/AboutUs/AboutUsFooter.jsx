import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const AboutUsFooter = () => {
  return (
    <Box
      sx={{
        padding: 5,
        backgroundColor: "#FFBF00",
        color: "#363672",
        display: "flex",
        flexDirection: { sm: "column", xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        width: "100%", // Ensures it fills the entire width
      }}
    >
      <Typography
        align="center"
        variant="h5"
        fontSize={{ xs: "4vw", sm: "4vw", md: "2.1vw", lg: "1.8vw" }}
      >
        Let Our Recruitment Specialists Assist You Hire!
      </Typography>
      <Button
        variant="contained"
        sx={{
          marginX: { xs: 2, sm: 4, md: 9, lg: 12 },
          marginY: { xs: 2, sm: 4, md: 0, lg: 0 },

          backgroundColor: "#363672",
          "&:hover": { backgroundColor: "#404080" },
        }}
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default AboutUsFooter;
