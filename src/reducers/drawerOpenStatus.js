import * as types from "../constants";

const initialState = {
  isCityDrawerOpen: false,
  isDateDrawerOpen: false,
  isKeyWordDrawerOpen: false,
  isKeyWordDetailDrawerOpen: false,
  isStarPriceDrawerOpen: false,
  isSortOrderDrawerOpen: false,
  isPicBannerDrawerOpen: false,
  isMapDrawerOpen: false,
  isRoomsDrawerOpen: false,
}

export const drawerOpenStatus = (state = initialState, action) => {
  const toggleStatus = (key) => ({
    ...state,
    [key]: !state[key]
  })

  switch (action.type) {
    case types.TOGGLE_CITY_DRAWER:
      return toggleStatus('isCityDrawerOpen')
    case types.TOGGLE_DATE_DRAWER:
      return toggleStatus('isDateDrawerOpen')
    case types.TOGGLE_KEYWORD_DRAWER:
      return toggleStatus('isKeyWordDrawerOpen')
    case types.TOGGLE_KEYWORDDETAIL_DRAWER:
      return toggleStatus('isKeyWordDetailDrawerOpen')
    case types.TOGGLE_STARPRICE_DRAWER:
      return toggleStatus('isStarPriceDrawerOpen')
    case types.TOGGLE_SORTORDER_DRAWER:
      return toggleStatus('isSortOrderDrawerOpen')
    case types.TOGGLE_PICBANNER_DRAWER:
      return toggleStatus('isPicBannerDrawerOpen')
    case types.TOGGLE_MAP_DRAWER:
      return toggleStatus('isMapDrawerOpen')
    case types.TOGGLE_ROOMS_DRAWER:
      return toggleStatus('isRoomsDrawerOpen')
    default:
      return state
  }
}