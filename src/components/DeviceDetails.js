import React, { Component } from 'react'

export class DeviceDetails extends Component {


  async componentDidMount(){
    //let{payload} = this.props;
   // console.log(payload);
  }



  render() {
    let{ imageUrl} = this.props;
    return (
      <div className="my-3">
      <div className="card bg-dark text-white" style={{width:"19rem"}}>
        <img src={imageUrl} className="card-img-top" alt="device"/>
            <div className="card-body">
                <h5 className="card-title">"ttt"</h5>
                <p className="card-text">DD</p>
                
            </div>
        </div>

  </div>
    )
  }
}

export default DeviceDetails