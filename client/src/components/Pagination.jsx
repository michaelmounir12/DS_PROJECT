import React, { useState } from 'react';
import OrganizationItem from './org_item';
  
const Pagination = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  if(!items){
    return(
        <h1>No Services found</h1>
    )
  }

  // Calculate total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Slice items array to display items for the current page
  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
        {currentItems.map((item, index) => (
         item.approved? <OrganizationItem organization={item}/>:<div></div>
        ))}
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
