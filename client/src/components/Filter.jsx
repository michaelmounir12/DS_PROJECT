import { useState } from 'react'
import { AuthContext } from "../utils/context";
import { useContext, useEffect } from "react";
import { Range, getTrackBackground } from 'react-range';

import {CButton,CFormInput,CForm,CDropdownDivider,CDropdownItem,CNavbar,CContainer,CNavbarBrand,CNavbarToggler,CCollapse,CNavbarNav,CNavItem,CNavLink,CDropdown,CDropdownToggle,CDropdownMenu,} from '@coreui/react'
import parse from '../pages/parse';
let url = "http://localhost:3000/search"
import { useNavigate } from 'react-router-dom';

function Filter(){
    const [visible, setVisible] = useState(false)
    const [search, changeSearch] = useState("")
    const {changeItems,fItems,compareItems,changeCompareItems} = useContext(AuthContext)
    const [values, setValues] = useState([1000]);
    const [selectedItem, setSelectedItem] = useState("");
    const items = ['cairo', 'giza', 'qena'];
    const navigate = useNavigate();


    function handleClickButton(e){
      e.preventDefault()
      if(compareItems.length!=0){

        navigate('/itemsList')
      }
    }
    
    function handleClick(event){
        event.preventDefault(); 
        async function printResponseBody(response) {
          try {
              const bodyText = await response.text();
              let res = parse(bodyText)
              changeItems(res);
            
              console.log(bodyText);
          } catch (error) {
              console.error('Error reading response body:', error);
          }
      }
      
      // Example usage:
      fetch(url,{method:'POST', body: JSON.stringify({"min":values[0],"max":10000,"pre":search,"loc":selectedItem})})
          .then(printResponseBody)
          .catch(error => {
              console.error('Error fetching data:', error);
          });
      
        
        changeItems(matchingStrings)
    }
    const handleSliderChange = (newValues) => {
      setValues(newValues);
    };
  
    const handleDropdownChange = (event) => {
      setSelectedItem(event.target.value);
    };
  
   

return (
  <>
  
    <CNavbar expand="lg" colorScheme="light" style={{ backgroundColor: '#e3f2fd' }}>
      <CContainer fluid>
       
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav>
            <CNavItem>
              
            </CNavItem>
           
            
          
          </CNavbarNav>
          <CForm className="d-flex">
            <CFormInput onChange={(e)=>changeSearch(e.target.value)} type="search" className="me-2" placeholder="Search" />
            <CButton onClick={handleClick} type="submit" color="primary" variant="outline">
              Search
            </CButton>
          </CForm>
          <div>
      <h2> (min Value: {values[0]} , max value: 10000)</h2>
      <Range
        values={values}
        step={1}
        min={1000}
        max={10000}
        onChange={handleSliderChange}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#ccc', '#548BF4', '#ccc'],
                  min: 1000,
                  max: 10000,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '20px',
              width: '20px',
              borderRadius: '50%',
              backgroundColor: '#548BF4',
            }}
          />
        )}
      />
      <h2>locations</h2>
      <select onChange={handleDropdownChange}>
        <option value="">Select an item</option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
    <div style={{marginLeft:'300px'}}>
    <button onClick={handleClickButton}>compare items</button>
    </div>
   
        </CCollapse>
      </CContainer>
    </CNavbar>
  </>
)
}
export default Filter