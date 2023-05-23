import React, { useState } from "react";
import LoginButton from "./../loginModal/modal";
import Swal from 'sweetalert2'
const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [password, setPassword] = useState("");
  const [Confirm, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

   
    Swal.fire({
      title: 'Succesfully  Signed Up!',
      text: 'Waiting for the page',
      icon: 'Succcess',
    
    })
    setTimeout(() => {
     window.location = '/medical/requests';
    }, 5000); // Reload after 2 seconds
   



    //should add inside API success state
    

    // Handle form submission logic, such as sending data to an API or performing validation
    // You can access the form input values using the state variables (name, email, phone, specialty)
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h2>Sign Up as a Medical Volunteer</h2>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              height: "48px",
              width: "100%",
              border: "1px solid #c0c0c0",
              borderRadius: "4px",
              boxSizing: "border-box",
              padding: "16px",
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              height: "48px",
              width: "100%",
              border: "1px solid #c0c0c0",
              borderRadius: "4px",
              boxSizing: "border-box",
              padding: "16px",
            }}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <br />
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{
              height: "48px",
              width: "100%",
              border: "1px solid #c0c0c0",
              borderRadius: "4px",
              boxSizing: "border-box",
              padding: "16px",
            }}
          />
        </div>
        <div>
          <label htmlFor="specialty">Specialty:</label>
          <br />
          <input
            type="text"
            id="specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            required
            style={{
              height: "48px",
              width: "100%",
              border: "1px solid #c0c0c0",
              borderRadius: "4px",
              boxSizing: "border-box",
              padding: "16px",
            }}
          />
        </div>
        <div>
          <label htmlFor="specialty">Password</label>
          <br />
          <input
            type="password"
            id="specialty"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              height: "48px",
              width: "100%",
              border: "1px solid #c0c0c0",
              borderRadius: "4px",
              boxSizing: "border-box",
              padding: "16px",
            }}
          />
        </div>
        <div>
          <label htmlFor="specialty">Confirm Password</label>
          <br />
          <input
            type="password"
            id="specialty"
            value={Confirm}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{
              height: "48px",
              width: "100%",
              border: "1px solid #c0c0c0",
              borderRadius: "4px",
              boxSizing: "border-box",
              padding: "16px",
            }}
          />
        </div>

        <div>
          <button
            style={{
              fontSize: " 18px",
              fontWeight: " bold",
              backgroundColor: "blue",
              color: "white",
              padding: " 14px 20px",
              margin: " 8px 0",
              border: " none",
              cursor: "pointer",
              width: "100%",
              opacity: " 0.9",
            }}
            type="submit"
            onClick={ handleSubmit}
          >
            Sign Up
          </button>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            -----OR-----
          </div>
          <LoginButton />
        </div>
      </form>
      <div></div>
    </>
  );
};

export default SignUpForm;
