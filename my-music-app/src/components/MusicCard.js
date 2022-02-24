import React from 'react';
import '../styles/musicCard.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';

function MusicCard(props) {



    return (
        <div>
            <div className='music_card'>
               {/*  <audio ref={myAudio}

                    src={song.music}
                ></audio> */}
                <Card sx={{ width: 160 }}>
                    <CardActionArea className='cardAction'>
                        <CardMedia
                            onClick={()=>{props.onClick()}}
                            // onClick={()=>{props.onClick();props.onPlay()}}
                            // onClick={()=>dispatch({type:'play_song',id:song.id})}
                            component="img"
                            height="160"
                            image={props.song.photo}
                            alt="#"  />
                            <PlayCircleFilledIcon
                            // onClick={()=>{props.onClick()}}
                            
                            fontSize='large' className='play_circle' />
                            
                            
                            

                    </CardActionArea>
                    
                    <div className='card_content'>
                        <p className='song-name'>{props.song.title}
                        
                        </p>

                        <p className='singer-name'>
                            {props.song.singer}
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default MusicCard;



