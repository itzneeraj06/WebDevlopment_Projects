import React from 'react';
import Card from './Card';
import data from './Data';
import'./card.css'
const Cards = () => {
    return (
        <div className='card'>
            {data.map((item, i) => (
                <Card  id={item.id} title={item.title} des={item.description} url={item.image.url} />
            ))}
        </div>
    );
}

export default Cards;
