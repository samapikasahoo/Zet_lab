import changeNumber from './upDown'
import updateNumber from './Up'

import {combineReducers} from "redux";

const  rootReducer = combineReducers({
    changeNumber,updateNumber});

export default rootReducer 