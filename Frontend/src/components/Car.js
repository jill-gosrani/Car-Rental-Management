import React from 'react';

const Car = ({ car }) => {
  return (
    <div>
      <h2>{car.carName}</h2>
      <ul>
        <li>
          Car Model: {car.carModel} 
        </li>
        <li>
          Car Number: {car.carNumber} 
        </li>
        <li>
          Type: {car.type} 
        </li>
        <li>
          Available: Rs.{car.price} 
        </li>
        <li>
          Insured: Rs.{car.price} 
        </li>
        <li>
          Insured type: Rs.{car.price} 
        </li>
        <li>
          Price: Rs.{car.price} 
        </li>
      </ul>
    </div>
  );
};

export default Car;
