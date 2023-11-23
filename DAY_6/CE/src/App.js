// app.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WithProductList } from './WithProductList';
import ProductListComponent from './ProductListComponent';

const Products = [
  { id: 1, name: 'Product 1', price: 19.99, imageUrl: 'product1.jpg' },
  { id: 2, name: 'Product 2', price: 29.99, imageUrl: 'product2.jpg' },
];

const EnhancedProductList = WithProductList(ProductListComponent, Products);

function App() {
  return (
    <div>
      <h1>Product List</h1>
      <EnhancedProductList />
    </div>
  );
}

export default App;

// Assuming this is your main entry point for your React application.
