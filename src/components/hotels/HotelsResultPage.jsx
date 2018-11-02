import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { ListView } from 'antd-mobile';

import HotelCard from '../card/hotelCard';
import { onePageNum } from "../../request/hotel";

function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span >you can custom body wrap element</span>
      {props.children}
    </div>
  );
}

const NUM_SECTIONS = 1;
const NUM_ROWS_PER_SECTION = onePageNum;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];

async function requestHotels() {
  const hotels = {
    "hotelList": [
      {
        "facilities": [
          "免费wifi",
          "停车场",
          "24小时热水"
        ],
        "address": "罗湖区黄贝岭凤凰路181号凤凰印象大厦B座7H（门铃0708）",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/f25f3e79-c4b0-4ec9-9e4d-7856f74ebdaa.jpg"
          }
        ],
        "hotelId": 625196,
        "startPrice": "288",
        "name": "深圳爱情鸟公寓",
        "location": {
          "lat": "22.547555",
          "lng": "114.13339"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "24小时热水"
        ],
        "address": "龙岗区深圳大鹏新区较场尾较四西四巷",
        "pictures": [],
        "hotelId": 1929805689,
        "startPrice": "288",
        "name": "深圳千里缘公寓",
        "location": {
          "lat": "22.598167",
          "lng": "114.474547"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "24小时热水"
        ],
        "address": "龙岗区大鹏新区较四西四巷5号",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/65a2a55a-9d91-4adc-84f4-1e34123f5d2f.jpg"
          }
        ],
        "hotelId": 1626174326,
        "startPrice": "288",
        "name": "深圳壹品寒舍",
        "location": {
          "lat": "22.58697",
          "lng": "114.508622"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "餐厅",
          "停车场",
          "接机服务",
          "免费洗漱用品",
          "健身房",
          "会议室",
          "24小时热水"
        ],
        "address": "宝安区石岩镇浪心社区",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/1b716563-9723-4e87-ba73-534ae5aa045f.jpg"
          }
        ],
        "hotelId": 731282,
        "startPrice": "288",
        "name": "深圳长丰花园酒店",
        "location": {
          "lat": "22.672437",
          "lng": "113.921387"
        },
        "starName": "四星级"
      },
      {
        "facilities": [
          "24小时热水"
        ],
        "address": "南山区深圳南山区科技路654号大冲新城花园",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/87611f88-21d5-46dc-afea-43d2a75f41c3.jpg"
          }
        ],
        "hotelId": 1921919296,
        "startPrice": "288",
        "name": "深圳朴宿普通公寓",
        "location": {
          "lat": "22.542482",
          "lng": "113.95161"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "餐厅",
          "停车场",
          "免费洗漱用品",
          "游泳池",
          "会议室",
          "24小时热水"
        ],
        "address": "光明新区公明街道振明路30号",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/d0b4ec73-a0fb-481a-ad74-93b99e67717f.jpg"
          }
        ],
        "hotelId": 197600785,
        "startPrice": "288",
        "name": "深圳宝明城大酒店(光明新区店)",
        "location": {
          "lat": "22.775824",
          "lng": "113.903187"
        },
        "starName": "高档型"
      },
      {
        "facilities": [
          "停车场",
          "24小时热水"
        ],
        "address": "南山区粤海街道大冲新城花园2栋2D1209",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/99022579-e0f0-46cf-94d6-7c6679dbc99a.jpg"
          }
        ],
        "hotelId": 1952060712,
        "startPrice": "288",
        "name": "深圳缘宿公寓",
        "location": {
          "lat": "22.541793",
          "lng": "113.952151"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "停车场",
          "免费洗漱用品",
          "24小时热水"
        ],
        "address": "罗湖区宝安南路1050号嘉宾花园4楼",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/935437da-ab1d-4671-86de-cc39acb488fd.jpg"
          }
        ],
        "hotelId": 198338651,
        "startPrice": "288",
        "name": "天使恋人主题酒店(深圳万象城店)",
        "location": {
          "lat": "22.540206",
          "lng": "114.11257"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "24小时热水"
        ],
        "address": "龙岗区深圳龙岗区土洋第二工业路承翰半山海1栋616室",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/72b0631f-8f9f-49fb-8cc4-e24be2bd72a8.jpg"
          }
        ],
        "hotelId": 1912357000,
        "startPrice": "288",
        "name": "深圳谢小姐的家普通公寓",
        "location": {
          "lat": "22.614877",
          "lng": "114.413501"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "停车场",
          "24小时热水"
        ],
        "address": "大鹏新区较场尾海滨路18号",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/3a18b9e1-e2ed-4567-acd6-16deaa561c09.jpg"
          }
        ],
        "hotelId": 1603815059,
        "startPrice": "288",
        "name": "深圳阿鲁古雅海景民宿",
        "location": {
          "lat": "22.590985",
          "lng": "114.513523"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "停车场",
          "免费洗漱用品",
          "24小时热水"
        ],
        "address": "福田区景田北街民进投资大厦5—6楼",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/6d35e5fb-dac3-4a28-9dcc-7fdb45c11c31.jpg"
          }
        ],
        "hotelId": 845942,
        "startPrice": "288",
        "name": "香梅连锁酒店(深圳景田北店)",
        "location": {
          "lat": "22.554713",
          "lng": "114.036831"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "停车场",
          "24小时热水"
        ],
        "address": "龙岗区深圳龙岗区深圳市龙岗区龙岗区中心城",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/27453b9d-28d0-4146-9419-eb9f6604e50a.jpg"
          }
        ],
        "hotelId": 1928403905,
        "startPrice": "288",
        "name": "深圳轻奢民宿(埔昌路分店)",
        "location": {
          "lat": "22.714343",
          "lng": "114.25045"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "停车场",
          "24小时热水"
        ],
        "address": "南山区大冲新城花园2栋2C501",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/628dfac2-9c37-4949-ad86-bd1e93166567.jpg"
          }
        ],
        "hotelId": 1715493448,
        "startPrice": "288",
        "name": "深圳诺丁山精品公寓(高新园店)",
        "location": {
          "lat": "22.542059",
          "lng": "113.950985"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "停车场",
          "免费洗漱用品",
          "24小时热水"
        ],
        "address": "罗湖区深南东路5018号（深圳大剧院内）",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/a7111e62-47f1-4f7e-a621-b2ee26513419.jpg"
          }
        ],
        "hotelId": 587121,
        "startPrice": "288",
        "name": "爱琴海视界风尚酒店(深圳京基100店)",
        "location": {
          "lat": "22.542061",
          "lng": "114.105743"
        },
        "starName": "舒适型"
      },
      {
        "facilities": [
          "停车场",
          "免费洗漱用品",
          "24小时热水"
        ],
        "address": "盐田区盐梅路52号",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/02569f37-6bbf-47b8-8859-5cbb57aba3a2.jpg"
          }
        ],
        "hotelId": 197885390,
        "startPrice": "288",
        "name": "深圳佳佳海边度假酒店公寓",
        "location": {
          "lat": "22.598611",
          "lng": "114.313529"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "24小时热水"
        ],
        "address": "龙岗区深圳龙岗区kpr佳兆业广场2栋516",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/50a0b842-ef6e-445d-b7fc-31ce6bb9fc56.jpg"
          }
        ],
        "hotelId": 1898645711,
        "startPrice": "288",
        "name": "深圳山海恋人酒店式公寓",
        "location": {
          "lat": "22.594573",
          "lng": "114.474493"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "接机服务",
          "24小时热水"
        ],
        "address": "罗湖区宝安南路2010号龙园创展大厦17楼1715室",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/82c56820-9dca-4fe2-a676-00954856e889.jpg"
          }
        ],
        "hotelId": 1715493241,
        "startPrice": "288",
        "name": "阅见·生活美学公寓(深圳罗湖万象城店)",
        "location": {
          "lat": "22.543722",
          "lng": "114.112083"
        },
        "starName": "舒适型"
      },
      {
        "facilities": [
          "餐厅",
          "停车场",
          "接机服务",
          "免费洗漱用品",
          "会议室",
          "24小时热水"
        ],
        "address": "大鹏新区深葵路1085号",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/18b06050-11c0-4b62-be9e-07671116399f.jpg"
          }
        ],
        "hotelId": 639273,
        "startPrice": "288",
        "name": "深圳溪涌·悦榕湾工人度假村",
        "location": {
          "lat": "22.607409",
          "lng": "114.361242"
        },
        "starName": "舒适型"
      },
      {
        "facilities": [
          "24小时热水"
        ],
        "address": "南山区深圳南山区前海金岸金丰阁",
        "pictures": [],
        "hotelId": 1936034075,
        "startPrice": "288",
        "name": "深圳北欧清新小屋公寓(关口正街分店)",
        "location": {
          "lat": "22.533138",
          "lng": "113.917642"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "停车场",
          "24小时热水"
        ],
        "address": "南山区高新园地铁B出口大冲新城花园2栋2C",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/d2883a58-8d1e-4d93-b63d-b21bdcbca92d.jpg"
          }
        ],
        "hotelId": 366176664,
        "startPrice": "288",
        "name": "深圳润府公寓",
        "location": {
          "lat": "22.542887",
          "lng": "113.957864"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "餐厅",
          "停车场",
          "免费洗漱用品",
          "会议室",
          "24小时热水"
        ],
        "address": "龙岗区南湾街道布沙路215号百门前工业区",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/0f187cfb-2369-4dc7-82ab-866f7a8dcf53.jpg"
          }
        ],
        "hotelId": 1734220538,
        "startPrice": "288",
        "name": "维也纳国际酒店(深圳布吉大芬店)",
        "location": {
          "lat": "22.604962",
          "lng": "114.142314"
        },
        "starName": "舒适型"
      },
      {
        "facilities": [
          "餐厅",
          "停车场",
          "24小时热水"
        ],
        "address": "罗湖区草埔金稻田路培峰苑A栋",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/d4d0c64b-56d0-46f1-87b1-89a1f4567e3f.jpg"
          }
        ],
        "hotelId": 1549868997,
        "startPrice": "288",
        "name": "维也纳国际酒店(深圳草埔金稻田店)",
        "location": {
          "lat": "22.588273",
          "lng": "114.125351"
        },
        "starName": "舒适型"
      },
      {
        "facilities": [
          "停车场",
          "免费洗漱用品",
          "24小时热水"
        ],
        "address": "罗湖区宝安南路与解放路交汇处龙园创展大厦1638室",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/ba719805-31cf-4912-9259-d28557978c11.jpg"
          }
        ],
        "hotelId": 1655583233,
        "startPrice": "288",
        "name": "思途商务公寓(深圳ONE39店)",
        "location": {
          "lat": "22.54341",
          "lng": "114.11178"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "24小时热水"
        ],
        "address": "龙岗区深圳龙岗区布吉街道宝龙大厦吉祥阁15B",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/def5739f-6e98-4824-8850-037946abe1d7.jpg"
          }
        ],
        "hotelId": 1916380326,
        "startPrice": "288",
        "name": "深圳8090青年公寓",
        "location": {
          "lat": "22.605051",
          "lng": "114.1175"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "24小时热水"
        ],
        "address": "龙岗区深圳龙岗区大鹏新区南澳杨梅坑村20-1号邻岸民宿",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/9d05c56a-9c50-4082-86ca-daed9d373150.jpg"
          }
        ],
        "hotelId": 1915216838,
        "startPrice": "287",
        "name": "深圳杨梅坑邻岸海景民宿",
        "location": {
          "lat": "22.544082",
          "lng": "114.572604"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "24小时热水"
        ],
        "address": "南山区深圳南山区水湾19793座2211",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/0f1c2b56-f238-4de2-a851-063ba5040208.jpg"
          }
        ],
        "hotelId": 1916380363,
        "startPrice": "287",
        "name": "深圳miss程普通公寓(太子路分店)",
        "location": {
          "lat": "22.477682",
          "lng": "113.914726"
        },
        "starName": "经济型"
      },
      {
        "facilities": [],
        "address": "深圳盐田区北山道与盐田路交界处",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/40c1daf6-5034-43a0-af33-f55a526128ec.jpg"
          }
        ],
        "hotelId": 1889380130,
        "startPrice": "287",
        "name": "深圳大梅沙东部华侨城公寓",
        "location": {
          "lat": "22.591229",
          "lng": "114.257112"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "停车场",
          "接机服务",
          "免费洗漱用品",
          "会议室",
          "24小时热水"
        ],
        "address": "宝安区西乡街道三围宝安大道5009号",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/cf77cf47-544e-4f54-a043-84891c1f3b8b.jpg"
          }
        ],
        "hotelId": 349944924,
        "startPrice": "287",
        "name": "麗枫酒店(深圳机场新航站楼店)",
        "location": {
          "lat": "22.613781",
          "lng": "113.84032"
        },
        "starName": "舒适型"
      },
      {
        "facilities": [
          "24小时热水"
        ],
        "address": "龙岗区深圳龙岗区官湖社区湖龙湖龙3巷1号",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/1b972d14-9711-41cc-ada9-00e83ab1dd35.jpg"
          }
        ],
        "hotelId": 1890542477,
        "startPrice": "287",
        "name": "深圳官湖唠叨图书馆民宿",
        "location": {
          "lat": "22.603111",
          "lng": "114.426212"
        },
        "starName": "经济型"
      },
      {
        "facilities": [
          "24小时热水"
        ],
        "address": "深圳福田区晨晖家园",
        "pictures": [
          {
            "path": "http://app1.showapi.com/images/hotel/aa38c857-47d9-4166-891c-306e14acc890.jpg"
          }
        ],
        "hotelId": 1921919312,
        "startPrice": "287",
        "name": "深圳鱼舍FISHOME普通公寓",
        "location": {
          "lat": "22.519816",
          "lng": "114.061298"
        },
        "starName": "经济型"
      }
    ],
    "count": 61
  }
  return hotels
}

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
class HotelsResultPage extends Component {
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

  componentDidMount() {
    const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;

    setTimeout(() => {
      requestHotels()
      .then(hotels => {
        if(typeof hotels !== 'string') {
          genData(hotels.hotelList)
        }
        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
          count: hotels.count,
          isLoading: false,
          height: hei,
        });
      })
    }, 600);
  }

  onEndReached = () => {
    // 已经加载到 最后一页 了
    if(pageIndex + 1 >= Math.ceil(this.state.count / NUM_SECTIONS / NUM_ROWS_PER_SECTION)) {
      this.setState({ hasMore: false })
    }
    // 如果 正在加载 或 已经加载到最后一页, 退出函数
    if (this.state.isLoading || !this.state.hasMore) {
      return;
    }
    // 否则 设置 加载状态 为 正在加载, 请求 数据 
    this.setState({ isLoading: true });
    setTimeout(() => {
      requestHotels()
      .then(hotels => {
        if(typeof hotels !== 'string') {
          genData(hotels.hotelList, ++pageIndex)
        }
        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
          isLoading: false,
        });
      })
    }, 1000);
  }

  render() {
    const row = (rowData, sectionID, rowID) => {
      return (
        <HotelCard key={rowID}  hotel={rowData} />
      );
    };

    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={() => <span>header</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? '正在加载...' : '已经到底了'}
        </div>)}
        renderSectionHeader={sectionData => (
          <div>{`Task ${sectionData.split(' ')[1]}`}</div>
        )}
        renderBodyComponent={() => <MyBody />}
        renderRow={row}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        pageSize={4}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}

export default HotelsResultPage