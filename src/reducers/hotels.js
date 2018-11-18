import * as types from "../constants";
import { combineReducers } from "redux";

const aboutUICreator = (postType, successTypes, failureType) => 
  (state = { 
    isFetching: false, 
    errorMessage: '' 
  }, action) => {
    switch (action.type) {
      case postType:
        return {
          ...state,
          isFetching: true
        }
      case failureType:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.error
        }
      default:
        if(successTypes.indexOf(action.type) > -1) {
          return {
            ...state,
            isFetching: false,
            errorMessage: ''
          }
        }
        return state
    }
  }

const keyWordChoicesByCityName = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_KEYWORDCHOICES_SUCCESS:
      return {
        ...state,
        [action.cityName]: action.response
      }
    default:
      return state
  }
}

export const keyWordChoices = combineReducers({
  byCityName: keyWordChoicesByCityName,
  aboutUI: aboutUICreator(
    types.REQUEST_KEYWORDCHOICES_POSTS,
    [types.RECEIVE_KEYWORDCHOICES_SUCCESS],
    types.RECEIVE_KEYWORDCHOICES_FAILURE
  )
})

const hotelItems = (state = {count: 0, hotelList: []}, action) => {
  switch (action.type) {
    case types.SET_HOTELS:
      return action.response
    case types.PUSH_HOTELS:
      return {
        ...state,
        hotelList: [
          ...state.hotelList,
          ...action.response.hotelList
        ]
      } 
    default:
      return state
  }
}

export const hotels = combineReducers({
  items: hotelItems,
  aboutUI: aboutUICreator(
    types.REQUEST_HOTELS_POSTS, 
    [types.SET_HOTELS, types.PUSH_HOTELS],
    types.RECEIVE_HOTELS_FAILURE
  )
})

const hotelDetailById = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_HOTELDETAIL_SUCCESS:
      return {
        ...state,
        [action.hotelId]: action.response
      }
    default:
      return state
  }
}

export const hotelDetail = combineReducers({
  byId: hotelDetailById,
  aboutUI: aboutUICreator(
    types.REQUEST_HOTELDETAIL_POSTS,
    [types.RECEIVE_HOTELDETAIL_SUCCESS],
    types.RECEIVE_HOTELDETAIL_FAILURE
  )
})

const roomsItems = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_ROOMS_SUCCESS:
      return action.response
    default:
      return state
  }
}

export const rooms = combineReducers({
  items: roomsItems,
  aboutUI: aboutUICreator(
    types.REQUEST_ROOMS_POSTS,
    [types.RECEIVE_ROOMS_SUCCESS],
    types.RECEIVE_ROOMS_FAILURE
  )
})