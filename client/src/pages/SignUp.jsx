import React, { useState } from "react";
import axios from 'axios'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";

function SignUp() {
  const [username, changeUserName] = useState("");
  const [Email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [Phone, changePhone] = useState("");
  const [error,handleError] = useState("")
  const [success,handleSuccess] = useState("")
  const url ="http://localhost:3000/auth/register"
 async function handleonClick(){
     // eslint-disable-next-line no-undef
     const data = {"username":username,"Email":Email,"password":password,"Phone":Phone}
     
     fetch(url, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             // Add any other headers as needed
         },
         body: JSON.stringify(data),
         mode: 'no-cors' // Set mode to 'no-cors' to bypass CORS
     })
     .then(response => {
         console.log('Response:', response);
     })
     .catch(error => {
         console.error('Error:', error);
     });




  }
  return (
    <MDBContainer fluid>
      <MDBRow className="justify-content-center align-items-center m-5">
        <MDBCard>
          <MDBCardBody className="px-4">
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
              Registration Form
            </h3>

            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  onChange={(event) => changeUserName(event.target.value)} 
                  wrapperClass="mb-4"
                  label="Name"
                  size="lg"
                  id="form1"
                  type="text"
                />
              </MDBCol>

              
            </MDBRow>

         

            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  size="lg"
                  id="form4"
                  type="email"
                  onChange={(event)=> changeEmail(event.target.value)}
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  size="lg"
                  id="form4"
                  type="password"
                  onChange={(event)=> changePassword(event.target.value)}
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Phone Number"
                  size="lg"
                  id="form5"
                  type="rel"
                  onChange={(event)=> changePhone(event.target.value)}
                />
              </MDBCol>
            </MDBRow>

            <MDBBtn onClick={handleonClick} className="mb-4" size="lg">
              Submit
            </MDBBtn>
            <p style={{color:"red"}}>{error}</p>
             <p style={{color:"green"}}>{success}</p>

          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignUp;
