import React from 'react'
import '../index.css'
const Card = (props) => {
  return (
    <div className='c1'>
      <div className='c8'>
        <div>
          <p className='c2'>{props.title}</p>
          <p className='c4'>Category:<span>{props.category}</span></p>
        </div>

      </div>
      <p className='c6'>{props.content}</p>
      <span className='c7'>
        {props.tag.map((item) => (<span>{`#${item} `}</span>))}
      </span>
      <div className='c9'>
        <p className='c5'>{props.date}</p>
        <p className='c3'>by <span>{props.author}</span></p>


      </div>
    </div>

  )
}

export default Card