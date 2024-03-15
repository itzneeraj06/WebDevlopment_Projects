import React from 'react';

const Card = (props) => {
    const { id, image, price, city, info, removetour } = props;

    const handleRemoveTour = () => {
        // Call the removetour function with the correct id
        removetour(id);
    };

    return (
        <div>
            <img src={image} alt="" height={200}/>
            <p>{price}</p>
            <p>{city}</p>
            <p>{info}</p>
            <button onClick={handleRemoveTour}>
                not interested
            </button>
        </div>
    );
};

export default Card;
