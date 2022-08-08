import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../common/Context';
import '../css/Products.css';

function Products() {
  const { prod } = useContext(DataContext);
  return (
    <div id='product'>
      {prod.map((product) => (
        <div className='card' key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img src={product.avatar} alt='' />
          </Link>
          <div className='content'>
            <h3>
              <Link to={`/product/${product._id}`}>{product.title}</Link>
            </h3>
            <span>${product.price}</span>
            <p>{product.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
