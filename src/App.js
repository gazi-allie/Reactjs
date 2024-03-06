import './App.css';
import React from 'react';

import Product from './components/Product';

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'MISWAK',
      amount: 200,
      date: new Date(2024, 3, 10),
    },
    {
      id: 'p2',
      title: 'MISWAK',
      amount: 200,
      date: new Date(2024, 3, 10),
    },
    {
      id: 'p3',
      title: 'MISWAK',
      amount: 200,
      date: new Date(2024, 3, 10),
    },
    {
      id: 'p4',
      title: 'MISWAK',
      amount: 200,
      date: new Date(2024, 3, 10),
    },
  ];
  return (
    <div>
      <Product items={products}></Product>
    </div>
  );
};

export default App;
