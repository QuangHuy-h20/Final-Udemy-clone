import { combineReducers } from "redux";
import courses from "./courses";
import category from "./category";
import auth from "./auth";
import register from "./register";
import course from "./course";
import user from "./user";
import enroll from "./enroll";
import admin from "./admin";
const rootReducer = combineReducers({
  //Declare child reducers
  course,
  courses,
  category,
  auth,
  register,
  user,
  enroll,
  admin,
});

export default rootReducer;
