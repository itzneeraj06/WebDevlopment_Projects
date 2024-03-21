import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import '../index.css'
const Pagination = () => {
  const { page, handlePageChange, totalPage } = useContext(AppContext);
  return (
    <div className='p1'>
      <div className="p2">
        {
          page > 1 &&
          <button onClick={() => (handlePageChange(page - 1))}>
            Previous
          </button>
        }
        {
          page < totalPage &&
          <button onClick={() => (handlePageChange(page + 1))}>
            Next
          </button>

        }
        <p>page {page} of {totalPage}</p>
      </div>



    </div>
  )
}

export default Pagination