import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">Welcome</Typography>
        <Typography variant="h4" color="text.secondary">
          You know where to click.
        </Typography>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            mt:4
          }}
        >
          <Button variant="contained" onClick={() => navigate("/onboarding")}>Get Started</Button>
          <Button variant="contained" color="secondary">
            Learn More
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
