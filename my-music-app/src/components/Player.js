import React, { useEffect } from 'react';
import MusicCard from './MusicCard';
import '../styles/Player.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as songActions from '../redux/actions/songActions';
import Footer from './Footer';
import { useState } from 'react';

function Player(props) {






    useEffect(() => {
        props.actions.getSongs();
    },[]);

    return (


        <div className='wrapper'>
            {
                props.songs.map(song => (
                    
                    <MusicCard 
                        key={song.id} song={song}
                        onClick={()=>props.actions.setFooter(song)}
                      
                    />
                ))
            }
            

        </div>

    );
}



function mapStateToProps(state) {
    return {
        songs: state.songListReducer,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getSongs: bindActionCreators(songActions.getSongs, dispatch),
            setFooter:bindActionCreators(songActions.setFooter,dispatch)
          
               
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);