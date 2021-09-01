import postsReducer from "./postsReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  array: postsReducer,
});

export default allReducers;
