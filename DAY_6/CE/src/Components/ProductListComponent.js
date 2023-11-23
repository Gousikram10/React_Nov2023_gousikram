// ProductListComponent.js

import React from 'react';

function ProductListComponent({ products }) {
  return (
    <ul role="list">
      {products.map((product) => (
        <li key={product.id} role="listitem">
          <div>{product.name}</div>
          <div>${product.price.toFixed(2)}</div>
        </li>
      ))}
    </ul>
  );
}

export default ProductListComponent;
