import React from 'react';
import Dispatchers from './Dispatchers';


export const NavBar = () => (
  <nav className="navigation">
    <img src="light.png" alt="logo" height="40"/>
    <h1>Thinking in <strong>Redux</strong></h1>
    <Dispatchers />
  </nav>
);
