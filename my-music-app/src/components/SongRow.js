import React, { useRef } from "react";
import '../styles/SongRow.css';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { bindActionCreators } from "redux";
import * as songActions from '../redux/actions/songActions';
import { connect } from "react-redux";

function SongRow(props) {

  const audioRef=useRef();
  const muzika=props.song.music;


  return (
 
    <div onClick={() => { props.onClick() }} className="songRow">
      <div className="songRow_pic">
        <img className="songRow__album" src={props.song.photo} alt="" />
        <div className="songRow__info">
          <h1>{props.song.singer}</h1>
          <p>
            {props.song.title}
          </p>
        </div>
      </div>
<audio ref={audioRef} src={muzika}></audio>
      <p>{props.song.title}</p>
      <p onClick={()=>console.log(audioRef.current.duration)} className="track_duration" >{audioRef.current?  audioRef.current.duration : 'yoxdu'}</p>
      <p><RemoveCircleOutlineIcon onClick={() => props.actions.removeSong(props.song)} /></p>
    </div>

  );
}



function mapDispatchToProps(dispatch) {

  return {
    actions: {
      removeSong: bindActionCreators(songActions.removeSong, dispatch),
    }
  }
};

export default connect(undefined, mapDispatchToProps)(SongRow);