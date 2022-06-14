import React, { useState } from "react";
import DeviceContext from "./DeviceContext";

const DeviceState = (props) =>{
    var proxyURL = 'https://cors-anywhere.herokuapp.com/'
    var host = 'https://genxiot.com:1880';
    //console.log(host);
    const paramInitial = []
    const[params, setParams] = useState(paramInitial)

    //Get All Devices
    const getParams = async() =>{
        // API Call
       // console.log({host});
      // getParams.preventDefaults();
        const response = await fetch( `${host}/get/860657053870875`, {
            method: 'GET',    
            headers: {
            //   'Content-Type': 'application/json',
            //   'auth-token' : "BXYscfdrsjnn12897hyggtergglapohetdfcadr42637jhqy6qfa",// localStorage.getItem('token')     
            },    
            
          });
        
        getParams().catch(err => {
             //console.log(err);
            // do something with the error here
        });

        //console.log = response;
        const json = await response.json()
        //console.log = json;
        setParams(json);
    }

    return(
        <DeviceContext.Provider value={{params,  getParams}}>
            {props.children}
        </DeviceContext.Provider>
    )


}

export default DeviceState;