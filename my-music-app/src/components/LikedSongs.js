import React from 'react';
import '../styles/test.scoped.css'
import styled from 'styled-components';
import SongRow from './SongRow';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as songActions from '../redux/actions/songActions';

function LikedSongs(props) {
  return (
    <Alan_Section>
      <Header_part>
        <Header_content>
          <img src='	https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebc02d416c309a68b04dc94576/1/en/large'></img>

          <Header_descriptions>
            <span>PLAYLIST</span>
            <Playlist>Liked Songs</Playlist>


            <Header_singers>Alan Walker, Kane Brown, Billie Eilish and more</Header_singers>
          </Header_descriptions>
        </Header_content>
      </Header_part>

      <Songrow_info>
        <Songrow_title>
          #  TITLE
        </Songrow_title>
        <Songrow_album>
          ALBUM
        </Songrow_album>
        <Songrow_icon>
          <AccessTimeOutlinedIcon />
        </Songrow_icon>
        <Songrow_title>
           Remove
        </Songrow_title>
      </Songrow_info>
      {
        props.favSongs.map(favSong => (
          <SongRow
          onClick={()=>props.actions.setFooter(favSong)}
          key={favSong.id} song={favSong} />
        ))
      }


    </Alan_Section>


  );
}


function mapStateToProps(state) {
  return {
    favSongs: state.songReducer,
    
  }
};
function mapDispatchToProps(dispatch){
  return{
    actions:{
      setFooter:bindActionCreators(songActions.setFooter,dispatch)
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(LikedSongs);

const Songrow_info = styled.div`

border-bottom: 0.5px solid grey;
display: flex;
justify-content: space-between;
padding:7px 25px;
/* padding-top: 5px; */
/* background-color: black; */
`;
const Songrow_title = styled.p`
color: grey;
background-color: transparent;
font-size: 15px;
`;
const Songrow_album = styled.p`
color: grey;
background-color: transparent;
font-size:15px;
`;
const Songrow_icon = styled.div`
width: auto;
`;

const Alan_Section = styled.div`
width: 100%;
`;
const Header_part = styled.div`
background-color: rgb(24, 22, 22);
    padding: 30px;
`;
const Header_content = styled.div`
display: flex;
     height: 30vh;
`;
const Header_descriptions = styled.div`
margin-left: 50px;

`;
const Header_singers = styled.div`
color:  grey;

`;
const Playlist = styled.h1`
font-size:80px;

`;




{/*  <div className="body__info">
        <img src="./photos/Alan-Walker.jpg" alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Description</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"

          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>


        <SongRow />


      </div> */}