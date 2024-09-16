import * as React from "react";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import CardDetail from "./components/CardDetail";

export default function ActionAreaCard({ detail }) {
  return (
    <Container>
      <Stack
        direction="row"
        spacing={0}
        sx={{
          flexWrap: { md: "nowrap", xs: "wrap" },
          justifyContent: "center",
        }}
      >
        <CardDetail
          detail={{
            logo: "https://hireglocal.com/wp-content/uploads/2024/08/1-removebg-preview-300x300-1mi.webp",
            cardName: "Our Mission",
            logoName: "Mission logo-image",
            description:
              "To be the most favored and exclusive Business Partners for Executive Search, CXO Hiring, Turnkey Recruitment, Interim Management, HR Consulting, and Resume Writing.",
          }}
        />
        <CardDetail
          detail={{
            logo: "https://hireglocal.com/wp-content/uploads/2024/08/2-removebg-preview-1vi.webp",
            cardName: "Our Vision",
            logoName: "Vision logo-image",
            description:
              "Our vision is to establish a long-term and strategic recruitment partnership with our clients and assist them in transforming today’s difficulties into tomorrow’s triumphs.",
          }}
        />
        <CardDetail
          detail={{
            logo: "https://hireglocal.com/wp-content/uploads/2024/08/3-removebg-preview-1.webp",
            logoName: "Promise logo-image",
            cardName: "Our Promise",
            description:
              "At Hire Glocal, we promise to deliver exceptional talent that drives your business forward with a commitment to quality and excellence in every placement.",
          }}
        />
      </Stack>
    </Container>
  );
}
