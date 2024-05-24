import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import img from "../assets/real.avif";

export default function SearchSection() {
  return (
    <div >

     
     <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '500px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'60px'}}>

       
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
        </div>
       
    </div>
    
  );
}