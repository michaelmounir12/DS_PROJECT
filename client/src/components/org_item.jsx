import '../css/item.css'
import React,{useContext} from 'react';
import { AuthContext } from '../utils/context';
const OrganizationItem = ({ organization }) => {
  const {compareItems,changeCompareItems} = useContext(AuthContext)

  const handleRequestClick = () => {
    changeCompareItems([...compareItems,organization])
  };

  return (
    <div style={{display:'flex',justifyContent:'space-between'}} id={organization.id} className="organization-item">
      <div>
      <h3>{organization.name}</h3>
      <p>location {organization.location}</p>
      <p>price: {organization.price}</p>
      <p>phone: {organization.phone}</p>
      </div>
      <div style={{ marginLeft: '300px' }}>
      <button
      onClick={handleRequestClick}
        style={{
          borderRadius: '10px',
          backgroundColor: 'green',
          transition: 'background-color 0.3s ease', 
          cursor: 'pointer' 
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = 'lightgreen')}
        onMouseOut={(e) => (e.target.style.backgroundColor = 'green')}
      >
        Compare
      </button>
    </div>


      
      
    </div>
  );
};

export default OrganizationItem;
