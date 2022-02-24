import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "../styles/body.scoped.css";
import Header from "./Header";
import Player from "./Player";
import LikedSongs from './LikedSongs'
import Home from "@mui/icons-material/Home";
import Login from "./Login";
import Library from "./Library";




function Body() {

  
  return (
    <div className="body">
      <Header />

      <Routes>
        
        <Route path="/home" element={<Player />}/ >
          <Route path='/home/liked' element={<LikedSongs />} />
          <Route path='/home/library' element={<Library />} />
        
      </Routes>
    </div>
  );

};

export default Body;