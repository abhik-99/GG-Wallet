import { AnonAadhaarProvider, LogInWithAnonAadhaar } from "anon-aadhaar-react";
import PasswordIcon from "@mui/icons-material/Password";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export const Verify = () => {
  const [open, setOpen] = useState(false);
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
