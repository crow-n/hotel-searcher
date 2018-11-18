import React, { PureComponent } from 'react'
import { Drawer } from 'antd-mobile'
import { connect } from "react-redux";
import RoomList from './RoomList';
import RatePlanDetail from '../../components/sidebar/RatePlanDetail';
import { toggleRoomsDrawer } from "../../actions";

class RoomListAndPlanDetail extends PureComponent {
  state = {
    room: undefined,
    plan: undefined
  }

  setRatePlanDetailAndOpen = (room, plan) => {
    this.setState({ room, plan })
    const { isRoomsDrawerOpen, toggleRoomsDrawer } = this.props
    const ratePlanContent = document.getElementById('ratePlanContent')
    if(ratePlanContent && !isRoomsDrawerOpen) {
      ratePlanContent.scrollTop = 0
    }
    toggleRoomsDrawer()
  }

  render() {
    const { hotelId, isRoomsDrawerOpen, toggleRoomsDrawer } = this.props

    return (<div>
      <RoomList hotelId={hotelId} 
        onClickItem={this.setRatePlanDetailAndOpen} />
      <Drawer
        position="bottom"
        open={isRoomsDrawerOpen}
        onOpenChange={toggleRoomsDrawer}
        sidebar={
          <RatePlanDetail {...this.state} />
      } />
    </div>)
  }
}

const mapStateToProps = (state) => {
  const { isRoomsDrawerOpen } = state.drawerOpenStatus
  return { isRoomsDrawerOpen }
}

export default connect(
  mapStateToProps,
  { toggleRoomsDrawer }
)(RoomListAndPlanDetail) 