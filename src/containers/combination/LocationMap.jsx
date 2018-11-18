import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import { Drawer } from "antd-mobile";
import { toggleMapDrawer } from '../../actions'
import Map from '../../components/sidebar/Map'

class LocationMap extends PureComponent {
  render() {
    const {
      detail,
      isMapDrawerOpen,
      toggleMapDrawer
    } = this.props

    return (<div>
      <div className="address-wrapper" onClick={toggleMapDrawer}>
        <p className="address">{detail.address}</p>
        <i className="iconfont icon-dingwei"></i>
      </div>
      <Drawer
        position="right"
        open={isMapDrawerOpen}
        sidebar={
          <Map
            lat={detail.location.latitudeGoogle * 1}
            long={detail.location.longitudeGoogle * 1}
            goBack={toggleMapDrawer} />
        } />
    </div>)
  }
}

const mapStateToProps = (state) => {
  const {
    isMapDrawerOpen
  } = state.drawerOpenStatus
  return {
    isMapDrawerOpen
  }
}

export default connect(
  mapStateToProps,
  { toggleMapDrawer }
)(LocationMap)