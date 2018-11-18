import * as hotelAPI from '../request/hotel'
import * as types from '../constants'

function makeActionCreator(type, ...argNames) {
  return function(...args) {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export const setCity = makeActionCreator(types.SET_CITYNAME, 'cityName')
export const setInDate = makeActionCreator(types.SET_INDATE, 'inDate')
export const setOutDate = makeActionCreator(types.SET_OUTDATE, 'outDate')
export const setKeyWords = makeActionCreator(types.SET_KEYWORDS, 'keyWords')
export const setStar = makeActionCreator(types.SET_STAR, 'star')
export const setMinPrice = makeActionCreator(types.SET_MINPRICE, 'minPrice')
export const setMaxPrice = makeActionCreator(types.SET_MAXPRICE, 'maxPrice')
export const setSortCode = makeActionCreator(types.SET_SORTCODE, 'sortCode')
export const setPage = makeActionCreator(types.SET_PAGE, 'page')

export const toggleCityDrawer = makeActionCreator(types.TOGGLE_CITY_DRAWER)
export const toggleDateDrawer = makeActionCreator(types.TOGGLE_DATE_DRAWER)
export const toggleKeyWordDrawer = makeActionCreator(types.TOGGLE_KEYWORD_DRAWER)
export const toggleKeyWordDetailDrawer = makeActionCreator(types.TOGGLE_KEYWORDDETAIL_DRAWER)
export const toggleStarPriceDrawer = makeActionCreator(types.TOGGLE_STARPRICE_DRAWER)
export const toggleSortOrderDrawer = makeActionCreator(types.TOGGLE_SORTORDER_DRAWER)
export const togglePicBannerDrawer = makeActionCreator(types.TOGGLE_PICBANNER_DRAWER)
export const toggleMapDrawer = makeActionCreator(types.TOGGLE_MAP_DRAWER)
export const toggleRoomsDrawer = makeActionCreator(types.TOGGLE_ROOMS_DRAWER)

export const loadKeyWordChoicesIfNeeded = (cityName) => ({
  types: [
    types.REQUEST_KEYWORDCHOICES_POSTS,
    types.RECEIVE_KEYWORDCHOICES_SUCCESS,
    types.RECEIVE_KEYWORDCHOICES_FAILURE
  ],
  shouldCallAPI: (state) => !state.keyWordChoices.byCityName[cityName],
  callAPI: () => hotelAPI.getFilter(cityName),
  payload: { cityName }
})

const mapFilter = (state) => {
  const { filter } = state
  return {
    ...filter,
    star: filter.star.reduce(
      (str,el) => el.selected 
        ? str + el.type + ',' 
        : str
    , '')
  }
}

const callSearchHotelsAPI = (state) => 
  hotelAPI.searchHotel(mapFilter(state))

const resetPageIfPageNotZero = (dispatch, state) => {
  if(state.filter.page !== 0) {
    dispatch(setPage(0))
  }
}

export const resetPageAndLoadHotels = () => ({
  types: [
    types.REQUEST_HOTELS_POSTS,
    types.SET_HOTELS,
    types.RECEIVE_HOTELS_FAILURE
  ],
  beforeCallAPI: resetPageIfPageNotZero,
  callAPI: callSearchHotelsAPI,
})

const shouldPushHotels= (state) => {
  const { hotels } = state
  const { items, aboutUI } = hotels
  if(items.hotelList.length >= items.count) {
    return false
  }
  return !aboutUI.isFetching
}

const increasePage = (dispatch, state) => {
  dispatch(setPage(state.filter.page + 1))
}

export const increasePageAndPushHotelsIfAllowed = () => ({
  types: [
    types.REQUEST_HOTELS_POSTS,
    types.PUSH_HOTELS,
    types.RECEIVE_HOTELS_FAILURE
  ],
  shouldCallAPI: shouldPushHotels,
  beforeCallAPI: increasePage,
  callAPI: callSearchHotelsAPI,
})

export const loadHotelDetailIfNeeded = (hotelId) => ({
  types: [
    types.REQUEST_HOTELDETAIL_POSTS,
    types.RECEIVE_HOTELDETAIL_SUCCESS,
    types.RECEIVE_HOTELDETAIL_FAILURE
  ],
  shouldCallAPI: (state) => !state.hotelDetail.byId[hotelId],
  callAPI: () => hotelAPI.getHotelDetail(hotelId),
  payload: { hotelId }
})

export const loadRooms = (hotelId, inDate, outDate) => ({
  types: [
    types.REQUEST_ROOMS_POSTS,
    types.RECEIVE_ROOMS_SUCCESS,
    types.RECEIVE_ROOMS_FAILURE
  ],
  callAPI: () => hotelAPI.getRooms({hotelId, inDate, outDate}),
})