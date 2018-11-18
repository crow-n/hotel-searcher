import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ListView, Toast } from 'antd-mobile';
import HotelCard from '../card/HotelCard';

class HotelList extends PureComponent {
  static propTypes = {
    filter: PropTypes.object.isRequired,
    dataSource: PropTypes.object.isRequired,
    isFetching: PropTypes.bool,
    errorMessage: PropTypes.string,
    loadData: PropTypes.func.isRequired,
    loadMoreData: PropTypes.func.isRequired,
    onScroll: PropTypes.func
  }

  componentDidMount() {
    this.props.loadData()
  }

  componentWillReceiveProps(nextProps) {
    const { filter, isFetching, errorMessage } = nextProps
    // 非 page 引起的 filter 改变, 重新加载数据
    if(filter !== this.props.filter && 
      filter.page === this.props.filter.page
    ) { 
      this.props.loadData() 
      Toast.loading('', 0)
    }
    // 加载完成
    if(!isFetching) {
      Toast.hide()
    }
    // 错误提示 
    if(!isFetching && errorMessage) {
      Toast.info(errorMessage, 2)
    }
  }

  render() {
    const row = (rowData, sectionID, rowID) => {
      return (
        <Link to={`/hotels/hoteldetail/${rowData.hotelId}`} 
          key={rowData.hotelId + rowID}>
          <HotelCard hotel={rowData} />
        </Link>
      )
    }
    const { dataSource, isFetching, loadMoreData, onScroll } = this.props

    return (
      <ListView
        dataSource={dataSource}
        renderRow={row}
        onEndReached={loadMoreData}
        onScroll={onScroll}
        renderFooter={() => (
          <div className="loading-footer">
            {isFetching ? '正在加载...' : '已经到底了'}
          </div>
        )}
        useBodyScroll
        initialListSize={10}
        pageSize={10}
        scrollRenderAheadDistance={500}
        onEndReachedThreshold={300}
      />
    );
  }
}

export default HotelList