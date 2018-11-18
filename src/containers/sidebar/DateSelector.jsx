import { connect } from "react-redux";
import { setInDate, setOutDate, toggleDateDrawer } from "../../actions";
import DateSelector from "../../components/sidebar/DateSelector";

const mapDispatchToProps = (dispatch) => {
  const onCancel = () => dispatch(toggleDateDrawer())
  return {
    onCancel,
    setDate: (inDate, outDate) => {
      dispatch(setInDate(inDate))
      dispatch(setOutDate(outDate))
      setTimeout(onCancel, 100)
    }
  }
}

export default connect(null, mapDispatchToProps)(DateSelector)