import React, { useState } from "react";
import { Modal, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Form from "./../SignUpForm/signUpForm";

const SignInModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{ width: "300px", height: "46px" }}
        variant="contained"
        onClick={handleOpen}
      >
        Sign In Or Login
      </Button>
      <Modal open={open} onClose={handleClose}>
        <>
          <div
            style={{
              backgroundColor: "white",
              margin: "100px",
              height: "750px",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "end" }}>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              {/* Your sign-in form goes here */}

              <Form />
            </div>
            {/* Add your sign-in form components (e.g., input fields, buttons) */}
          </div>
        </>
      </Modal>
    </div>
  );
};

export default SignInModal;
