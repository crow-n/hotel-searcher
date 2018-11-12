import { combineReducers } from "redux";
import { filter } from "./filter";
import { keyWordChoices, hotels, hotelDetail, rooms } from "./hotels";

const rootReducer = combineReducers({
  filter,
  keyWordChoices,
  hotels,
  hotelDetail,
  rooms
})

export default rootReducer