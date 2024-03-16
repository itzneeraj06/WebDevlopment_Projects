import React from 'react';
import Card from './Card';
import data from './Data';
import'./card.css';
const Cards = ({category}) => {
    
  
    return (
        <div className='card'>
            {data.map((item, i) => (
                (category==="All")?<Card  id={item.id} title={item.title} des={item.description} url={item.image.url} />:((item.category===category)?<Card  id={item.id} title={item.title} des={item.description} url={item.image.url} />:null)            ))}
        </div>
    );
}

export default Cards;
