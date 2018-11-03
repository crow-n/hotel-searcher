import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { ListView, Toast } from 'antd-mobile';

import HotelCard from '../card/hotelCard';
import { onePageNum, searchHotel } from "../../request/hotel";

const NUM_SECTIONS = 1;
const NUM_ROWS_PER_SECTION = onePageNum;

let dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];

function genData(data, pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = data[i * NUM_ROWS_PER_SECTION + jj];
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}

// HotelsResultPage 组件
class HotelList extends Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      hasMore: true,
      height: document.documentElement.clientHeight * 3 / 4,
    };
  }

  reset() {
    dataBlobs = {}
    sectionIDs = []
    rowIDs = []
  }

  requestAndSet(filter) {
    searchHotel(filter)
    .then(hotels => {
      if(typeof hotels !== 'string') {
        genData(hotels.hotelList, filter.page)
        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
          count: hotels.count,
          isLoading: false,
        });
      } else {
        Toast.info(hotels, 2)
        this.setState({isLoading: false})
      }
    })
  }

  componentWillUnmount() {
    this.reset()

  }

  componentDidMount() {
    const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
    this.setState({
      height: hei,
    })
    this.requestAndSet(this.props.filter)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filter !== this.props.filter) {
      this.reset()
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: true
      })
      this.requestAndSet(nextProps.filter)
    }
  }

  onEndReached = () => {
    // 如果已经加载到 最后一页 了, hasMore = false
    if(this.props.filter.page + 1 >= Math.ceil(this.state.count / NUM_SECTIONS / NUM_ROWS_PER_SECTION)) {
      this.setState({ hasMore: false })
    }
    // 如果 正在加载 或 已经加载到最后一页, 退出函数
    if (this.state.isLoading || !this.state.hasMore) {
      return
    }
    // 否则 设置 加载状态 为 正在加载, 请求 数据 
    this.setState({ isLoading: true });

    this.props.filter.page++
    this.requestAndSet(this.props.filter)
  }


  render() {
    const row = (rowData, sectionID, rowID) => {
      return (
        <HotelCard key={rowID}  hotel={rowData} />
      );
    };
    const MyBody = this.props.body

    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderBodyComponent={() => <MyBody />}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? '正在加载...' : '已经到底了'}
        </div>)}
        renderRow={row}
        style={{
          height: this.state.height,
          // overflow: 'auto',
        }}
        initialListSize={10}
        pageSize={5}
        scrollRenderAheadDistance={500}
        onScroll={this.props.onScroll}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={50}
      />
    );
  }
}

export default HotelList