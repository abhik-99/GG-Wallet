import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useAuth } from "../../lib/hooks";

export const Onboarding = () => {
  const {handleSignIn} = useAuth()
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
        </CardContent>
        {/* <CardActionArea> */}
          <CardActions sx={{display: "flex", justifyContent:"center"}}>
            <Button variant="contained" color="info" onClick={handleSignIn}>Log In</Button>
            {/* <Button onClick={handleSignOut}>Sign Out</Button> */}
          </CardActions>
        {/* </CardActionArea> */}
      </Card>
    </Container>
  );
};
