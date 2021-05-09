import React from 'react';
import './Oxygen__home.css';
import { Link, NavLink } from "react-router-dom";

function OxygenHome() {
  return (

    <div className="oxygen__home">
        <div className="oxygen">
        <div className="oxygen__top">
          <img className="item__image" src="/1.png" alt="oxygen" />
          <h1>OXYGEN</h1>
        </div>

        <div className="oxygen__mid">

      <NavLink to="/concentrator" exact activeClassName="main-nav-active" className="oxygen__nav">
            <h1>Concentrator</h1>
           </NavLink>
           <NavLink to="/refill" exact activeClassName="main-nav-active" className="oxygen__nav">
            <h1>Refill</h1>
           </NavLink>
           <NavLink to="/cylinder" exact activeClassName="main-nav-active" className="oxygen__nav">
            <h1>Cylinder/Can</h1>
           </NavLink>
          
      </div>
      </div>
    </div>
  )
}

export default OxygenHome
