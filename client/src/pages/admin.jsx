import React, { useState,useContext,useEffect } from 'react';
import axios from 'axios'
import './admin.css'
import parse from './parse';
import { AuthContext } from '../utils/context';

const AdminDashboard = () => {
  // Dummy data for new listings
  let url = "http://localhost:3000"
  const {fItems,changeItems,user} = useContext(AuthContext)
  console.log(user)
  if(user==[] || user[1]=="false") {
    return <h1>unauthorized</h1>
  }
  
  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}/all`);
        if(res.data != "]"){
          let parsed = parse(res.data);
          console.log(parsed)
          changeItems(parsed);
        }
        
      } catch (error) {
        console.error("Error fetching data:", error);
        // Optionally, you can handle the error here
      }
    };
  
    fetchData(); // Call the async function
  },[]);

 console.log(fItems)
  const handleApprove = async (id) => {
    console.log(id)
    async function printResponseBody(response) {
      try {
          const bodyText = await response.text();
         
          console.log(bodyText);
      } catch (error) {
          console.error('Error reading response body:', error);
      }
  }
  
  // Example usage:
  fetch(`${url}/approve`,{method:'POST', body: JSON.stringify({"id":id})})
      .then(printResponseBody)
      .catch(error => {
          console.error('Error fetching data:', error);
      });
    


  };

  const handleDelete = async (id) => {
    async function printResponseBody(response) {
      try {
          const bodyText = await response.text();
         
          console.log(bodyText);
      } catch (error) {
          console.error('Error reading response body:', error);
      }
  }
  
  // Example usage:
  fetch(`${url}/delete`,{method:'POST', body: JSON.stringify({"id":id})})
      .then(printResponseBody)
      .catch(error => {
          console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>New Listings</h2>
        <ul>
          {fItems.map(listing => (
            
            <li key={listing.id}>
              <h3>{listing.name}</h3>
              <p>phone:{listing.phone}</p>
              <p>location :{listing.location}</p>
              {!listing.approved && (
                <div>
                  <button className="approve-button" onClick={() => handleApprove(listing.id)}>Approve</button>
                </div>
              )}
                <button className="delete-button" onClick={() => handleDelete(listing.id)}>Delete</button>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
