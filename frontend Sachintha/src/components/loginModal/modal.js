import React, { useState } from "react";
import { Modal, Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Form from "./../loginForm/loginForm";

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
      
      <Button style={{fontSize:" 18px",
   fontWeight:" bold",
   backgroundColor:"blue",
   color: "white",
   padding:" 14px 20px",
   margin:" 8px 0",
   border:" none",
   cursor: "pointer",
   width: "100%",
   opacity:" 0.9"}}variant="contained" onClick={handleOpen}>
        Login
      </Button>
      <Modal open={open} onClose={handleClose}>
        <>
       

         
        <div style={{backgroundColor:"white" ,margin:"100px",height:"750px",justifyContent:"center"}}>
          <div style={{display:"flex",justifyContent:"end"}}>

          <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </div>
       
     <div style={{display:"flex",justifyContent:"center"}}>
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
