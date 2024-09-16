import React from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

const clients = [
  { name: "Gulf", logo: "https://via.placeholder.com/100x50?text=Gulf" },
  { name: "IBM", logo: "https://via.placeholder.com/100x50?text=IBM" },
  {
    name: "Glenmark",
    logo: "https://via.placeholder.com/100x50?text=Glenmark",
  },
  { name: "WNS", logo: "https://via.placeholder.com/100x50?text=WNS" },
  {
    name: "Reliance",
    logo: "https://via.placeholder.com/100x50?text=Reliance",
  },
  { name: "Gulf", logo: "https://via.placeholder.com/100x50?text=Gulf" },
  { name: "IBM", logo: "https://via.placeholder.com/100x50?text=IBM" },
  {
    name: "Glenmark",
    logo: "https://via.placeholder.com/100x50?text=Glenmark",
  },
  { name: "WNS", logo: "https://via.placeholder.com/100x50?text=WNS" },
  {
    name: "Reliance",
    logo: "https://via.placeholder.com/100x50?text=Reliance",
  },
];

const AboutUsClientSlider = () => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        py: 4,
        px: 4,
        position: "relative",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#2c3558",
          fontSize: { xs: "1.5rem", sm: "2rem" },
        }}
      >
        Our Clientele
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#ffc107",
          mb: 4,
          fontSize: { xs: "1rem", sm: "1.25rem" },
        }}
      >
        Trusted by the best.
      </Typography>

      {/* Swiper Slider */}

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-next", // Custom class for next arrow
          prevEl: ".custom-prev", // Custom class for previous arrow
        }}
        //   navigation  // Navigation arrows enabled
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid #ffc107",
                borderRadius: "10px",
                padding: "10px",
                height: "100px",
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Prev Button */}
      <IconButton
        className="custom-prev"
        sx={{
          position: "absolute",
          top: "70%",
          left: { md: "18px", xs: "20px" },
          zIndex: 1000,
          transform: "translateY(-50%)",
          backgroundColor: "#ffc107",
          color: "#2c3558",
          "&:hover": {
            backgroundColor: "#ffa000",
          },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Custom Next Button */}
      <IconButton
        className="custom-next"
        sx={{
          position: "absolute",
          top: "70%",
          right: { md: "18px", xs: "20px" },
          zIndex: 1000,
          transform: "translateY(-50%)",
          backgroundColor: "#ffc107",
          color: "#2c3558",
          "&:hover": {
            backgroundColor: "#ffa000",
          },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default AboutUsClientSlider;
