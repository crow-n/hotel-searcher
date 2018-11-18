import { connect } from "react-redux";
import { toggleCityDrawer, toggleDateDrawer, toggleKeyWordDrawer, toggleStarPriceDrawer, toggleSortOrderDrawer } from "../../actions";
import { sortCodeMap } from "../../request/hotel";
import HeaderFilterForm from "../../components/combination/HeaderFilterForm";

const displayStarPrice = (star, minPrice, maxPrice) => {
  star = star.filter(v => v.selected).map(v => v.display.match(/.+(?=\/)/)).join('、')
  const range = displayPriceRange(minPrice, maxPrice)
  return (
    star +
    (star && range ? '、' : '')
    + range
  )
}

const displayPriceRange = (minPrice, maxPrice) => {
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

const cutYear = (date) => {
  return date.replace(/\d+-/, '')
}

const mapStateToProps = (state) => {
  const {
    cityName,
    inDate,
    outDate,
    keyWords,
    star,
    minPrice,
    maxPrice,
    sortCode
  } = state.filter

  return {
    cityName,
    dateRange: cutYear(inDate) + '~' + cutYear(outDate),
    keyWords,
    starPriceWords: displayStarPrice(star, minPrice, maxPrice),
    sortOrderWords: sortCodeMap[sortCode]
  }
}

export default connect(
  mapStateToProps,
  {
    toggleCityDrawer,
    toggleDateDrawer,
    toggleKeyWordDrawer,
    toggleStarPriceDrawer,
    toggleSortOrderDrawer,
  }
)(HeaderFilterForm)