import { connect } from "react-redux";
import { loadRooms } from '../../actions'
import RoomList from '../../components/combination/RoomList';

const mapStateToProps = (state) => {
  const {
    items,
    aboutUI: {
      isFetching,
      errorMessage
    }
  } = state.rooms
  const { inDate, outDate } = state.filter

  return {
    rooms: items,
    isFetching,
    errorMessage,
    inDate, 
    outDate
  }
}

export default connect(
  mapStateToProps,
  { loadRooms }
)(RoomList)