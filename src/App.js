
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Devices from './components/Devices';
import DeviceState from './context/devices/DeviceState';
import WebSocketTest from './components/WebSocketTest';

function App () {
  
    
    return (
      <>
        <DeviceState>
          <div>
            <NavBar/>
            <Devices/>
            <WebSocketTest/>

          </div>
        </DeviceState>
      </>
    )
  }

  export default App;