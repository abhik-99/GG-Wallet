import {
  AnonAadhaarProvider,
  LogInWithAnonAadhaar,
  useAnonAadhaar,
} from "anon-aadhaar-react";
import PasswordIcon from "@mui/icons-material/Password";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import { useEffect, useMemo, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useAccount } from "wagmi";

export const Verify = () => {
  const [open, setOpen] = useState(false);
  const {address: walletAddr} = useAccount()
  const [anonAadhaar] = useAnonAadhaar();
  const status = useMemo(() => anonAadhaar.status, [anonAadhaar.status])

  useEffect(() => {
    console.log("Anon Aadhaar status changed: ", anonAadhaar.status);
    if(anonAadhaar?.status === "logged-in") {
      async function updateVerification() {
        const proof = JSON.stringify((anonAadhaar as any).pcd, null, 2)
        await fetch(`http://localhost:3000/user/verify`, {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            walletAddr, proof
          })
        })
        setOpen(false)
      }
      updateVerification()
    }
  }, [status]);
  return (
    <>
      <AnonAadhaarProvider _appId={import.meta.env.VITE_APP_ANON_AADHAR_APP_ID}>
        <IconButton onClick={() => setOpen(true)}>
          <PasswordIcon color="success" />
        </IconButton>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs">
          <DialogTitle>Verify Personhood</DialogTitle>
          <DialogContent>
            <LogInWithAnonAadhaar />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="secondary"
              sx={{ textTransform: "none" }}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </AnonAadhaarProvider>
    </>
  );
};
