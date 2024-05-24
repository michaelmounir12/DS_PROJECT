import React, { useState, useMemo } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,

} from "mdb-react-ui-kit";

function Recruit() {
  const [Name, changeName] = useState("");
  const [price, changePrice] = useState("");
  const [rooms, changerooms] = useState("");
  const [type, changetype] = useState("");
  const [phone, changePhone] = useState("");
  const [Location, changeLocation] = useState("cairo");
  const [error, handleError] = useState("");
  const [success, handleSuccess] = useState("");
  const url = " http://localhost:3000/list";
  async function handleonClick() {
    // eslint-disable-next-line no-undef
    async function printResponseBody(response) {
      try {
          const bodyText = await response.text();

          handleSuccess("listed")
     
          console.log(bodyText);
      } catch (error) {
          console.error('Error reading response body:', error);
      }
  }
  
  fetch(url,{method:'POST', body: JSON.stringify({"type":type,"rooms":rooms,"name":Name,"price":price,"location":Location,"phone":phone})})
      .then(printResponseBody)
      .catch(error => {
          console.error('Error fetching data:', error);
      });
  
  }
  return (
    <MDBContainer fluid>
      <MDBRow className="justify-content-center align-items-center m-5">
        <MDBCard>
          <MDBCardBody className="px-4">
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
             property list form
            </h3>

            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  onChange={(event) => changeName(event.target.value)}
                  wrapperClass="mb-4"
                  label="Name"
                  size="lg"
                  id="form1"
                  type="text"
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  onChange={(event) => changePrice(event.target.value)}
                  wrapperClass="mb-4"
                  label="price"
                  size="lg"
                  id="form1"
                  type="text"
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBInput style={{paddingBottom:"80px"}}
                  wrapperClass="mb-4"
                  textarea
                  id="form4Example3"
                  rows={6}
                  label="Description"
                  onChange={(event) => changeDesc(event.target.value)}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <h6 className="fw-bold">location: </h6>
              <MDBCol size="12">
                <div>
                 
                  <select  onChange={(e)=> changeLocation(e.target.value)}>
                    <option value="cairo">cairo</option>
                    <option value="alexandrie">alexandria</option>
                    <option value="minya">minya</option>
                    <option value="sohag">sohag</option>
                    <option value="qena">qena</option>
                  </select>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <h6 className="fw-bold">type: </h6>
              <MDBCol size="12">
                <div>
                 
                  <select  onChange={(e)=> changetype(e.target.value)}>
                  <option value="">select a type</option>
                    <option value="apartement">apartement</option>
                    <option value="villa">villa</option>
                   
                  </select>
                </div>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="number of rooms"
                  size="lg"
                  id="form4"
                
                  onChange={(event) => changerooms(event.target.value)}
                />
              </MDBCol>

              
            </MDBRow>
            <MDBRow>
              
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="phone number"
                  size="lg"
                  id="form4"
                
                  onChange={(event) => changePhone(event.target.value)}
                />
              </MDBCol>

              
            </MDBRow>


            <MDBBtn onClick={handleonClick} className="mb-4" size="lg">
              Submit
            </MDBBtn>
            <p style={{ color: "red" }}>{error}</p>
            <p style={{ color: "green" }}>{success}</p>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
}

export default Recruit;
