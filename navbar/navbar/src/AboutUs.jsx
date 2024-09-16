import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import ActionAreaCard from "./Card";
import AboutUsSwiper from "./pages/AboutUs/AboutUsSwiper";
import AboutUsClientSlider from "./pages/AboutUs/AboutUsClientSlider";
import AboutUsFinal from "./pages/AboutUs/AboutUsFinal";
import AboutUsFooter from "./pages/AboutUs/AboutUsFooter";

const AboutPage = () => {
  return (
    <>
      <Box sx={{ minHeight: "100vh" }}>
        {/* Header Section */}
        <Box
          sx={{
            backgroundImage:
              "url(https://hireglocal.com/wp-content/uploads/2021/09/bg-17.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: { xs: "200px", md: "200px" },
            display: "flex",
            //   justifyContent: 'center',
            alignItems: "center",
            color: "white",
            textAlign: "center",
            borderRadius: "5px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
          >
            About Hire Glocal
          </Typography>
        </Box>
        <Typography
          variant="h4"
          align="center"
          sx={{
            padding: { xs: 0, md: "3vw" },
            fontWeight: "bold",
            color: "#FBC02D",
            paddingBottom: "3vw",
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="inherit"
            sx={{ color: "#363672", fontWeight: "bold" }}
          >
            About
          </Typography>{" "}
          &nbsp;Hire Glocal
        </Typography>

        {/* About Section */}
        <Container maxWidth="lg" sx={{ paddingTop: { xs: 15, md: 18 } }}>
          <Grid container spacing={4}>
            {/* Image Section with Two Images */}
            <Grid item xs={12} md={6} sx={{ position: "relative" }}>
              {/* First (Smaller) Image */}

              <Box
                component="img"
                src="https://hireglocal.com/wp-content/uploads/2023/06/unique-interview-questions-768x512.jpg" // Replace with actual image URL
                alt="Top Image"
                sx={{
                  width: "50%",
                  right: "-1%",
                  top: "-5%",
                  display: "block",
                  position: "absolute",
                  mx: "auto",
                  // mb: 2, // Margin bottom for spacing between images
                  borderRadius: "8px",
                }}
              />
              {/* Second (Larger) Image */}
              <Box
                component="img"
                src="https://hireglocal.com/wp-content/uploads/2022/08/closeup-view-cylindrical-grinder-industrial-concept.jpg" // Replace with actual image URL
                alt="Bottom Image"
                sx={{
                  width: { xs: "100%", md: "90%" }, // Larger image
                  display: "block",
                  borderRadius: "8px",
                  // paddingRight: "3vw",
                }}
              />
              <Box width="100%" height="100%">
                <iframe
                  width="90%"
                  height="30%"
                  src="https://www.youtube.com/embed/FkpiwKB1QAI?si=HZZicRo4ahg8cNfo"
                  title="YouTube video player"
                  frameborder="0"
                  allow=" fullscreen;
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share"
                  allowfullscreen
                ></iframe>
              </Box>
            </Grid>

            {/* Text Section */}
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              paddingTop="2vw"
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#FBC02D",
                  paddingBottom: "3vw",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <Typography
                  variant="inherit"
                  sx={{ color: "#363672", fontWeight: "bold" }}
                >
                  About
                </Typography>{" "}
                &nbsp;Hire Glocal
              </Typography>
              <Typography
                align="justify"
                variant="body1"
                sx={{ mb: 2, marginTop: { xs: "20vw", md: "0vw" } }}
              >
                <span style={{ fontWeight: "bold", color: "#FBC02D" }}>
                  Hire Glocal
                </span>{" "}
                is a multi-functional, multi-faculty, cross-industry Global{" "}
                <strong>Leading Executive Search firm</strong>, headquartered in
                Mumbai (India).{" "}
                <span style={{ fontWeight: "bold", color: "#FBC02D" }}>
                  Hire Glocal
                </span>{" "}
                is an ISO 9001:2015 certified leading recruitment consultancy,
                specializing in placement consultancy services such as Executive
                Search, CXO Hiring, Turnkey Recruitment, Interim Management, and
                HR Consulting. We are aligned in a range of industry-specific
                practices and provide quality recruitment and leading manpower
                services in India and abroad.
              </Typography>
              <Typography align="justify" variant="body1" sx={{ mb: 2 }}>
                Having a Pan-India presence,{" "}
                <span style={{ fontWeight: "bold", color: "#FBC02D" }}>
                  Hire Glocal
                </span>
                is the best recruitment agency in Mumbai as well as in all the
                major metropolitan cities for all IT and Non-IT recruitment
                needs.
              </Typography>
              <Typography align="justify" variant="body1" sx={{ mb: 2 }}>
                As the <strong>best HR Consultancy</strong> and Recruitment
                Agency, our Recruitment Specialist team consists of
                professionals from diverse backgrounds who are vastly
                experienced (more than 2 decades) in the field of recruitment &
                manpower consulting.
              </Typography>
              <Typography align="justify" variant="body1">
                <span style={{ fontWeight: "bold", color: "#FBC02D" }}>
                  Hire Glocal
                </span>{" "}
                is a top recruitment agency offering selective and high-quality
                hiring solutions to our clients including many MNCs. Being the
                <strong>best recruitment agency</strong> and having a top-notch
                recruitment team, we successfully meet the requirements of the
                organization’s manpower demands thanks to our database, fastest
                turnaround, past expertise, and innovative ideas.
              </Typography>
              <Typography align="justify" variant="body1" sx={{ mb: 2 }}>
                Having a Pan-India presence,{" "}
                <span style={{ fontWeight: "bold", color: "#FBC02D" }}>
                  Hire Glocal
                </span>
                is the best recruitment agency in Mumbai as well as in all the
                major metropolitan cities for all IT and Non-IT recruitment
                needs.
              </Typography>
              <Typography align="justify" variant="body1" sx={{ mb: 2 }}>
                As the <strong>best HR Consultancy</strong> and Recruitment
                Agency, our Recruitment Specialist team consists of
                professionals from diverse backgrounds who are vastly
                experienced (more than 2 decades) in the field of recruitment &
                manpower consulting.
              </Typography>
              <Typography align="justify" variant="body1" sx={{ mb: 2 }}>
                Having a Pan-India presence,{" "}
                <span style={{ fontWeight: "bold", color: "#FBC02D" }}>
                  Hire Glocal
                </span>
                is the best recruitment agency in Mumbai as well as in all the
                major metropolitan cities for all IT and Non-IT recruitment
                needs.
              </Typography>
              <Typography align="justify" variant="body1" sx={{ mb: 2 }}>
                As the <strong>best HR Consultancy</strong> and Recruitment
                Agency, our Recruitment Specialist team consists of
                professionals from diverse backgrounds who are vastly
                experienced (more than 2 decades) in the field of recruitment &
                manpower consulting.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ActionAreaCard />
      <Box
        sx={{
          backgroundImage:
            "url(http://el.commonsupport.com/wp/envolve/wp-content/uploads/2020/05/bg-28.jpg) ",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "185px", md: "185px" },
          display: "flex",
          marginTop: "5vw",

          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Our Process Flow
        </Typography>
      </Box>
      {/* <Box width="100%"
      minHeight="100vh"
      backgroundColor="red"></Box> */}
      <Container backgroundColor="red" sx={{ padding: "0px" }}>
        <Typography
          align="center"
          variant="h3"
          width="100%"
          sx={{
            color: "#ffbf00",
            fontWeight: "bold",
            letterSpacing: "-2px",
            fontSize: { xs: "29px", md: "2.5rem" },
            paddingY: { xs: "2rem ", md: "3rem" },
          }}
        >
          Words From Our Customers
        </Typography>
        <Box>
          <AboutUsSwiper />
        </Box>
      </Container>
      <Box>
        <AboutUsClientSlider />
      </Box>

      <Box>
        <AboutUsFinal />
      </Box>
      <Box sx={{ padding: { xs: 0, sm: 4, md: 8, lg: 8 } }}>
        <AboutUsFooter />
      </Box>
    </>
  );
};

export default AboutPage;
