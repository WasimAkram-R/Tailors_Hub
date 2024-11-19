import React, { useState } from 'react';

import Pagination from 'react-bootstrap/Pagination';
import One from '../Pagination/One/One';
import Two from '../Pagination/Two/Two';
import Three from '../Pagination/Three/Three';
import Four from '../Pagination/Four/Four';
import Five from '../Pagination/Five/Five';

const Customers = () => {

   // State to keep track of the current page
   const [currentPage, setCurrentPage] = useState(1);

   // Data or components to be displayed based on page number
   const renderPageContent = () => {
     switch (currentPage) {
       case 1:
         return (
         <> <One/> </>
        ); 
       case 2:
         return (
         <> <Two/> </>
         ); 
       case 3:
        return (
          <> <Three/> </>
          );
       case 4:
        return (
          <> <Four/> </>
          );
       case 5:
        return (
          <> <Five/> </>
          );
       default:
         return <div>Content not found.</div>;
     }
   };
 
   // Handle page change
   const handlePageChange = (pageNumber) => {
     setCurrentPage(pageNumber);
   };


  return (
   
    
    <>


<div className="container pt-5">

           
           <div className='pb-5'>
           <h2 className='text-center'>Tailors Showcase</h2>

<p className='pt-3 text-center'>Tailoring Elegance, One Stitch at a Time.</p>

<p className='text-center'>Custom design that fit your style and personality.</p>
           </div>
             
             <div className='text-center'>
             <h2>Find And Connect A Tailor</h2>
           </div>
            <div className="row">
            </div>
</div> 



    <div className="container pt-5">
      {/* Pagination controls on top */}
      <Pagination className="justify-content-center mb-4">
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />
        
        {/* Dynamically generate Pagination.Items based on number of pages */}
        {[1, 2, 3, 4, 5].map((page) => (
          <Pagination.Item 
            key={page} 
            active={page === currentPage} 
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Pagination.Item>
        ))}
        
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />
        <Pagination.Last onClick={() => handlePageChange(5)} />
      </Pagination>

      {/* Content below pagination */}
      <div className="row">
        {renderPageContent()} {/* Conditionally render content based on current page */}
      </div>
    </div>
  </>

  )
}

export default Customers














