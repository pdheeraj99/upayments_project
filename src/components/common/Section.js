import React from 'react';
import Products from '../section/Products';
import Details from '../section/Details';
import { Route } from 'react-router-dom';
import Create from './Create';

function Section() {
  return (
    <section>
      <Route path='/' component={Products} exact />
      <Route path='/product' component={Products} exact />
      <Route path='/product/:id' component={Details} exact />
      <Route path='/create' component={Create} exact />
    </section>
  );
}

export default Section;
