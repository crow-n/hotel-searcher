import axios from 'axios'
import { reject } from 'rsvp';

// 常量设置 ========================
axios.defaults.baseURL = 'https://route.showapi.com/'

const showapi_appid = '78519'
const showapi_sign = '46dd16062e284b4d91bf18fe551d0ccf'

export const onePageNum = 30
// 原 获取城市 的接口返回数据混乱, 鉴于这些数据基本不会变, 我将它设置为常量
export const cities = [{
  letter: 'A',
  list: [
    "鞍山",
    "安庆",
    "安阳",
    "安平县",
    "安溪县",
    "安吉县",
    "安达市",
    "安宁市",
    "阿图什市",
    "阿拉尔",
    "安陆市",
    "安康",
    "安国市",
    "阿勒泰",
    "阿克苏",
    "阿拉善右旗",
    "阿拉善左旗",
    "阿尔山市",
    "安顺",
    "阿坝",
    "阿里",
  ],
}, {
  letter: 'B',
  list: [
    "北京",
    "包头",
    "蚌埠",
    "保定",
    "本溪",
    "宝鸡",
    "亳州",
    "滨州",
    "宝丰县",
    "博爱县",
    "彬县",
    "北海",
    "北安市",
    "北票市",
    "北镇市",
    "北流市",
    "霸州市",
    "泊头市",
    "博乐市",
    "保山",
    "巴彦淖尔",
    "白山",
    "毕节",
    "百色",
  ],
}, {
  letter: 'C',
  list: [
    "成都",
    "重庆",
    "长沙",
    "长春",
    "常州",
    "常德",
    "滁州",
    "赤峰",
    "长治",
    "沧州",
    "巢湖市",
    "池州",
    "承德",
    "郴州",
    "崇左",
    "长垣县",
    "昌黎县",
    "成安县",
    "磁县",
    "曹妃甸区",
    "长汀县",
    "潮州",
    "楚雄市",
    "赤水市",
    "昌吉",
    "崇州市",
    "长葛市",
    "常宁市",
    "嵊州市",
    "朝阳",
    "赤壁市",
    "岑溪市",
    "长乐市",
    "长兴县",
    "慈溪市",
    "常熟",
    "昌都",
    "长海县",
  ],
}, {
  letter: 'D',
  list: [
    "大连",
    "大庆",
    "大同",
    "东莞",
    "丹东",
    "东营",
    "德州",
    "达州",
    "德阳",
    "大理",
    "郸城县",
    "达拉特旗",
    "定西",
    "敦化市",
    "大安市",
    "德惠市",
    "调兵山市",
    "灯塔市",
    "大石桥市",
    "东港市",
    "都匀市",
    "都江堰市",
    "邓州市",
    "登封市",
    "东阳市",
    "当阳市",
    "丹江口市",
    "大冶市",
    "东方市",
    "东兴市",
    "德兴市",
    "德清县",
    "丹阳市",
    "大丰市",
    "东台市",
    "定州市",
    "敦煌市",
    "大兴安岭",
    "德宏",
    "稻城县",
  ],
}, {
  letter: 'E',
  list: [
    "鄂尔多斯",
    "恩施",
    "鄂州",
    "峨眉山市",
    "恩平市",
    "额尔古纳市",
    "额济纳旗",
    "二连浩特市",
  ],
}, {
  letter: 'F',
  list: [
    "福州",
    "佛山",
    "阜阳",
    "抚顺",
    "封丘县",
    "扶沟县",
    "范县",
    "丰宁满族自治县",
    "肥乡县",
    "抚州",
    "凤凰县",
    "汾阳市",
    "富锦市",
    "凤城市",
    "福泉市",
    "阜康市",
    "福鼎市",
    "阜新",
    "福安市",
    "福清市",
    "丰城市",
    "奉化市",
    "富阳区",
    "丰镇市",
    "抚远县",
  ],
}, {
  letter: 'G',
  list: [
    "广州",
    "贵阳",
    "桂林",
    "赣州",
    "广元",
    "巩义市",
    "高阳县",
    "公安县",
    "古交市",
    "高平市",
    "高密市",
    "贵港",
    "公主岭市",
    "盖州市",
    "个旧市",
    "广汉市",
    "广水市",
    "桂平市",
    "高州市",
    "贵溪市",
    "高安市",
    "根河市",
    "高邮市",
    "高碑店市",
    "藁城市",
    "格尔木市",
    "固原",
    "甘南",
    "甘孜",
  ],
}, {
  letter: 'H',
  list: [
    "杭州",
    "合肥",
    "海口",
    "哈尔滨",
    "呼和浩特",
    "惠州",
    "衡阳",
    "淮南",
    "呼伦贝尔",
    "淮安",
    "湖州",
    "黄山",
    "邯郸",
    "菏泽",
    "衡水",
    "汉中",
    "黄冈",
    "黄石",
    "怀化",
    "红河",
    "鹤岗",
    "贺州",
    "鹤壁",
    "淮阳县",
    "滑县",
    "洪洞县",
    "怀仁县",
    "惠安县",
    "海原县",
    "海北",
    "黄南",
    "河津市",
    "海阳市",
    "海伦市",
    "海林市",
    "虎林市",
    "和龙市",
    "珲春市",
    "桦甸市",
    "河源",
    "海城市",
    "合作市",
    "淮北",
    "华阴市",
    "韩城市",
    "华蓥市",
    "洪江市",
    "汉川市",
    "洪湖市",
    "葫芦岛",
    "合山市",
    "化州市",
    "鹤山市",
    "海宁市",
    "霍州市",
    "侯马市",
    "霍林郭勒市",
    "海安县",
    "海门市",
    "河间市",
    "黄骅市",
    "哈密",
    "和田",
    "海西",
    "海拉尔区",
    "黑河",
    "河池",
  ],
}, {
  letter: 'J',
  list: [
    "济南",
    "金华",
    "吉林",
    "锦州",
    "嘉兴",
    "江门",
    "揭阳",
    "嘉峪关",
    "晋中",
    "九江",
    "济宁",
    "晋城",
    "焦作",
    "酒泉",
    "荆州",
    "荆门",
    "吉安",
    "郏县",
    "景德镇",
    "集美区",
    "济源",
    "建阳区",
    "泾源县",
    "靖边县",
    "京山县",
    "监利县",
    "介休市",
    "胶州市",
    "集安市",
    "蛟河市",
    "九台市",
    "景洪市",
    "简阳市",
    "江油市",
    "吉首市",
    "江山市",
    "佳木斯",
    "建瓯市",
    "晋江市",
    "界首市",
    "江阴",
    "嘉善县",
    "建德市",
    "靖江市",
    "句容市",
    "金坛市",
    "冀州市",
    "晋州市",
    "金昌",
    "鸡西",
    "九寨沟县",
    "井冈山市",
  ],
}, {
  letter: 'K',
  list: [
    "昆明",
    "开封",
    "克拉玛依",
    "宽城满族自治县",
    "开原市",
    "开远市",
    "奎屯市",
    "开平市",
    "库车县",
    "库尔勒市",
    "喀什",
    "凯里市",
    "昆山市",
  ],
}, {
  letter: 'L',
  list: [
    "洛阳",
    "漯河",
    "兰州",
    "柳州",
    "六盘水",
    "丽江",
    "辽阳",
    "廊坊",
    "吕梁",
    "连云港",
    "临沂",
    "龙岩",
    "六安",
    "莱芜",
    "聊城",
    "丽水",
    "临汾",
    "泸州",
    "乐山",
    "拉萨",
    "娄底",
    "来宾",
    "栾川县",
    "鹿邑县",
    "鲁山县",
    "隆尧县",
    "临漳县",
    "滦县",
    "乐亭县",
    "滦南县",
    "栾城县",
    "陵川县",
    "临猗县",
    "灵石县",
    "连江县",
    "龙口市",
    "莱州市",
    "潞城市",
    "灵武市",
    "临清市",
    "莱阳市",
    "莱西市",
    "龙井市",
    "临江市",
    "凌源市",
    "凌海市",
    "临夏市",
    "阆中市",
    "灵宝市",
    "林州市",
    "涟源市",
    "冷水江市",
    "临湘市",
    "临海市",
    "耒阳市",
    "兰溪市",
    "醴陵市",
    "浏阳市",
    "利川市",
    "老河口市",
    "罗定市",
    "连州市",
    "陆丰市",
    "乐昌市",
    "雷州市",
    "龙海市",
    "乐平市",
    "龙泉市",
    "乐清市",
    "陇南",
    "临安市",
    "溧阳市",
    "鹿泉区",
    "林芝",
    "临沧",
  ],
}, {
  letter: 'M',
  list: [
    "绵阳",
    "牡丹江",
    "马鞍山",
    "梅州",
    "渑池县",
    "民权县",
    "孟津县",
    "穆棱市",
    "密山市",
    "梅河口市",
    "茂名",
    "芒市",
    "绵竹市",
    "孟州市",
    "汨罗市",
    "麻城市",
    "明光市",
    "满洲里市",
    "漠河县",
  ],
}, {
  letter: 'N',
  list: [
    "南京",
    "宁波",
    "南宁",
    "南昌",
    "南阳",
    "南通",
    "南平",
    "宁德",
    "南充",
    "内黄县",
    "南乐县",
    "宁晋县",
    "宁乡县",
    "宁安市",
    "讷河市",
    "南安市",
    "宁国市",
    "宁海县",
    "南宫市",
  ],
}, {
  letter: 'P',
  list: [
    "盘锦",
    "平顶山",
    "莆田",
    "攀枝花",
    "濮阳",
    "平舆县",
    "平泉县",
    "平山县",
    "平潭县",
    "平罗县",
    "蓬莱市",
    "萍乡",
    "平凉",
    "普洱",
    "磐石市",
    "普兰店市",
    "彭州市",
    "凭祥市",
    "普宁市",
    "平湖市",
    "邳州市",
  ],
}, {
  letter: 'Q',
  list: [
    "泉州",
    "青岛",
    "齐齐哈尔",
    "秦皇岛",
    "衢州",
    "曲靖",
    "清丰县",
    "淇县",
    "清河县",
    "栖霞市",
    "青铜峡市",
    "曲阜市",
    "青州市",
    "清远",
    "清镇市",
    "邛崃市",
    "沁阳市",
    "钦州",
    "潜江",
    "琼海市",
    "庆阳",
    "启东市",
    "黔江区",
    "迁安市",
    "且末县",
  ],
}, {
  letter: 'R',
  list: [
    "日照",
    "汝阳县",
    "荣成市",
    "乳山市",
    "瑞丽市",
    "仁怀市",
    "汝州市",
    "瑞金市",
    "瑞昌市",
    "瑞安市",
    "如东县",
    "如皋市",
    "任丘市",
    "日喀则",
  ],
}, {
  letter: 'S',
  list: [
    "上海",
    "苏州",
    "深圳",
    "沈阳",
    "三亚",
    "石家庄",
    "绍兴",
    "松原",
    "三明",
    "汕头",
    "四平",
    "绥化",
    "韶关",
    "商丘",
    "宿州",
    "宿迁",
    "上饶",
    "邵阳",
    "十堰",
    "石嘴山",
    "上蔡县",
    "沈丘县",
    "石河子",
    "睢县",
    "嵩县",
    "三门峡",
    "涉县",
    "上杭县",
    "神木县",
    "邵东县",
    "遂昌县",
    "嵊泗县",
    "商洛",
    "绥芬河市",
    "尚志市",
    "双辽市",
    "舒兰市",
    "汕尾",
    "什邡市",
    "韶山市",
    "上虞区",
    "松滋市",
    "石首市",
    "四会市",
    "邵武市",
    "石狮市",
    "随州",
    "深州市",
    "三河市",
    "沙河市",
    "思茅区",
    "神农架",
  ],
}, {
  letter: 'T',
  list: [
    "天津",
    "太原",
    "唐山",
    "台州",
    "通辽",
    "铜陵",
    "泰州",
    "泰安",
    "汤阴县",
    "台前县",
    "太谷县",
    "同安区",
    "同心县",
    "天台县",
    "铜川",
    "滕州市",
    "同江市",
    "铁力市",
    "铁岭",
    "图们市",
    "洮南市",
    "图木舒克",
    "天门",
    "通化",
    "台山市",
    "天长市",
    "桐城市",
    "桐乡市",
    "泰兴市",
    "天水",
    "通州市",
    "太仓市",
    "塔城",
    "吐鲁番",
    "腾冲县",
    "铜仁",
  ],
}, {
  letter: 'W',
  list: [
    "武汉",
    "无锡",
    "温州",
    "芜湖",
    "梧州",
    "乌鲁木齐",
    "潍坊",
    "威海",
    "渭南",
    "武陟县",
    "温县",
    "乌兰察布",
    "吴忠",
    "武义县",
    "文登区",
    "五大连池市",
    "五常市",
    "瓦房店市",
    "乌苏市",
    "五家渠",
    "万源市",
    "舞钢市",
    "卫辉市",
    "武冈市",
    "武穴市",
    "万宁市",
    "文昌市",
    "五指山市",
    "吴川市",
    "武威",
    "武安市",
    "温岭市",
    "乌海",
    "乌兰浩特市",
    "文山",
    "武夷山市",
  ],
}, {
  letter: 'X',
  list: [
    "西安",
    "厦门",
    "襄阳",
    "徐州",
    "邢台",
    "新乡",
    "咸阳",
    "西双版纳",
    "宣城",
    "忻州",
    "信阳",
    "许昌",
    "湘潭",
    "西宁",
    "孝感",
    "西华县",
    "西平县",
    "夏邑县",
    "新安县",
    "新蔡县",
    "咸宁",
    "修武县",
    "浚县",
    "香河县",
    "襄垣县",
    "霞浦县",
    "湘阴县",
    "湘西",
    "浠水县",
    "仙桃",
    "仙居县",
    "象山县",
    "新余",
    "孝义市",
    "兴城市",
    "新民市",
    "兴平市",
    "宣威市",
    "项城市",
    "荥阳市",
    "新密市",
    "新郑市",
    "湘乡市",
    "兴宁市",
    "信宜市",
    "西昌市",
    "兴化市",
    "新沂市",
    "新乐市",
    "辛集市",
    "锡林浩特市",
    "香格里拉县",
    "兴义市",
  ],
}, {
  letter: 'Y',
  list: [
    "义乌市",
    "延安",
    "宜昌",
    "运城",
    "扬州",
    "营口",
    "银川",
    "盐城",
    "榆林",
    "岳阳",
    "玉林",
    "烟台",
    "宜宾",
    "宜春",
    "永州",
    "益阳",
    "玉溪",
    "云浮",
    "原阳县",
    "宜阳县",
    "伊川县",
    "叶县",
    "易县",
    "永年县",
    "伊金霍洛旗",
    "阳城县",
    "盐池县",
    "鹰潭",
    "阎良区",
    "原平市",
    "永济市",
    "禹城市",
    "榆树市",
    "玉门市",
    "永城市",
    "义马市",
    "偃师市",
    "禹州市",
    "沅江市",
    "永康市",
    "应城市",
    "宜城市",
    "宜都市",
    "宜州市",
    "英德市",
    "阳春市",
    "永安市",
    "延吉市",
    "余姚市",
    "扬中市",
    "仪征市",
    "牙克石市",
    "阳江",
    "宜兴市",
    "永川区",
    "伊宁县",
    "玉树",
    "伊春",
    "玉环县",
  ],
}, {
  letter: 'Z',
  list: [
    "郑州",
    "遵义",
    "张家界",
    "珠海",
    "中山",
    "漳州",
    "株洲",
    "张家口",
    "湛江",
    "淄博",
    "镇江",
    "舟山",
    "枣庄",
    "周口",
    "张掖",
    "驻马店",
    "自贡",
    "柘城县",
    "赵县",
    "正定县",
    "准格尔旗",
    "漳浦县",
    "中宁县",
    "招远市",
    "邹城市",
    "诸城市",
    "章丘市",
    "肇东市",
    "肇庆",
    "庄河市",
    "中牟县",
    "资兴市",
    "诸暨市",
    "钟祥市",
    "枣阳市",
    "枝江市",
    "廉江市",
    "漳平县",
    "樟树市",
    "昭通",
    "扎兰屯市",
    "中卫",
    "张家港市",
    "涿州市",
    "遵化市",
  ]
}]

const facilitiesMap = {
  1: "免费wifi",
  2: "餐厅",
  3: "停车场",
  4: "接机服务",
  5: "免费洗漱用品",
  7: "游泳池",
  8: "健身房",
  9: "会议室",
  10: "SPA",
  12: "24小时热水",
}


// 请求 ============================
// 查询 酒店 列表,
// 入住 到 离店 最多 28晚
export async function searchHotel(params) {
  const { 
    keyWords = "",
    page = "",
    cityName = "",
    inDate = "",
    outDate = "",
    sortCode = "",
    star = "",
    minPrice = "",
    maxPrice = "",
  } = params

  const result = await axios.get('1653-1', {
    params: assignParams({ 
      keyWords,
      page,
      cityName, 
      inDate, 
      outDate, 
      sortCode,
      star,
      minPrice, 
      maxPrice,
    })
  })
  const res = washResult(result)
  if(typeof res === 'string'){
    return reject(res)
  }
  let { hotelList, count } = res.data
  hotelList = hotelList.map(hotel => ({
    ...hotel,
    facilities: hotel.facilities.map(
      index => facilitiesMap[index])
  }))
  return { hotelList, count }
}

// 查询 筛选条件
export async function getFilter(cityName = '') {
  const result = await axios.get('1653-1', {
    params: assignParams({ 
      cityName, 
      returnFilter: 1
    })
  })
  const res = washResult(result)
  if(typeof res === 'string'){
    return reject(res)
  }
  const filter = res.filterInfo

  let area = filter[0].filterProsList
  area = mapAreaFilter(area)

  let brand = filter[3]
  brand = mapBrandFilter(brand)

  return [brand, ...area]
}

// 查询 酒店详情
export async function getHotelDetail(hotelId = '') {
  const result = await axios.get('1653-3', {
    params: assignParams({ 
      hotelId
    })
  })
  const res = washResult(result)
  if(typeof res === 'string'){
    return reject(res)
  }
  return res.data
}

// 查询 房间
export async function getRooms(params) {
  const { 
    hotelId = '',
    inDate = '',
    outDate = '' 
  } = params
  
  const result = await axios.get('1653-4', {
    params: assignParams({ 
      hotelId,
      inDate,
      outDate
    })
  })
  const res = washResult(result)
  if(typeof res === 'string'){
    return reject(res)
  }
  return res.roomInfo
}


// 数据处理 ==========================
// 返回 错误信息 或 成功结果
function washResult(result) {
  const data = result.data
  if(data.showapi_res_code) {
    return data.showapi_res_error
  }
  const res = data.showapi_res_body
  if(res.ret_code) {
    return res.remark
  }
  return res
}

// 处理 位置相关 筛选条件
function mapAreaFilter(area) {
  const mapFilterName = {
    businessDistricts: "商业区",
    hubs: "机场车站",
    spots: "景点",
    districts: "行政区",
    colleges: "大学",
    subways: "地铁站"
  }
  return area.map(subArea => ({
    filterName: mapFilterName[subArea.subName],
    filterProsList: subArea.subProsList.map(pro => {
      if(pro.pros) {
        return {
          subProsList: 
            pro.pros.map(station => station.name),
          subName: 
            subArea.subName === 'subways' ? 
            pro.name.replace(/\D*(?=\d)/,'') :  // 将 n号线 前面的文字 去掉
            pro.name
        }
      }
      else return pro.name
    })
  }))
}

// 处理 品牌 筛选条件
function mapBrandFilter(brand) {
  const { filterName, filterProsList } = brand
  return { 
    filterName, 
    filterProsList: filterProsList.map(sub => ({
      subName: sub.subName,
      subProsList: sub.subProsList.map(pro => pro.name)
    }))
  }
}


// 辅助方法 ==========================
// 合并系统级参数
function assignParams(params) {
  return Object.assign({
    showapi_appid,
    showapi_sign,
    showapi_timestamp: formatterDateTime()
  }, params)
}

// 获取时间戳
function formatterDateTime() {
  var date = new Date()
  var month = date.getMonth() + 1
  var datetime = date.getFullYear()
    + ""
    + (month >= 10 ? month : "0" + month)
    + ""
    + (date.getDate() < 10 ? "0" + date.getDate() : date
      .getDate())
    + ""
    + (date.getHours() < 10 ? "0" + date.getHours() : date
      .getHours())
    + ""
    + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
      .getMinutes())
    + ""
    + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
      .getSeconds());
  return datetime;
}