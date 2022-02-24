import * as actionTypes from './actionTypes';

export function getSongsSuccess(songs){
    return {
        type: actionTypes.GET_SONGS,
        payload:songs
    }
};

export function getSongs(){
    return function (dispatch){
        let url="http://localhost:3000/songs";
        return fetch(url)
        .then(response=>response.json())
        .then(result=>dispatch(getSongsSuccess(result)))
    }
};

export function setFooter(curr_song){
    return{
        type:actionTypes.SET_FOOTER,
        payload:curr_song
    }
};

export function addSong(mySong){
    return{
        type:actionTypes.ADD_SONG,
        payload:mySong
    }
};

export function removeSong(mySong){
    return{
        type:actionTypes.REMOVE_SONG,
        payload:mySong
    }
}

/* export function setPlay(){
    return function (dispatch){
        
    }
} */

