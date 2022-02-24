import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Login.css'

function Login() {
    return (
        <div className="login">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
        <Link to='/home'>Click to Start</Link>
      </div>
    );
}   

export default Login;