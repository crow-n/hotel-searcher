import React, { PureComponent } from 'react'
import { Icon } from "antd-mobile";
import { Map } from 'react-amap';

class MyMap extends PureComponent {
  render() {
    return (
      <div className="map-container">
        <div className="back" onClick={this.props.onOpenChange}>
          <Icon type="left" size="lg" color="#666" />
        </div>
        <Map 
          plugins={['ToolBar']} 
          zoom={18} 
          center={[this.props.long, this.props.lat]} />
      </div>
    )
  }
}
export default MyMap