import React from 'react';
import './filter.css'
const Filter = ({filterdata,setCategory}) => {
  let filterdata2 = filterdata;
   

  function filterhandleer(title) {
    setCategory(title)

  }




  return (
    <div className='filter1'>
      {filterdata2.map((item, i) => (
        <button className='filter' key={i} onClick={()=>filterhandleer(item.title)}>{item.title}</button>
      ))}
    </div>
  );
};

export default Filter;


