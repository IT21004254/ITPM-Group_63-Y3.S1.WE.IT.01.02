import React, { useState } from "react";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
        //should add inside API success state
        window.location = '/medical/requests';
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
          <h2>Volunteer Login</h2>
          <label htmlFor="name">Email:</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              height: "48px",
              width: "150%",
              border: "1px solid #c0c0c0",
              borderRadius: "4px",
              boxSizing: "border-box",
              padding: "16px",
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Password:</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              height: "48px",
              width: "150%",
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
              justifyContent: "center",
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
          >
            Login
          </button>
        </div>
      </form>
      <div></div>
    </>
  );
};

export default SignUpForm;
