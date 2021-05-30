import { combineReducers } from "redux";
import courses from "./courses";
import category from "./category";
import auth from "./auth";
import register from "./register";
import course from "./course";
import user from "./user";
import enroll from './enroll'
const rootReducer = combineReducers({
  //Declare child reducers
  course,
  courses,
  category,
  auth,
  register,
  user,
  enroll,
});

export default rootReducer;
