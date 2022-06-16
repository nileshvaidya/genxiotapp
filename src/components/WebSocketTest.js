import React, { useEffect } from 'react';
import WSC from './WebSocketClient';


const WebSocketTest = ({}) => {

    useEffect(()=>{
        WSC.connect();
        WSC.waitForSocketConnection(()=>{
           console.log("Finally Connected.....")
        });
        
    
    },[])

    const newMessage = () =>{
        let msg = WSC.socketNewMessage();
        console.log('Message from server...' + msg);
        return msg;
        
    }

    return (
    <>
    <p>Connected....</p>
    
    </>
    );
}

export default WebSocketTest;