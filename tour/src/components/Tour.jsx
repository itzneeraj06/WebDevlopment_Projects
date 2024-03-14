import React from 'react';
import Card from './Card';

const Tour = ({ tour, removetour }) => {
    return (
        <div>
            {
                tour.map((tour) => {
                    return <Card {...tour} removetour={removetour} />
                })
            }
        </div>
    )
}

export default Tour