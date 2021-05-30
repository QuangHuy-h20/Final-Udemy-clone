import { combineReducers } from "redux";
import courses from "./courses";
import category from "./category";
import auth from "./auth";
import register from "./register";
import courseDetail from "./courseDetail";
import user from "./user";
import admin from "./admin"
const rootReducer = combineReducers({
  //Declare child reducers
  courseDetail,
  courses,
  category,
  auth,
  register,
  user,
  admin,
});

export default rootReducer;
