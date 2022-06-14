import React, { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom'
//import DeviceItem from './DeviceItem';
import deviceimage from '../Assets/deviceimage.png';
//import GaugeChart from "react-gauge-chart";
import "./style.css";
import DeviceContext from "../context/devices/DeviceContext" 
//import GaugeChart from './GuageChart';
import ReactSpeedometer from 'react-d3-speedometer';
import ToggleSwitch from './ToggleSwitch';

const Devices = () => {

    const context = useContext(DeviceContext)
    const {params, getParams} = context;
    const [checked, setChecked] = useState(false);

    const [currentV1, setCurrentV1] = useState();
    const [currentV2, setCurrentV2] = useState();
    const [currentV3, setCurrentV3] = useState();
    const [arcs, setArcs] = useState([0.5, 0.3, 0.2])

	useEffect(() => {
        getParams();
		// const timer = setTimeout(() => {
        //     setCurrentV1(Math.random());
        //     setCurrentV2(Math.random());
        //     setCurrentV3(Math.random());
        //     setArcs([0.1, 0.5, 0.4])
      
		// }, []);

		// return () => {
		// 	clearTimeout(timer);
		// };
         console.log(params);
	},[]);

	const chartStyle = {
		height: 250,
	}

  
 
      
    return (
        <>
        <div className='container my-3'>
            <h1 className="text-center">SB Fabricators - Thane</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <ReactSpeedometer forceRender={true} currentValueText="Ph 1 Voltage 1 (V): #{value}" currentValuePlaceholderStyle={'#{value}'}  minValue={0} maxValue={300} value={params.V1} segments={3} needleColor="steelblue" needleTransitionDuration={4000} needleTransition="easeElastic"/>
                    
                    </div>	
                     <div className="col">
                        <ReactSpeedometer forceRender={true} currentValueText="Ph 2 Voltage (V): #{value}" currentValuePlaceholderStyle={'#{value}'}  minValue={0} maxValue={300} value={params.V2} segments={3} needleColor="steelblue" needleTransitionDuration={4000} needleTransition="easeElastic"/>
                    </div>
                    <div className="col">
                        <ReactSpeedometer forceRender={true} currentValueText="Ph 3 Voltage (V): #{value}" currentValuePlaceholderStyle={'#{value}'}  minValue={0} maxValue={300} value={params.V3} segments={3} needleColor="steelblue" needleTransitionDuration={4000} needleTransition="easeElastic"/>
                    </div> 
                </div>
                <div className="row">
                    <div className="col">
                    <ReactSpeedometer forceRender={true} currentValueText="Ph 1 Current (Amps): #{value}" currentValuePlaceholderStyle={'#{value}'}  minValue={0} maxValue={100} value={params.I1} segments={3} needleColor="steelblue" needleTransitionDuration={4000} needleTransition="easeElastic"/>
                    </div>	
                     <div className="col">
                        <ReactSpeedometer forceRender={true} currentValueText="Ph 2 Current (Amps): #{value}" currentValuePlaceholderStyle={'#{value}'}  minValue={0} maxValue={100} value={params.I2} segments={3} needleColor="steelblue" needleTransitionDuration={4000} needleTransition="easeElastic"/>
                    </div>
                    <div className="col">
                        <ReactSpeedometer forceRender={true} currentValueText="Ph 3 Current (Amps): #{value}" currentValuePlaceholderStyle={'#{value}'}  minValue={0} maxValue={100} value={params.I3} segments={3} needleColor="steelblue" needleTransitionDuration={4000} needleTransition="easeElastic"/>
                    </div> 
                </div>
                <div className="row">
                    <div className="col">
                    <ReactSpeedometer forceRender={true} currentValueText="PF 1 (%): #{value}" currentValuePlaceholderStyle={'#{value}'}  minValue={0} maxValue={100} value={params.PF1} segments={3} needleColor="steelblue" needleTransitionDuration={4000} needleTransition="easeElastic"/>
                    </div>	
                     <div className="col">
                        <ReactSpeedometer forceRender={true} currentValueText="PF2 (%): #{value}" currentValuePlaceholderStyle={'#{value}'}  minValue={0} maxValue={100} value={params.PF2} segments={3} needleColor="steelblue" needleTransitionDuration={4000} needleTransition="easeElastic"/>
                    </div>
                    <div className="col">
                        <ReactSpeedometer forceRender={true} currentValueText="Pf3 (%): #{value}" currentValuePlaceholderStyle={'#{value}'}  minValue={0} maxValue={100} value={params.PF3} segments={3} needleColor="steelblue" needleTransitionDuration={4000} needleTransition="easeElastic"/>
                    </div> 
                </div>
                <div className="row">
                    <div className="col">
                    <ReactSpeedometer forceRender={true} currentValueText="Frequency (Hz): #{value}" currentValuePlaceholderStyle={'#{value}'}  minValue={0} maxValue={100} value={params.FREQ} segments={3} needleColor="steelblue" needleTransitionDuration={4000} needleTransition="easeElastic"/>
                    </div>	
                     <div className="col">
                        <ReactSpeedometer forceRender={true} currentValueText="MKWH (KWH): #{value}" currentValuePlaceholderStyle={'#{value}'}  minValue={0} maxValue={100} value={params.MkWh} segments={3} needleColor="steelblue" needleTransitionDuration={4000} needleTransition="easeElastic"/>
                    </div>
                    <div className="col">
                        <ToggleSwitch id="D0" checked={ params.D0 === 0?false:true } onChange={checked => setChecked(checked)} OnName = "D0 ON" OffName = "D0 Off" />
                        <label htmlFor="D0">D0 Status</label>
                        
                    </div>
                    <div className="row">
                    <div className="col">
                        <ToggleSwitch id="D1" checked={ params.D1 === 0?false:true } onChange={checked => setChecked(checked)} OnName = "D0 ON" OffName = "D0 Off" />
                        <label htmlFor="D1">D1 Status</label>
                    </div>	
                     <div className="col">
                         <ToggleSwitch id="D2" checked={ params.D2 === 0?false:true } onChange={checked => setChecked(checked)} OnName = "D0 ON" OffName = "D0 Off" />
                        <label htmlFor="D2">D2 Status</label>
                    </div>
                    <div className="col">
                        <ToggleSwitch id="D3" checked={ params.D3 === 0?false:true } onChange={checked => setChecked(checked)} OnName = "D0 ON" OffName = "D0 Off" />
                        <label htmlFor="D3">D3 Status</label>
                        
                    </div>
                    </div>
                    <div className="row my-4">
                    <div className="col">
                        <ToggleSwitch id="D4" checked={ params.D4 === 0?false:true } onChange={checked => setChecked(checked)} OnName = "D0 ON" OffName = "D0 Off" />
                        <label htmlFor="D4">D4 Status</label>
                    </div>	
                     <div className="col">
                         <ToggleSwitch id="D5" checked={ params.D5 === 0?false:true } onChange={checked => setChecked(checked)} OnName = "D0 ON" OffName = "D0 Off" />
                        <label htmlFor="D5">D5 Status</label>
                    </div>
                   
                    </div>
                </div>
                </div>
           
        </div>
        </>
    )
  }


export default Devices