import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Car from './Car';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:8080/cars'); // Ensure the URL matches your backend endpoint
      console.log("HERE IS THE CAR LIST DATA -----------------------------------------------------",response.data);
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  return (
    <div>
      <h1>Car List</h1>
      {cars.map((car) => (
        <Car key={car.carID} car={car} /> // Use car.carID instead of car.id
      ))}
    </div>
  );
};

export default CarList;
