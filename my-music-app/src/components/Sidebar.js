import React from "react";
import '../styles/Sidebar.css'
import SidebarOption from "./SidebarOption";
import { Outlet, useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import Player from "./Player";
import LikedSongs from "./LikedSongs";
// import { getTokenFromResponse } from "./spotify";
// import { useStateValue } from "./StateProvider";

function Sidebar() {

  // const navigate = useNavigate();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <Link to='/home' >
      <SidebarOption href={'/home'} Icon={HomeIcon} option="Home" />
      </Link>

      <SidebarOption  Icon={SearchIcon} option="Search" />
 <Link to='/home/library' >
 <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
 
 </Link>
      
      <br />
      <SidebarOption href={'/home/create'} Icon={AddBoxTwoToneIcon} option="Create Playlist" />


     <Link to='/home/liked' >
     <SidebarOption href={'/home/liked'}
         Icon={FavoriteTwoToneIcon} option="Liked Songs" />
     </Link>

     <Outlet/>

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {/* {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))} */}


    </div>

  );
}

export default Sidebar;