import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Header.css';

function Header() {
  return (
    <header>
      <div className='logo'>
        <h3>
          <Link to='/'>UPayments Store</Link>
        </h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/create'>Create</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
