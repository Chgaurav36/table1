import React, { useState, useEffect } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const backgroundImages = [
  'url("https://boweninteriors.com.au/wp-content/uploads/2022/11/Office-design-trends-13-1024x682.jpg")',
  'url("https://www.theladders.com/wp-content/uploads/office-meeting-190912.jpg")',
  'url("https://secondnatureuk.co.uk/wp-content/uploads/2021/01/man-giving-an-effective-business-presentation.jpg")',
  'url("https://assets.prod-wp.path2usa.com/wp-content/uploads/2022/06/workculture.jpeg")',
  'url("https://boweninteriors.com.au/wp-content/uploads/2022/11/Office-design-trends-13-1024x682.jpg")',
  'url("https://www.theladders.com/wp-content/uploads/office-meeting-190912.jpg")',
  'url("https://secondnatureuk.co.uk/wp-content/uploads/2021/01/man-giving-an-effective-business-presentation.jpg")',
  'url("https://assets.prod-wp.path2usa.com/wp-content/uploads/2022/06/workculture.jpeg")',
];
const AboutUsFinal = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  //Expandable control
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Background image change every second
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 1000); // Change image every second
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "blueviolet",
        backgroundImage: backgroundImages[backgroundIndex],
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-image 1s ease-in", // Gradual transition between images
      }}
    >
      {/* Accordion */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ width: "80%", backgroundColor: "#ffffff" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: expanded === "panel1" ?"white":"grey"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: expanded === "panel1" ? "#201630" : "#ffffff",
            color: expanded === "panel1" ? "#ffffff" : "",
          }}
        >
          <Typography variant="h6">Click to Expand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is the accordion content. It collapses and expands when you
            click the header.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ width: "80%", backgroundColor: "#ffffff" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: expanded === "panel2" ?"white":"grey"}} />}
          aria-controls="panel2a-content" 
          id="panel2a-header"
          sx={{
            backgroundColor: expanded === "panel2" ? "#201630" : "#ffffff",
            color: expanded === "panel2" ? "#ffffff" : "",
          }}
        >
          <Typography variant="h6">Click to Expand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is the accordion content. It collapses and expands when you
            click the header.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ width: "80%", backgroundColor: "#ffffff" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: expanded === "panel3" ?"white":"grey"}} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{
            backgroundColor: expanded === "panel3" ? "#201630" : "#ffffff",
            color: expanded === "panel3" ? "#ffffff" : "",
          }}
        >
          <Typography variant="h6">Click to Expand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is the accordion content. It collapses and expands when you
            click the header.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{ width: "80%", backgroundColor: "#ffffff" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: expanded === "panel4" ?"white":"grey"}} />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={{
            backgroundColor: expanded === "panel4" ? "#201630" : "#ffffff",
            color: expanded === "panel4" ? "#ffffff" : "",
          }}
        >
          <Typography variant="h6">Click to Expand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is the accordion content. It collapses and expands when you
            click the header.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AboutUsFinal;
