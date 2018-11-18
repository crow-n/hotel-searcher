import { connect } from "react-redux";
import { setKeyWords, toggleKeyWordDrawer, toggleKeyWordDetailDrawer } from "../../actions";
import TwoLevelMenu from "../../components/sidebar/TwoLevelMenu";

const mapDispatchToProps = (dispatch) => ({
  goBack: () => dispatch(toggleKeyWordDetailDrawer()),
  onSelect: (keyWords) => {
    dispatch(setKeyWords(keyWords))
    dispatch(toggleKeyWordDetailDrawer())
    dispatch(toggleKeyWordDrawer())
  }
})
export default connect(null, mapDispatchToProps)(TwoLevelMenu)