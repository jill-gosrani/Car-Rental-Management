// src/components/CarForm.js

import React, { useState } from 'react';
import axios from 'axios';

const CarForm = () => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [number, setNumber] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCar = { carName: name, carModel: model, carNumber: number, type, price };
    console.log(newCar);
    try {
      await axios.post('http://localhost:8080/cars/add/', newCar);
      alert('Car added successfully!');
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Model:</label>
        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
      </div>
      <div>
        <label>Number:</label>
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} required />
      </div>
      <div>
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="COMPACT">COMPACT</option>
          <option value="SEDAN">SEDAN</option>
          <option value="FULL-SIZE SEDAN">FULL-SIZE SEDAN</option>
          <option value="SUV">SUV</option>
          <option value="FULL-SIZE SUV">FULL-SIZE SUV</option>
          <option value="TRUCK">TRUCK</option>
          <option value="PREMIUM">PREMIUM</option>
        </select>
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <button type="submit">Add Car</button>
    </form>
  );
};

export default CarForm;
