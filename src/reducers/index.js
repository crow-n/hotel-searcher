import { combineReducers } from "redux";
import { filter } from "./filter";
import { drawerOpenStatus } from "./drawerOpenStatus";
import { keyWordChoices, hotels, hotelDetail, rooms } from "./hotels";

const rootReducer = combineReducers({
  filter,
  drawerOpenStatus,
  keyWordChoices,
  hotels,
  hotelDetail,
  rooms
})

export default rootReducer