import Filter from "../components/Filter"
import Pagination from "../components/Pagination"
import React, { useState ,useContext,useEffect} from 'react';
import { AuthContext } from '../utils/context';
import axios from 'axios'
import parse from "./parse";
const url = " http://localhost:3000"

function OPPORTUNITIES(){
  const {fItems,changeItems} = useContext(AuthContext)
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
      }
    };
  
    fetchData(); // Call the async function
  },[]);

    return(
        <>
        <Filter/>
       <Pagination items={fItems}/>
        </>
       
    )
}
export default OPPORTUNITIES