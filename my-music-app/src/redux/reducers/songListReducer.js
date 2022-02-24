import initialState from "./initialState";
import * as actionTypes from '../actions/actionTypes';

export default function songListReducer(state=initialState.songs,action){
    switch (action.type) {
        case actionTypes.GET_SONGS:
            return  action.payload
            // return action.payload
        default:
            return state;
    }
};