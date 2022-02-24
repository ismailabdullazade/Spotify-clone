import React from "react";
import '../styles/Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from "@mui/icons-material/Search";


function Header() {

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <AccountCircleIcon alt="" src='' />
        <h4>Ismail</h4>
      </div>
    </div>
  );
}

export default Header;