import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import { Button, Box, Typography, IconButton, useTheme } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const sliderData = [
  {
    img: "http://files.all-free-download.com/downloadfiles/wallpapers/1920_1080/peaceful_lake_wallpaper_landscape_nature_1208.jpg", // Replace with your image URL
    title: "Modern Website",
    description:
      "Website adaptable to all devices, with UI components and animated interactions.",
    link: "#",
  },
  {
    img: "https://cdn.wallpapersafari.com/13/87/oTrSxF.jpg", // Replace with your image URL
    title: "Responsive Design",
    description:
      "Responsive websites designed for all screen sizes and devices.",
    link: "#",
  },
  {
    img: "http://files.all-free-download.com/downloadfiles/wallpapers/1920_1080/peaceful_lake_wallpaper_landscape_nature_1208.jpg", // Replace with your image URL
    title: "Modern Website",
    description:
      "Website adaptable to all devices, with UI components and animated interactions.",
    link: "#",
  },
  {
    img: "https://cdn.wallpapersafari.com/13/87/oTrSxF.jpg", // Replace with your image URL
    title: "Responsive Design",
    description:
      "Responsive websites designed for all screen sizes and devices.",
    link: "#",
  },
];

const CustomNextArrow = (props) => {
  const { onClick } = props;
  const theme = useTheme(); // Get the MUI theme to use the primary color
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: "-50px",
        transform: "translateY(-50%)",
        zIndex: 1,
        color: theme.palette.primary.main, // Set the arrow color to match the button
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  const theme = useTheme(); // Get the MUI theme to use the primary color
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "-50px",
        transform: "translateY(-50%)",
        zIndex: 1,
        color: theme.palette.primary.main, // Set the arrow color to match the button
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
};

const ImageSlider = () => {
  const theme = useTheme(); // Get the MUI theme to access the primary color for dots
  const [activeSlide, setActiveSlide] = useState(0); // Track the active slide index

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next), // Update activeSlide on slide change
    appendDots: (dots) => (
      <div
        style={{
          padding: "10px",
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor:
            i === activeSlide
              ? theme.palette.primary.main
              : "rgba(0, 0, 0, 0.3)", // Active vs Inactive dot color
          transition: "background-color 0.3s ease", // Smooth transition effect when the active dot changes
        }}
      />
    ),
  };

  return (
    <Box sx={{ maxWidth: "80%", margin: "auto", padding: "2rem" }}>
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <Box
            key={index}
            sx={{
              display: "flex !important",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens
              padding: "1rem",
            }}
          >
            {/* Image Section */}
            <Box
              component="img"
              src={slide.img}
              alt={slide.title}
              sx={{
                width: { xs: "100%", md: "50%" }, // Full width on small screens, half on medium and larger screens
                borderRadius: "8px",
                marginBottom: { xs: "1rem", md: "0" }, // Add margin on small screens for spacing
              }}
            />

            {/* Text Content Section */}
            <Box
              sx={{
                marginLeft: { md: "2rem" },
                width: { xs: "100%", md: "50%" },
              }}
            >
              <Typography variant="h4" component="h2" gutterBottom>
                {slide.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {slide.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={slide.link}
                endIcon={
                  <span style={{ marginLeft: "5px", fontSize: "14px" }}>
                    &#8594;
                  </span>
                }
                sx={{ marginTop: "1rem" }}
              >
                Demo
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
