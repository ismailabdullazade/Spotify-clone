import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import styled from 'styled-components';
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import * as songActions from '../redux/actions/songActions';
import '../styles/Footer.css';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import { useContext, useRef, useState } from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
// import { SongsContext } from "../context/SongListContext";

function Footer(props) {

    // const songs = useSelector(state=>state.songs.map());
    // const songTitle  = props.songs.map(item=>item.title);





    const audioPlayer = useRef();
    const sliderVolume = useRef();
    const sliderPosition = useRef();

    const [playsong, setPlaysong] = useState('');
    const [volumeit, setVolumeit] = useState(true);
    const [volumeValue, setVolumeValue] = useState('');
    const [sliderValue, setSliderValue] = useState('');


    const onMoveSlider = (e) => {

        sliderPosition.current.value = e.target.value;
        audioPlayer.current.currentTime = (sliderPosition.current.value * audioPlayer.current.duration) / 100;

    };

    const justMove = () => {
        let position = (audioPlayer.current.currentTime * 100) / audioPlayer.current.duration;
        setSliderValue(position);
    }

    const onMove = (e) => {
        sliderVolume.current.value = e.target.value;
        setVolumeValue(sliderVolume.current.value);
        audioPlayer.current.volume = sliderVolume.current.value / 100;
    }

    const Playit = () => {
        
        audioPlayer.current.play();
        setPlaysong(true);
        setInterval(justMove, 1000);
        // console.log(props.songs);
        // console.log(songTitle);

    };
    const Stopit = () => {
        audioPlayer.current.pause();
        setPlaysong(false);
    };

    const Muteit = () => {
        audioPlayer.current.volume = 0;
        setVolumeit(false);

    };
    const Volumeit = () => {
        audioPlayer.current.volume = 1;
        setVolumeit(true);
    }
    
    


    return (
        <div className="footer">

            {
                props.currSong.photo ? (
                    <div className="footer__left">
                        <img
                            className="footer__albumLogo"
                            src={props.currSong.photo}
                            alt='#'
                        />
                        <div className="footer__songInfo">
                            <h4>{props.currSong.singer}</h4>
                            <p>{props.currSong.title} </p>
                        </div>
                        <audio
                            ref={audioPlayer}
                            src={props.currSong.music}>

                        </audio>
                        <FavIcon>
                            <FavoriteIcon className='favIcon'
                            onClick={()=>props.actions.addToFav(props.currSong)}
                            fontSize="small" />
                        </FavIcon>


                    </div>
                ) : 
                (
                    <div className="footer__left">
                        <img
                            className="footer__albumLogo"
                            src='./photos/Chloe.jpg'
                            alt='#'
                        />
                        <div className="footer__songInfo">
                            <h4>Chloe</h4>
                            <p>Dream it Possible </p>
                        </div>
                        <audio
                            ref={audioPlayer}
                            src='./music/Dream-Possible.mp3'>

                        </audio>
                        <FavIcon>
                            <FavoriteBorderIcon fontSize="small" />
                        </FavIcon>


                    </div>
                )
            }
            <div className="footer-player">
                <div className="footer__center">
                    <ShuffleIcon className="footer__green" />
                    <SkipPreviousIcon className="footer__icon" />
                    {
                        playsong ? (
                            <PauseCircleOutlineIcon
                                onClick={Stopit}
                                fontSize="large"
                                className="footer__icon"
                            />
                        ) :
                            (
                                <PlayCircleOutlineIcon

                                    onClick={Playit}
                                    fontSize="large"
                                    className="footer__icon"
                                />
                            )
                    }
                    <SkipNextIcon className="footer__icon" />
                    <RepeatIcon className="footer__green" />
                </div>

                <Slider
                    ref={sliderPosition}
                    onChange={onMoveSlider}
                    value={sliderValue}
                    size="small"
                    aria-labelledby="continuous-slider" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        {
                            volumeit ? (
                                < VolumeUpIcon
                                    onClick={Muteit}
                                />


                            ) : (
                                <VolumeOffIcon
                                    onClick={Volumeit}
                                />
                            )
                        }


                    </Grid>
                    <Grid item xs>
                        <Slider
                            onChange={onMove}
                            value={volumeValue}
                            ref={sliderVolume}
                            size='small' aria-labelledby="continuous-slider" />
                        {/* <input type="range" min="0" max="100" value="90"></input> */}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}



const FavIcon = styled.div`
margin-left: 35px;
cursor: pointer;

`;

function mapStateToProps(state) {
    return {
        currSong: state.footerReducer,
        
    }
};

function mapDispatchToProps(dispatch){
    return{
        actions:{
            addToFav:bindActionCreators(songActions.addSong,dispatch),
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer);

/* function mapStateToProps(state){
    return{
        playerStatus:state.playerReducer
    }
};

export default connect(mapStateToProps)(Footer) */

/* function mapStateToProps(state){
    return{
        song:state.playReducer
    }
}; */

// export default connect(mapStateToProps)(Footer)



{/* {item ? (
                    <div className="footer__songInfo">
                        <h4>{item.name}</h4>
                        <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                ) : (
                    <div className="footer__songInfo">
                        <h4>No song is playing</h4>
                        <p>...</p>
                    </div>
                )} */}