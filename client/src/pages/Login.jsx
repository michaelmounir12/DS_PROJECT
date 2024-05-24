import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useState ,useContext} from 'react';

import { AuthContext } from '../utils/context';

const url ="http://localhost:3000/auth/login"
function Login() {
  const {user,changeUser} = useContext(AuthContext)
    const [Email,changeEmail] = useState("")
    const [password,changePassword] = useState("")
    const [error,handleError] = useState("")
    const [success,handleSuccess] = useState("")
    async function handelSubmit() {
      async function printResponseBody(response) {
        try {
            const bodyText = await response.text();
            const parts = bodyText.split("-");
            handleSuccess("Login approved")
       changeUser(parts)
            console.log(bodyText);
        } catch (error) {
            console.error('Error reading response body:', error);
        }
    }
    
    // Example usage:
    fetch(url,{method:'POST', body: JSON.stringify({"Email":Email,"password":password})})
        .then(printResponseBody)
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    
  }
  
      
    //  .then(response => {
    //      console.log('Response:', response);
    //      
    //  })
    //  .catch(error => {
    //      console.error('Error:', error);
    //  });

       
         
        

    
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput onChange={(event)=> changeEmail(event.target.value)} wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput onChange={(event)=> changePassword(event.target.value)} wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <MDBBtn onClick={handelSubmit} size='lg'>
                Login
              </MDBBtn>

              <hr className="my-4" />

             <p style={{color:"red"}}>{error}</p>
             <p style={{color:"green"}}>{success}</p>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;