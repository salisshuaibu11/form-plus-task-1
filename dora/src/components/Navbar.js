import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
      <nav>
          <h1 className="logo">AGSM</h1>
          <ul className='nav-links'>
              <Link to='/'>
                  <li>Home</li>
              </Link>

              <Link to='/apply'>
                  <li>Apply</li>
              </Link>

              <Link>
                  <li>About</li>
              </Link>

              <Link>
                  <li>The Team</li>
              </Link>
          </ul>
      </nav>
  );
}


export default Navbar;
