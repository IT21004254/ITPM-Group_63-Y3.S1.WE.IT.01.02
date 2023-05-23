import React, { useEffect, useState } from 'react';
import './AddRequests.css'; // Import the CSS file for styling
import Swal from 'sweetalert2'
import axios from 'axios';
import EditModal from './../../components/EditForm/Edit'

import PrintPDF from '../../components/printPDF/PrintPDF';

const RequestList = () => {

  const [requests, setRequests] = useState([]);




  useEffect(() => {
    axios.get('http://localhost:4000/api/disasters/getAllRequests')
      .then(response => {
        setRequests(response.data);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const handleDeleteRequest = (id) => {
    console.log(id, "delete in id")
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this request.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:4000/api/disasters/deleteRequests/${id}`)
          .then(() => {
            Swal.fire({
              title: 'Deleted!',
              text: 'The request has been deleted.',
              icon: 'success'
            }).then(() => {
              setTimeout(() => {
                window.location.reload();
              }, 2000); // Reload after 2 seconds
            });
          })
          .catch(error => {
            console.error('Error deleting request:', error);
          });
      }
    });
  };


  const [newRequest, setNewRequest] = useState({
    // New request fields...
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddRequest = (e) => {
    e.preventDefault();

    const requestData = {
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
        title: 'Error',
        text: 'Please fill in all the required fields.',
        icon: 'error',
      });
      return;
    }

    axios.post('http://localhost:4000/api/disasters/createRequest', requestData)
      .then(response => {
        const requestId = response.data._id;
        const updatedRequests = [...requests, { id: requestId, ...newRequest }];
        setRequests(updatedRequests);
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
          title: 'Sucess',
          text: 'Succesfully Requests Added',
          icon: 'Success',
        });

      })
      .catch(error => {
        console.error('Error adding request:', error);
      });
  };
  //http://localhost:4000/api/disasters/createRequest

  // const handleDeleteRequest = (id) => {
  //   console.log("delete in")
  //   axios.delete(`http://localhost:4000/api/disasters/deleteRequests/${id}`)
  //     .then(() => {
  //       setRequests(requests.filter((request) => request.id !== id));
  //       Swal.fire({
  //         title: 'Succesfully Requests Deleted!',
  //         text: 'Do you want to continue',
  //         icon: 'Succcess',

  //       })
  //       setTimeout(() => {
  //        window.location.reload();
  //       }, 2000); // Reload after 2 seconds


  //     })
  //     .catch(error => {
  //       console.error('Error deleting request:', error);
  //     });
  // };

  const handleEditRequest = (id) => {
    // Logic to edit the request
    console.log(`Edit request with ID: ${id}`);
  };

  return (
    <div className="request-list-container" style={{ marginBottom: "300px" }}>
      <div>

        <div>
          <h1 className="page-title">Request List</h1>
        </div>
        <div><PrintPDF data={requests}/></div>
      </div>


      <form className="request-form" onSubmit={handleAddRequest}>
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
          style={{ marginBottom: "10px" }}
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

        <button type="submit">Add Request</button>
      </form>

      <div className="request-tiles-container">
        {requests.map((request) => (
          <div key={request.id} className="request-tile">
            <h2 className="request-title">{request.city}</h2>
            <p>{request.disaster}</p>
            <p>{request.date}</p>
            <p>{request.description}</p>
            <p>{request.camps}</p>
            <div style={{ display: "flex" }}>
              <div>
                <button
                  className="action-button delete-button"
                  style={{ marginRight: "10px" }}
                  onClick={() => { handleDeleteRequest(request._id); console.log(request, "request id") }}
                >
                  Delete
                </button>

              </div>

              <div>
                <EditModal requestId={request._id} />
              </div>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestList;
