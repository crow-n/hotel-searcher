import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import FastSearchPage from "./components/fastSearch/FastSearchPage";
import HotelsResultPage from './components/hotels/HotelsResultPage';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    const initDate = this.initDate()
    this.state = {
      filter: {
        keyWords: '',
        cityName: '北京',
        page: 0,
        inDate: initDate.nowDate,
        outDate: initDate.nextDate,
        star: [{
          type: "TWO,BUDGET",
          display: "二星及以下/经济",
          selected: false,
        },{
          type: "THREE,CONFORT",
          display: "三星/舒适",
          selected: false,
        },{
          type: "FOUR,HIGHEND",
          display: "四星/高档",
          selected: false,
        },{
          type: "FIVE,LUXURY",
          display: "五星/豪华",
          selected: false,
        },],
        minPrice: '',
        maxPrice: '',
      },
      keywordChoices: [
        {
          "filterName": "品牌",
          "filterProsList": [
            {
              "subName": "高档型",
              "subProsList": [
                "亚朵",
                "中油阳光",
                "雅乐轩",
                "华侨城酒店",
                "万怡",
                "美豪",
                "贝斯特韦斯特",
                "美爵",
                "华美达",
                "和颐",
                "锦江酒店",
                "盛捷",
                "维景酒店",
                "诺富特",
                "假日酒店",
                "华天",
                "粤海酒店"
              ]
            },
            {
              "subName": "经济型",
              "subProsList": [
                "7天优品",
                "汉庭",
                "如家",
                "城市便捷",
                "99旅馆",
                "7天酒店",
                "海友",
                "尚客优",
                "格林联盟",
                "速8",
                "格林豪泰",
                "岭南佳园",
                "怡莱",
                "百时快捷",
                "易佰连锁",
                "锦江之星",
                "今天连锁",
                "锐思特",
                "都市118",
                "维也纳3好酒店",
                "天鹅恋",
                "布丁",
                "粤海之星",
                "桔子酒店",
                "派酒店",
                "精途酒店"
              ]
            },
            {
              "subName": "豪华型",
              "subProsList": [
                "万豪",
                "JW万豪",
                "喜来登",
                "凯宾斯基",
                "辉盛阁",
                "皇冠假日",
                "格兰云天",
                "凯悦",
                "希尔顿酒店",
                "香格里拉",
                "希尔顿逸林",
                "洲际酒店",
                "丽思卡尔顿",
                "万豪行政公寓",
                "朗廷",
                "威斯汀",
                "君悦",
                "温德姆至尊豪廷",
                "新世界",
                "湘投阳光",
                "四季",
                "马哥孛罗"
              ]
            },
            {
              "subName": "舒适型",
              "subProsList": [
                "维也纳酒店",
                "富驿时尚",
                "途家",
                "格林东方",
                "雅斯特",
                "IU酒店",
                "城市客栈",
                "星程",
                "全季",
                "如家精选",
                "嘻哈",
                "山水时尚",
                "智选假日",
                "伊思德"
              ]
            }
          ]
        },
        {
          "filterName": "商业区",
          "filterProsList": [
            "东门商业街",
            "华强北地区",
            "万象城、京基100",
            "皇岗口岸、福田口岸",
            "宝安中心区、前海",
            "龙岗中心区",
            "盐田（大、小梅沙）地区",
            "华侨城地区",
            "罗湖地区",
            "龙华新区、深圳北站",
            "布吉、深圳东站",
            "机场、福永",
            "车公庙、竹子林",
            "平湖双拥一街商业圈",
            "东涌、西涌",
            "会展中心",
            "科技园",
            "海岸城、深圳湾口岸",
            "观澜",
            "光明新区",
            "大鹏商业圈",
            "葵涌",
            "坪山新区",
            "南澳",
            "莲塘、梧桐山",
            "蛇口（南山）地区",
            "沙井、松岗",
            "沙头角、中英街",
            "西丽、大学城",
            "杨梅坑",
            "中心城区",
            "福田CBD商圈商圈",
            "中信广场商业区",
            "较场尾-大鹏所城商圈",
            "莲花山商圈",
            "罗湖口岸商圈",
            "高交会、皇岗口岸地区",
            "龙华中心区",
            "南山中心区",
            "高新科技区商圈",
            "东湖公园商圈"
          ]
        },
        {
          "filterName": "机场车站",
          "filterProsList": [
            "宝安国际机场",
            "深圳火车站",
            "深圳东火车站",
            "深圳西火车站",
            "深圳北火车站",
            "福田火车站",
            "坂田火车站",
            "深圳坪山火车站",
            "平湖火车站",
            "光明城火车站",
            "光明火车站",
            "坂田火车站",
            "南头火车站",
            "深圳宝安国际机场"
          ]
        },
        {
          "filterName": "景点",
          "filterProsList": [
            "深圳世界之窗",
            "东部华侨城",
            "深圳欢乐谷",
            "大梅沙",
            "锦绣中华",
            "小梅沙",
            "地王观光",
            "深圳红树林自然保护区",
            "深圳明思克航母",
            "青青世界",
            "深圳凤凰山",
            "玺宝楼青瓷博物馆",
            "京基100",
            "艺展中心",
            "深圳人民公园",
            "荔枝公园",
            "深圳地王大厦",
            "深圳会展中心",
            "深圳平安金融中心云际观光层",
            "深圳喜悦真冰滑冰场",
            "邓小平画像",
            "东门老街",
            "MIX真人密室逃脱深圳店",
            "思月书院",
            "翠竹公园",
            "深圳高尔夫俱乐部",
            "深圳市博物馆",
            "水上乐园",
            "深圳证券交易所",
            "曾生故居"
          ]
        },
        {
          "filterName": "行政区",
          "filterProsList": [
            "福田区",
            "罗湖区",
            "南山区",
            "盐田区",
            "宝安区",
            "龙岗区",
            "龙华区",
            "坪山区"
          ]
        },
        {
          "filterName": "大学",
          "filterProsList": [
            "深圳大学",
            "深圳市青少年度假营",
            "广东新安职业技术学院"
          ]
        },
        {
          "filterName": "地铁站",
          "filterProsList": [
            {
              "subProsList": [
                "罗湖",
                "国贸",
                "老街",
                "大剧院",
                "科学馆",
                "华强路",
                "岗厦",
                "会展中心",
                "购物公园",
                "香蜜湖",
                "车公庙",
                "竹子林",
                "侨城东",
                "华侨城",
                "世界之窗",
                "白石洲",
                "高新园",
                "深大",
                "桃园",
                "大新",
                "鲤鱼门",
                "前海湾",
                "新安",
                "宝安中心",
                "宝体",
                "坪洲",
                "西乡",
                "固戍",
                "后瑞",
                "机场东"
              ],
              "subName": "1号线(罗宝线)"
            },
            {
              "subProsList": [
                "赤湾",
                "蛇口港",
                "海上世界",
                "水湾",
                "东角头",
                "湾厦",
                "海月",
                "登良",
                "后海",
                "科苑",
                "红树湾",
                "世界之窗",
                "侨城北",
                "深康",
                "安托山",
                "侨香",
                "香蜜",
                "香梅北",
                "景田",
                "莲花西",
                "福田",
                "市民中心",
                "岗厦北",
                "华强北",
                "燕南",
                "大剧院",
                "湖贝",
                "黄贝岭",
                "新秀"
              ],
              "subName": "2号线(蛇口线)"
            },
            {
              "subProsList": [
                "益田",
                "石厦",
                "购物公园",
                "福田",
                "少年宫",
                "莲花村",
                "华新",
                "通新岭",
                "红岭",
                "老街",
                "晒布",
                "翠竹",
                "田贝",
                "水贝",
                "草埔",
                "布吉",
                "木棉湾",
                "大芬",
                "丹竹头",
                "六约",
                "塘坑",
                "横岗",
                "永湖",
                "荷坳",
                "大运",
                "爱联",
                "吉祥",
                "龙城广场",
                "南联",
                "双龙"
              ],
              "subName": "3号线(龙岗线)"
            },
            {
              "subProsList": [
                "福田口岸",
                "福民",
                "会展中心",
                "市民中心",
                "少年宫",
                "莲花北",
                "上梅林",
                "民乐",
                "白石龙",
                "深圳北",
                "红山",
                "上塘",
                "龙胜",
                "龙华",
                "清湖"
              ],
              "subName": "4号线(龙华线)"
            },
            {
              "subProsList": [
                "前海湾",
                "临海",
                "宝华",
                "宝安中心",
                "翻身",
                "灵芝",
                "洪浪北",
                "兴东",
                "留仙洞",
                "西丽",
                "大学城",
                "塘朗",
                "长岭陂",
                "深圳北",
                "民治",
                "五和",
                "坂田",
                "杨美",
                "上水径",
                "下水径",
                "长龙",
                "布吉",
                "百鸽笼",
                "布心",
                "太安",
                "怡景",
                "黄贝岭"
              ],
              "subName": "5号线(环中线)"
            },
            {
              "subProsList": [
                "福永",
                "桥头",
                "塘尾",
                "马安山",
                "沙井",
                "后亭",
                "松岗",
                "碧头"
              ],
              "subName": "11号线"
            }
          ]
        }
      ],
    }
  }

  setCity(cityName) {
    this.setState(prevState => ({
      filter: Object.assign(prevState.filter, { cityName })
    }))
  }

  formatDate(date) {
    var month = date.getMonth() + 1
    return date.getFullYear()
    + "-"
    + (month >= 10 ? month : "0" + month)
    + "-"
    + (date.getDate() < 10 ? "0" + date.getDate() : date
      .getDate())
  }
  initDate() {
    const nowDate = this.formatDate(new Date())
    const nextDate = this.formatDate(new Date(Date.now() + 1000 * 60 * 60 * 24))
    return {
      nowDate,
      nextDate
    }
  }
  setDate(inDate, outDate) {
    this.setState(prevState => ({
      filter: Object.assign(prevState.filter, {
        inDate: this.formatDate(inDate),
        outDate: this.formatDate(outDate)
      })
    }))
  }

  setKeyWords(keyWords) {
    this.setState(prevState => ({
      filter: Object.assign(prevState.filter, {
        keyWords
      })
    }))
  }

  setStarAndPrice(star, minPrice, maxPrice) {
    this.setState(prevState => ({
      filter: Object.assign(prevState.filter, { star, minPrice, maxPrice })
    }))
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() =>
            <FastSearchPage
              filter={this.state.filter}
              keywordChoices={this.state.keywordChoices}
              setCity={city => this.setCity(city)}
              setDate={
                (inDate, outDate) => this.setDate(inDate, outDate)}
              setKeyWords={keyWords => this.setKeyWords(keyWords)}
              setStarAndPrice={
                (star, minPrice, maxPrice) => this.setStarAndPrice(star, minPrice, maxPrice)} />
          } />
          <Route path="/hotels" render={() =>
            <HotelsResultPage
              filter={this.state.filter}
              keywordChoices={this.state.keywordChoices}
              setCity={city => this.setCity(city)}
              setDate={
                (inDate, outDate) => this.setDate(inDate, outDate)}
              setKeyWords={keyWords => this.setKeyWords(keyWords)}
              setStarAndPrice={
                (star, minPrice, maxPrice) => this.setStarAndPrice(star, minPrice, maxPrice)} />
          } />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
