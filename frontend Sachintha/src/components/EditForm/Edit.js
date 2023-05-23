import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Swal from 'sweetalert2'
import axios from 'axios';
import "./Edit.css";
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal( props) {

  const id=props.requestId;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newRequest, setNewRequest] =React.useState({
    // New request fields...
  });




  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest((prevState) => ({ ...prevState, [name]: value }));
  };




  const handleEditReq = (e) => {
    e.preventDefault();

    const requestData = {
        id:id,
      city: newRequest.city,
      disaster: newRequest.disaster,
      date: newRequest.date,
      description: newRequest.description,
      camps: newRequest.camps,
    };

    if (
      !newRequest.city ||
      !newRequest.disaster ||
      !newRequest.date ||
      !newRequest.description ||
      !newRequest.camps
    ) {
      Swal.fire({
        customClass: {
            container: 'swal-alert-container',
          },
        title: 'Error',
        text: 'Please fill in all the required fields.',
        icon: 'error',
      });
      return;
    }

    axios.put('http://localhost:4000/api/disasters/updateRequests', requestData)
      .then(response => {
        const requestId = response.data._id;
      //  const updatedRequests = [...requests, { id: requestId, ...newRequest }];
       
        setNewRequest({
          city: '',
          disaster: '',
          date: '',
          description: '',
          camps: ''

        });
        setTimeout(() => {
          window.location.reload();
        }, 2000); 
        Swal.fire({
            customClass: {
                container: 'swal-alert-container',
              },
          title: 'Sucess',
          text: 'Succesfully Requests Edited',
          icon: 'Success',
        });

      })
      .catch(error => {
        console.error('Error adding request:', error);
      });
  };


  return (
    <div>
      <Button       style={{color:"white",height:"31px"}}         className="action-button edit-button"
 onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            EditForm
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="request-list-container" style={{marginBottom:"300px"}}>
      
      <form className="request-form" onSubmit={(e) => handleEditReq(e)}>
        <input
          type="text"
          name="city"
          value={newRequest.city}
          onChange={handleInputChange}
          placeholder="City"
        />
        <input
          type="text"
          name="disaster"
          value={newRequest.disaster}
          onChange={handleInputChange}
          placeholder="Disaster"
        />
        <input
          type="date"
          name="date"
          value={newRequest.date}
          onChange={handleInputChange}
        />
        <textarea
        style={{marginBottom:"10px"}}
          name="description"
          value={newRequest.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          type="text"
          name="camps"
          value={newRequest.camps}
          onChange={handleInputChange}
          placeholder="Camps"
        />

        <button type="submit">Edit Request</button>
      </form>

     
    </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}