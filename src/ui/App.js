import React from 'react';
import './App.css';

import {DevTools} from './DevTool';
import {NavBar} from './Nav';
import {Footer} from './Footer';

export const App = () => (
  <div>
    <NavBar/>
    <DevTools/>
    <Footer/>
  </div>
);
