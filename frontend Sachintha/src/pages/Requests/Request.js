import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';

export default function Request() {

  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:4000/api/disasters/getAllRequests')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  






  

  console.log(data,"data")

const cardStyle = {
  marginBottom: '20px',
  width:"100%",
  padding: '20px',
  backgroundColor: '#f8f9fa',
  borderRadius: '5px',
  margin:"30px"
  
};

const titleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const textStyle = {
  marginBottom: '5px',
};

  return (
    
   
      <Grid container spacing={1} xs={12} style={{ display: "flex" }}>
        {data.map((item) => (
          <Grid item xs={4} key={item._id} style={{ display: "flex" }}>
            <div className="card" style={cardStyle}>
              <div className="card-body">
                <h4 className="card-title" style={titleStyle}>{item.city}</h4>
                <p className="card-text" style={textStyle}><strong>Disaster:</strong> {item.disaster}</p>
                <p className="card-text" style={textStyle}><strong>Date:</strong> {item.date}</p>
                <p className="card-text" style={textStyle}><strong>Description:</strong> {item.description}</p>
                <p className="card-text" style={textStyle}><strong>Camps:</strong> {item.camps}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    );
    
  
}
