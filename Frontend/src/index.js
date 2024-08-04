// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import CarList from './components/CarList';
import CarForm from './components/CarForm';

const App = () => (
  <div>
    <CarForm />
    <CarList />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
