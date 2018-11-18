import { connect } from "react-redux";
import { loadHotelDetailIfNeeded } from "../../actions";
import HotelDetailPage from "../../components/page/HotelDetailPage";

const mapStateToProps = (state, ownProps) => {
  const hotelId = ownProps.match.params.id
  const { 
    byId,
    aboutUI: {
      isFetching,
      errorMessage
    }
  } = state.hotelDetail

  return { 
    hotelDetail: byId[hotelId],
    isFetching,
    errorMessage
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => {
    dispatch(loadHotelDetailIfNeeded(
      ownProps.match.params.id
    ))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelDetailPage)