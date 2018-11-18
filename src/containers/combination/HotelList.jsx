import { connect } from "react-redux";
import { ListView } from 'antd-mobile';
import { resetPageAndLoadHotels, increasePageAndPushHotelsIfAllowed } from '../../actions';
import { onePageNum } from "../../request/hotel";
import HotelList from "../../components/combination/HotelList";

let dataBlobs, sectionIDs, rowIDs, filterCache

let dataSource = new ListView.DataSource({
  getRowData: (dataBlob, sectionID, rowID) => dataBlob[rowID.slice(1)],
  rowHasChanged: (row1, row2) => row1 !== row2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
})

const update = (list) => {
  dataBlobs = list
  sectionIDs = list.reduce((ids, item, i) => {
    if(i % onePageNum === 0) 
      ids.push('S' + ids.length)
    return ids
  }, [])
  rowIDs = list.reduce((ids, item, i) => {
    if(i % onePageNum === 0)  
      ids.push(['R' + i])
    else
      ids[ids.length - 1].push('R' + i)
    return ids
  }, [])
  dataSource = dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs)
}

const mapStateToProps = (state) => {
  const {
    items: { hotelList },
    aboutUI: { isFetching, errorMessage }
  } = state.hotels
  const { filter } = state

  if(filter !== filterCache) update(hotelList)

  return {
    filter,
    dataSource,
    isFetching,
    errorMessage
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadData: () => {
    dispatch(resetPageAndLoadHotels())
    document.documentElement.scrollTop = 0
  },
  loadMoreData: () => dispatch(increasePageAndPushHotelsIfAllowed())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelList)