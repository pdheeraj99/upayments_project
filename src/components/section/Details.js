import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DataContext } from '../common/Context';
import '../css/Details.css';

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { prod } = useContext(DataContext);

  const getProduct = useCallback(() => {
    const res = prod;
    const data = res.filter((item) => {
      return item._id === id;
    });
    setProduct(data);
  }, [prod, id]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <div>
      {product.map((item) => (
        <div className='details' key={item._id}>
          <img src={item.avatar} alt='' />
          <div className='box'>
            <div className='row'>
              <h2>{item.name}</h2>
            </div>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>Rs {item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Details;
