
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Devices from './components/Devices';
import DeviceState from './context/devices/DeviceState';

function App () {
  
    
    return (
      <>
        <DeviceState>
          <div>
            <NavBar/>
            <Devices/>
          </div>
        </DeviceState>
      </>
    )
  }

  export default App;