import React ,{useContext,useEffect}from 'react';
import './ItemList.css'; 
import { AuthContext } from '../utils/context';
function ItemList() {
    const { compareItems, changeCompareItems } = useContext(AuthContext);
    
    
      let items = compareItems
  return (
    <div>
      <h2>Item List</h2>
      <table className="item-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Number of Rooms</th>
            <th>Location</th>
            <th>Price</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.numberOfRooms}</td>
              <td>{item.location}</td>
              <td>{item.price}</td>
              <td>{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemList;
