import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import { useAccount } from "wagmi";
import Box from "@mui/material/Box";
import { Verify } from "../../components/Verify";

export const Profile = () => {
  const { address } = useAccount();
  const theme = useTheme();
  return (
    <Container>
      <Typography variant="h2">Your Profile</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              // background: "transparent",
              border: `solid ${theme.palette.grey[700]} 3px`,
              mt: 2,
            }}
          >
            <Typography variant="h4">Yourself:</Typography>
            <Typography>Address: </Typography>
            <Typography variant="body2" color="text.secondary">
              {address}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography>Verified:</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" color="red">
                Unverified
              </Typography>
              <Verify />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
