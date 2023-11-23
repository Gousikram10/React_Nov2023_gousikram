// WithProductList.js

import React from 'react';

export function WithProductList(WrappedComponent, products) {
  return function WithProductListWrapper(props) {
    return <WrappedComponent products={products} {...props} />;
  };
}
