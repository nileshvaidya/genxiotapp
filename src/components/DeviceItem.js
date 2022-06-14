import React, {useContext, useEffect, useRef,useState, Component, createRef } from 'react'
import {
   BrowserRouter as Router,
   Route,
   Routes,
   Link,
   useNavigate
  } from 'react-router-dom';
//  import { Route, Redirect } from 'react-router-dom'
import DeviceContext from '../context/devices/DeviceContext'
import DeviceDetails from './DeviceDetails';
import { ReactDOM } from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';





export class DeviceItem extends Component {

 constructor(props){
  super();
  // this.myref = createRef(null);
  // this.myrefclose = createRef(null);
  this.state={
    showDetail: false
  }
 }




  handleShowDetails = () =>{
    console.log("button clicked");
    this.setState({
    showDetail:!this.state.showDetail
  })
  // this.myrefclose.current.onClick();
  }

  render() {
      let{title, description,payload, imageUrl,navigation} = this.props;
    return (
     
      <div className="my-3">
          <div className="card bg-dark text-white" style={{width:"19rem"}}>
            <img src={imageUrl} className="card-img-top" alt="device"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="clrd-text">{payload}</p>
                    <button  className="btn btn-sm btn-secondary" onClick= {this.handleShowDetails}>Show Details</button>
                    {this.state.showDetail ? <DeviceDetails/> : null}
                    {/* {!this.state.showDetail ? <DeviceItem/> : null} */}
                </div>
            </div>

      </div>
      
      // </Router>
    )
  }
}

export default DeviceItem