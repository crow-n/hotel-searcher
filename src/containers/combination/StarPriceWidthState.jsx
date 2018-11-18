import { connect } from "react-redux";
import { setStar, setMinPrice, setMaxPrice, toggleStarPriceDrawer } from "../../actions";
import StarPriceWidthState from "../../components/combination/StarPriceWidthState";

const mapStateToProps = (state) => {
  const { minPrice, maxPrice, star } = state.filter
  const { isStarPriceDrawerOpen } = state.drawerOpenStatus
  const starMap = star.map(el => ({...el}))
  return {
    minPrice,
    maxPrice,
    starMap,
    isStarPriceDrawerOpen
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (star, minPrice, maxPrice) => {
    dispatch(setStar(star))
    dispatch(setMinPrice(minPrice))
    dispatch(setMaxPrice(maxPrice))
    dispatch(toggleStarPriceDrawer())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarPriceWidthState)