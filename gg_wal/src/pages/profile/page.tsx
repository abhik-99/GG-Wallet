import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import { useAccount } from "wagmi";
import Box from "@mui/material/Box";
import { Verify } from "../../components/Verify";

import polygon from "../../assets/images/polygon.png";
import ButtonBase from "@mui/material/ButtonBase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnonAadhaarProof } from "anon-aadhaar-react";

type UserData = {
  walletAddress: string;
  createdAt: string;
  updatedAt: string;
  verified: boolean;
  anonAdhaarPcd: null | string;
};

export const Profile = () => {
  const [user, setUser] = useState<UserData>();

  const { address, isConnected } = useAccount();
  const theme = useTheme();
  const navigate = useNavigate();
  useEffect(() => {
    async function checkStatus() {
      if (!isConnected) navigate("/");
      const res = await fetch(`http://localhost:3000/user/${address}`);
      const response = await res.json();
      if (response.statusCode === 404) navigate("/");
    }
    checkStatus();
  }, []);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`http://localhost:3000/user/${address}`);
      const userData = await res.json();
      setUser(userData);
    }
    fetchUser();
  }, []);

  console.log("USER:", user);

  return (
    <Container>
      <Typography variant="h2">Your Profile</Typography>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-end"
      >
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
              {user?.verified ? (
                <Typography variant="body2" color="success">
                  Verified
                </Typography>
              ) : (
                <Typography variant="body2" color="red">
                  Unverified
                </Typography>
              )}
              {user?.verified ? (
                <AnonAadhaarProof code={user.anonAdhaarPcd as string} />
              ) : (
                <Verify />
              )}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              height: "100%",
              p: 2,
              // background: "transparent",
              border: `solid ${theme.palette.grey[700]} 3px`,
              mt: 2,
            }}
          >
            <Typography variant="h4">Your Presence:</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5} lg={3}>
                <ButtonBase
                  sx={{
                    borderRadius: theme.shape.borderRadius,
                    height: 100,
                    width: 100,
                  }}
                >
                  <img
                    src={polygon}
                    alt="chain"
                    height={100}
                    width={100}
                    style={{
                      borderRadius: theme.shape.borderRadius,
                    }}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} md={5} lg={3}>
                <ButtonBase
                  sx={{
                    borderRadius: theme.shape.borderRadius,
                    height: 100,
                    width: 100,
                  }}
                >
                  <img
                    src={polygon}
                    alt="chain"
                    height={100}
                    width={100}
                    style={{
                      borderRadius: theme.shape.borderRadius,
                    }}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} md={5} lg={3}>
                <ButtonBase
                  sx={{
                    borderRadius: theme.shape.borderRadius,
                    height: 100,
                    width: 100,
                  }}
                >
                  <img
                    src={polygon}
                    alt="chain"
                    height={100}
                    width={100}
                    style={{
                      borderRadius: theme.shape.borderRadius,
                    }}
                  />
                </ButtonBase>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper
            sx={{
              my: 1,
              height: 200,
              p: 2,
              // background: "transparent",
              border: `solid ${theme.palette.grey[700]} 3px`,
              mt: 2,
            }}
          ></Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
