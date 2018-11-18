import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Accordion, Toast } from 'antd-mobile'
import RoomCard from '../card/RoomCard';
import RatePlanCard from '../card/RatePlanCard';

class RoomList extends PureComponent {
  static propTypes = {
    rooms: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    hotelId: PropTypes.string.isRequired,
    inDate: PropTypes.string.isRequired,
    outDate: PropTypes.string.isRequired,
    loadRooms: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { hotelId, inDate, outDate, loadRooms } = this.props
    loadRooms(hotelId, inDate, outDate)
  }

  componentWillReceiveProps(nextProps) {
    const { isFetching, errorMessage } = nextProps
    if(!isFetching && errorMessage) {
      Toast.info(errorMessage, 2)
    }
  }
  
  render() {
    const {
      rooms,
      onClickItem,
    } = this.props

    return (
      <Accordion className="room-list">{
        rooms.map(room => (
          <Accordion.Panel key={room.roomId} header={
            <RoomCard room={room} />
          }>{
            room.ratePlanInfo.map((plan, planIndex) => (
              <RatePlanCard plan={plan} 
                key={room.roomId + planIndex}
                onClick={() => onClickItem(room, plan)} />
            ))
          }</Accordion.Panel>
        ))
      }</Accordion>
    )
  }
}

export default RoomList