import './App.css';
import { BrowserRouter as Router, Link, Routes, Route, Outlet } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Library from './components/Library';
import LikedSongs from './components/LikedSongs';
import SongsContextProvider from './context/SongListContext';
import Body from './components/Body';

function App() {
  return (

          <div>
          <Home/>
          </div>
          
         
   
  );
}

export default App;
