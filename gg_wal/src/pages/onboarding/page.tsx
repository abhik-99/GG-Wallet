import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React from "react";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export const Onboarding = () => {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const {disconnect} = useDisconnect()
  return (
    <Container
      sx={{height: "100vh",  display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card sx={{maxWidth: 250, p:2}}>
        <CardContent>
          <Typography variant="h6" align="center" mb={2}><b>{`<`} Signup / Login {`>`}</b></Typography>
          <Typography>New Users:</Typography>
          <Typography variant="body2" color="text.secondary">You will now go through a series of steps designed to onboard you onto Web3.</Typography>
          <Divider sx={{my: 3}}/>
          <Typography>Old Users:</Typography>
          <Typography variant="body2" color="text.secondary">No Surprises. Just straight to your profile</Typography>
          {isConnected &&
          <Typography>Connected from: {address} / {ensName}</Typography>}
        </CardContent>
        {/* <CardActionArea> */}
          <CardActions sx={{display: "flex", justifyContent:"center"}}>
            <Button variant="contained" color="info" onClick={() => connect()}>Log In</Button>
            <Button onClick={() => disconnect()}>disconnect</Button>
          </CardActions>
        {/* </CardActionArea> */}
      </Card>
    </Container>
  );
};
