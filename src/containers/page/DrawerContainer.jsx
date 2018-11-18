import { connect } from "react-redux";
import { toggleDateDrawer, toggleStarPriceDrawer, toggleSortOrderDrawer } from "../../actions";
import DrawerContainer from "../../components/page/DrawerContainer";

const mapStateToProps = (state) => {
  const { 
    isCityDrawerOpen,
    isDateDrawerOpen,
    isStarPriceDrawerOpen,
    isSortOrderDrawerOpen,
  } = state.drawerOpenStatus

  return { 
    isCityDrawerOpen,
    isDateDrawerOpen,
    isStarPriceDrawerOpen,
    isSortOrderDrawerOpen,
  }
}

export default connect(
  mapStateToProps,
  { 
    toggleDateDrawer, 
    toggleStarPriceDrawer,
    toggleSortOrderDrawer
  }
)(DrawerContainer)