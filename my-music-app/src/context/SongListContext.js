/* import {v4 as uuidv4} from 'uuid';
import { createContext, useReducer } from "react";


export const SongsContext=createContext();

const SongsContextProvider=(props)=>{ 

    const reducer=(songs,action)=>{
        switch (action.type) {
            case 'play_song':
                return console.log(action.song);
                
        
            default:
                return songs;
        }
    };

    const [songs,dispatch]=useReducer(reducer,[
        { id:uuidv4(),image:'./photos/Chloe.jpg',title:'Dream It Possible',singer:'Chloe 777',music:'./music/Dream-Possible.mp3'},
        { id:uuidv4(),image:'./photos/Miyagi-Panda.jpg',title:'Kosandra',singer:'Miyagi- Andy',music:'./music/Miyagi-Panda.mp3'},
        { id:uuidv4(),image:'./photos/guitar-music.jpg',title:'Shape of You',singer:'Ed Sheran',music:'./music/Shape-You/mp3'},
        { id:uuidv4(),image:'./photos/dust-music.jpg',title:'Suncrown',singer:'Scorpions',music:'./music/Suncrown.mp3'}
    ])

    return(
        <SongsContext.Provider value={{songs,dispatch}}>
            {props.children}
        </SongsContext.Provider>
    )
}

export default SongsContextProvider; */