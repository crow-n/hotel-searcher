import { connect } from "react-redux";
import { setCity, loadKeyWordChoicesIfNeeded, toggleCityDrawer } from "../../actions";
import CitySelector from "../../components/sidebar/CitySelector";



const mapDispatchToProps = (dispatch) => {
  const goBack = () => dispatch(toggleCityDrawer())
  return {
    goBack,
    setCity: (cityName) => {
      dispatch(setCity(cityName))
      dispatch(loadKeyWordChoicesIfNeeded(cityName))
      goBack()
    }
  }
}

export default connect(null, mapDispatchToProps)(CitySelector)