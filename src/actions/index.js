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

export const loadHotelsIfNotFetching = (filter) => ({
  types: [
    types.REQUEST_HOTELS_POSTS,
    types.SET_HOTELS,
    types.RECEIVE_HOTELS_FAILURE
  ],
  shouldCallAPI: (state) => !state.hotels.aboutUI.isFetching,
  callAPI: () => hotelAPI.searchHotel(filter),
})

const shouldPushHotels = (state) => {
  const hotels = state.hotels
  const items = hotels.items
  if(items.hotelList.length >= items.count) {
    return false
  }

  return !hotels.aboutUI.isFetching
}

export const pushHotelsIfAllowed = (filter) => ({
  types: [
    types.REQUEST_HOTELS_POSTS,
    types.PUSH_HOTELS,
    types.RECEIVE_HOTELS_FAILURE
  ],
  shouldCallAPI: shouldPushHotels,
  callAPI: () => hotelAPI.searchHotel(filter),
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

export const setRooms = (hotelId, inDate, outDate) => ({
  types: [
    types.REQUEST_ROOMS_POSTS,
    types.RECEIVE_ROOMS_SUCCESS,
    types.RECEIVE_ROOMS_FAILURE
  ],
  callAPI: () => hotelAPI.getRooms({hotelId, inDate, outDate}),
})