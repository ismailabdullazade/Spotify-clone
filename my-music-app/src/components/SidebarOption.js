import React from "react";
import '../styles/SidebarOption.css';
import { useNavigate, Link } from "react-router-dom";
import {useRef} from 'react';


function SidebarOption({ option = "test", Icon}) {

  
  

  return (
    <div onClick={()=>console.log(window.location.pathname)} className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
     
    </div>
  );
}

export default SidebarOption;