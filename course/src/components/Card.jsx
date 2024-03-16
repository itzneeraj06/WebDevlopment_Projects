import React from 'react'
import './card.css'
const Card = (props) => {
  return (
    <div className='c1'>
      <div className='c2'><img src={props.url} alt="error" className='c3' /></div>
      <div className='c4'>
        <h3 className='c5'>{props.title}</h3>
        <p className='c6'>
          {
            props.des.length>100?
              props.des.substr(0,150)+"...":props.des
            }
{/* kaam ki chiz kari hai ... lga ke substring  */}
        </p>
      </div>
    </div>
  )
}

export default Card