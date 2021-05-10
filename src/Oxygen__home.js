import React from 'react';
import './Oxygen__home.css';
import { Link, NavLink } from "react-router-dom";

function OxygenHome() {
  return (

    <div className="oxygen__home">
        <div className="oxygen">
        <div className="oxygen__top">
          <img className="item__image" src="/1.png" alt="oxygen" />
          <h2>OXYGEN</h2>
        </div>

        <div className="oxygen__mid">

      <NavLink to="/concentrator" exact activeClassName="main-nav-active" className="oxygen__nav">
            <h3>Concentrator</h3>
           </NavLink>
           <NavLink to="/refill" exact activeClassName="main-nav-active" className="oxygen__nav">
            <h3>Refill</h3>
           </NavLink>
           <NavLink to="/cylinder" exact activeClassName="main-nav-active" className="oxygen__nav">
            <h3>Cylinder/Can</h3>
           </NavLink>
          
      </div>
      </div>
    </div>
  )
}

export default OxygenHome
