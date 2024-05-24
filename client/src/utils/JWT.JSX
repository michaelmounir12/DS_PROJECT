import axios from 'axios'
export function saveToken(token) {
    localStorage.setItem('jwtToken', token);
  }
  
  export function getToken() {
    return localStorage.getItem('jwtToken');
  }
  
  export function setAuthHeader(token) {
   
      axios.defaults.headers.common['Authorization'] = token;
   
  }
  