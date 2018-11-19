import * as types from "../constants";

function formatDate(date) {
  var month = date.getMonth() + 1
  return date.getFullYear()
    + "-"
    + (month >= 10 ? month : "0" + month)
    + "-"
    + (date.getDate() < 10 ? "0" + date.getDate() : date
      .getDate())
}

const initialState = {
  cityName: '北京',
  inDate: formatDate(new Date()),
  outDate: formatDate(new Date(Date.now() + 1000 * 60 * 60 * 24)),
  keyWords: '',
  star: [{
    type: "TWO,BUDGET",
    display: "二星及以下/经济",
    selected: false,
  }, {
    type: "THREE,CONFORT",
    display: "三星/舒适",
    selected: false,
  }, {
    type: "FOUR,HIGHEND",
    display: "四星/高档",
    selected: false,
  }, {
    type: "FIVE,LUXURY",
    display: "五星/豪华",
    selected: false,
  },],
  minPrice: '',
  maxPrice: '',
  sortCode: '1',
  page: 0,
}

export const filter = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CITYNAME:
    case types.SET_KEYWORDS:
    case types.SET_STAR:
    case types.SET_MINPRICE:
    case types.SET_MAXPRICE:
    case types.SET_SORTCODE:
    case types.SET_PAGE:
      const { type, ...res } = action
      return {
        ...state,
        ...res
      }
    case types.SET_INDATE:
      return {
        ...state,
        inDate: formatDate(action.inDate)
      }
    case types.SET_OUTDATE:
      return {
        ...state,
        outDate: formatDate(action.outDate)
      }
    default:
      return state
  }
}