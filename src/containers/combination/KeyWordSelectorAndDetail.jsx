import { connect } from "react-redux";
import { toggleKeyWordDetailDrawer } from "../../actions";
import KeyWordSelectorAndDetail from "../../components/combination/KeyWordSelectorAndDetail";

const mapStateToProps = (state) => {
  const { 
    isKeyWordDrawerOpen,
    isKeyWordDetailDrawerOpen,
  } = state.drawerOpenStatus

  return { 
    isKeyWordDrawerOpen,
    isKeyWordDetailDrawerOpen,
  }
}

export default connect(
  mapStateToProps,
  { toggleKeyWordDetailDrawer }
)(KeyWordSelectorAndDetail)