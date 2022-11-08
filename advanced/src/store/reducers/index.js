import { combineReducers } from "@reduxjs/toolkit";
import SetReducer from "../reducers/setSlice"
import CardReducer from "../reducers/cardSlice";

const rootReducer = combineReducers({
    set: SetReducer,
    card: CardReducer
});

export default rootReducer;