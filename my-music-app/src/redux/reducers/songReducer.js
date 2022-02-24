import initialState from "./initialState";
import * as actionTypes from '../actions/actionTypes';

export default function songReducer(state=initialState.likedSongs,action){
    switch (action.type) {

        case actionTypes.ADD_SONG:
            const addedSong=action.payload;
            const addedBefore=state.find(s=>s.id === action.payload.id);

            if(addedBefore){
                return state;
            }else
            return[
                ...state,addedSong
            ]

        case actionTypes.REMOVE_SONG:
           const newState=state.filter(rs => rs.id !== action.payload.id);
           return newState;
               
    
        default:
            return state;
    }
}