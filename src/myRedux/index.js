import { combineReducers } from "redux";
import eventRedux from "./eventRedux";
import authRedux from "./authRedux";

export default combineReducers({ events: eventRedux, auth: authRedux });