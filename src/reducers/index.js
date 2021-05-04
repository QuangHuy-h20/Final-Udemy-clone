import { combineReducers } from "redux";
import courses from "./courses";
import auth from "./auth";
import register from "./register";

const rootReducer = combineReducers({
  //Declare child reducers
  courses,
  auth,
  register,
});

export default rootReducer;
