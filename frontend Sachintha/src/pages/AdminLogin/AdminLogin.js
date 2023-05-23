import React, { useState } from 'react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement login functionality here
    console.log('Email:', email);
    console.log('Password:', password);
    window.location = '/medical/addRequests';
  };

  return (<>
    <h2>Admin Login</h2>
    <div   style={{ display: 'flex',justifyContent:"center"}}>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex',justifyContent:"center", flexDirection: 'column', maxWidth: '300px',justifyContent:"center" }}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} style={{ marginBottom: '10px' }} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} style={{ marginBottom: '10px' }} required />
        </label>
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}>Login</button>
      </form>
    </div>
    </>
  );
};

export default AdminLogin;
