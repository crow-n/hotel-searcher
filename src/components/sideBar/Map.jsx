import React, { PureComponent } from 'react'
import PropTypes from "prop-types";
import { Icon } from "antd-mobile";
import { Map } from 'react-amap';

const plugins = ['ToolBar']

class MyMap extends PureComponent {
  static propTypes = {
    long: PropTypes.number.isRequired, 
    lat: PropTypes.number.isRequired, 
    goBack: PropTypes.func.isRequired
  }

  render() {
    const { long, lat, goBack } = this.props
    return (
      <div className="map-container">
        <div className="back" onClick={goBack}>
          <Icon type="left" size="lg" color="#666" />
        </div>
        <Map 
          plugins={plugins} 
          zoom={17} 
          center={[long, lat]} />
      </div>
    )
  }
}
export default MyMap