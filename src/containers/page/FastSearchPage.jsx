import { connect } from "react-redux";
import { toggleCityDrawer, toggleDateDrawer, toggleKeyWordDrawer, toggleStarPriceDrawer } from "../../actions";
import FastSearchPage from "../../components/page/FastSearchPage";

const formatDate = (date) => {
  const dateArr = date.split('-')
  return dateArr[1] + '月' + dateArr[2] + '日'
}

const countDays = (inDate, outDate) => {
  // 解决 谷歌 计算时间的 误差
  return Math.round(
    (new Date(outDate).getTime() - new Date(inDate).getTime())
    / (1000 * 60 * 60 * 24)
  )
}

const displayStarPrice = (star, minPrice, maxPrice) => {
  star = star.filter(v => v.selected).map(v => v.display).join('、')
  const range = displayRange(minPrice, maxPrice)
  return (
    star +
    (star && range ? '、' : '')
    + range
  )
}

const displayRange = (minPrice, maxPrice) => {
  if ((minPrice === 0 || minPrice === '') && maxPrice !== '') {
    return `￥${maxPrice} 以下`
  }
  else if ((minPrice !== 0 && minPrice !== '') && maxPrice === '') {
    return `￥${minPrice} 以上`
  }
  else if ((minPrice !== 0 && minPrice !== '') && maxPrice !== '') {
    return `￥${minPrice}-${maxPrice}`
  }
  else {
    return ""
  }
}

const mapStateToProps = (state) => {
  const { 
    cityName, 
    inDate, 
    outDate, 
    keyWords,
    star,
    minPrice,
    maxPrice
  } = state.filter

  return {
    cityName,
    inDate: formatDate(inDate),
    outDate: formatDate(outDate),
    days: countDays(inDate, outDate),
    keyWords,
    starPriceWords: displayStarPrice(star, minPrice, maxPrice)
  }
}

export default connect(
  mapStateToProps,
  { 
    toggleCityDrawer, 
    toggleDateDrawer, 
    toggleKeyWordDrawer, 
    toggleStarPriceDrawer 
  }
)(FastSearchPage)