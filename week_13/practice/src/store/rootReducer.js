import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlicer"

const rootReducer = combineReducers({
    data: dataReducer,
    //another reducer
});

export default rootReducer;
