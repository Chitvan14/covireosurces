import React from "react";
import "./Bottom.css";
import { Link, NavLink } from "react-router-dom";
import SocialShare from './SocialShare';

function Bottom() {
  return (
    <>
      <div className="bottom">
        <div className="bottomElement">
          <NavLink to="/oxygen" exact activeClassName="main-nav-active">
            <h1>Oxygen Supply</h1>
          
          </NavLink>
          <NavLink to="/plasma" exact activeClassName="main-nav-active">
            <h1>Plasma Donor</h1>
           </NavLink>
          {/* <NavLink to="/doctor" exact activeClassName="main-nav-active">
            <h1>Doctor</h1>
          </NavLink> */}
          {/* <NavLink to="/ambulance" exact activeClassName="main-nav-active">
            <h1>Ambulance</h1>
          </NavLink> */}
          {/* <NavLink to="/homenurse" exact activeClassName="main-nav-active">
            <h1>Home Nurse</h1>
          </NavLink> */}
           <NavLink to="/foodservice" exact activeClassName="main-nav-active">
            <h1>Food Service</h1>
          </NavLink>
         
          
        </div>

        <div className="bottomElement">
          {/* <NavLink to="/fabiflue" exact activeClassName="main-nav-active">
            <h1>Fabiflue</h1>
          </NavLink> */}
           <NavLink to="/beds" exact activeClassName="main-nav-active">
            <h1>Beds Availability</h1>
          </NavLink>
          <NavLink to="/remdesivir" exact activeClassName="main-nav-active">
            <h1>Remdesivir Injection</h1>
          </NavLink>
         
          
         
        </div>
      </div>
    </>
  );
}

export default Bottom;
