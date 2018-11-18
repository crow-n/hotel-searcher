import { connect } from "react-redux";
import { setKeyWords, toggleKeyWordDrawer } from "../../actions";
import KeyWordSelector from "../../components/sidebar/KeyWordSelector";

const mapStateToProps = (state) => {
  const { 
    aboutUI: { 
      isFetching, 
      errorMessage 
    }, 
    byCityName 
  } = state.keyWordChoices
  
  return {
    isFetching,
    errorMessage,
    keyWordChoices: byCityName[state.filter.cityName] || []
  }
}

const mapDispatchToProps = (dispatch) => ({
  goBack: () => dispatch(toggleKeyWordDrawer()),
  setKeyWords: (keyWords) => {
    dispatch(setKeyWords(keyWords))
    dispatch(toggleKeyWordDrawer())
  }
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(KeyWordSelector)