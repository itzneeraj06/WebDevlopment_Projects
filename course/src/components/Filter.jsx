import React from 'react';
import './filter.css'
const Filter = (props) => {
  let filterdata = props.filterdata;

  return (
    <div className='filter1'>
      {filterdata.map((item, i )=> (
        <button className='filter'  key={i}>{item.title}</button>
      ))}
    </div>
  ); 
};

export default Filter;



