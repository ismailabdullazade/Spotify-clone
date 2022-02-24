import initialState from "./initialState";

import * as actionTypes from '../actions/actionTypes';

export default function footerReducer(state=initialState.footer_song,action){
    switch (action.type) {
        case actionTypes.SET_FOOTER:
            return action.payload;
         
    
        default:
            return state;
    }
}