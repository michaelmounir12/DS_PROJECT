import Footer from "../components/Footer"
import SearchSection from "../components/Search"
import VolunterSection from "../components/Volunteer"
import { AuthContext } from "../utils/context";
import { useContext, useEffect } from "react";
import parse from "./parse";
import axios from 'axios'
 let url = " http://localhost:3000/"
function Home(){
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`${url}/all`);
  //       if(res.data != "]"){
  //         let parsed = parse(res.data);
  //         console.log(parsed)
  //         changeItems(parsed);
  //       }
        
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       // Optionally, you can handle the error here
  //     }
  //   };
  
  //   fetchData(); // Call the async function
  // },[]);
  // const {changeItems} = useContext(AuthContext)
  
   return(<div>
     <SearchSection/>
     <Footer/>

   </div>)
}
export default Home