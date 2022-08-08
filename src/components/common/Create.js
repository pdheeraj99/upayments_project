import axios from 'axios';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Token from '../Auth/Token';
import '../css/Form.css';
import { DataContext } from './Context';

const Create = () => {
  const { setValue } = useContext(DataContext);
  const history = useHistory();
  const [data, setData] = useState({
    name: '',
    description: '',
    avatar: '',
    category: '',
    price: '',
    developerEmail: 'pilladheeraj@gmail.com',
  });

  // Considering validated data is entered by user
  const handleForm = (event) => {
    event.preventDefault();

    const config = {
      headers: { Authorization: `Bearer ${Token}` },
    };

    const body = {
      ...data,
      price: Number(data['price']),
    };
    axios
      .post(
        'https://upayments-studycase-api.herokuapp.com/api/products/',
        body,
        config
      )
      .then(() => {
        history.push('/');
        setValue('call');
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleForm}>
        <div className='row'>
          <div className='col-25'>
            <label>Product Name</label>
          </div>
          <div className='col-75'>
            <input
              type='text'
              id='fname'
              name='firstname'
              placeholder='Enter Name..'
              onChange={(event) => {
                setData({
                  ...data,
                  name: event.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-25'>
            <label>Description</label>
          </div>
          <div className='col-75'>
            <textarea
              id='subject'
              name='subject'
              placeholder='Describe product..'
              onChange={(event) => {
                setData({
                  ...data,
                  description: event.target.value,
                });
              }}
            ></textarea>
          </div>
        </div>
        <div className='row'>
          <div className='col-25'>
            <label>Image URL</label>
          </div>
          <div className='col-75'>
            <input
              type='text'
              id='lname'
              name='lastname'
              placeholder='Enter Image Url..'
              onChange={(event) => {
                setData({
                  ...data,
                  avatar: event.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-25'>
            <label>Category</label>
          </div>
          <div className='col-75'>
            <select
              id='country'
              name='country'
              onClick={(event) => {
                setData({
                  ...data,
                  category: event.target.value,
                });
              }}
            >
              <option value=''></option>
              <option value='mobile'>Mobile</option>
              <option value='Electronics'>Electronics</option>
              <option value='camera'>Camera</option>
              <option value='desktop'>Desktop</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='col-25'>
            <label>Price</label>
          </div>
          <div className='col-75'>
            <input
              type='text'
              id='lname'
              name='lastname'
              placeholder='Enter price..'
              onChange={(event) => {
                setData({
                  ...data,
                  price: event.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className='row'>
          <input className='button' type='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
};

export default Create;
