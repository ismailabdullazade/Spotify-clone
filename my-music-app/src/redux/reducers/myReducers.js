import songListReducer from "./songListReducer";
import footerReducer from "./playReducer";
import songReducer from "./songReducer";
import {combineReducers} from 'redux'

const reducers = combineReducers({
    songListReducer,
    footerReducer,
    songReducer

});

export default reducers;