import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const CardDetail = ({ detail }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        border: "1px solid #e0e0e0",
        borderRadius: "0px",
        padding: "1.2vw",
      }}
    >
      <CardActionArea style={{ display: "flex", flexDirection: "column" }}>
        <Stack>
          <Avatar
            alt="Mission logo-image"
            src={detail.logo}
            sx={{ width: 100, height: 100 }}
          />
        </Stack>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#363672", fontWeight: "700" }}
          >
            {detail.cardName}
          </Typography>
          <Typography align="center" variant="body2" sx={{ color: "#000" }}>
            {detail.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardDetail;
