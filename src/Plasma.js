import React, { useState } from "react";
import JSONDATA from "./JSON/PLASMA_DATA.json";
import './Plasma.css';
import * as FiIcon from "react-icons/fi";
import {IconContext} from 'react-icons';
import SocialShare from './SocialShare';
import { TwitterIcon } from "react-share";
function Plasma() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <IconContext.Provider value={{ color: "#1C212E" }}>
    <div className="plasma">
      <div className="plasma__top">
      <img className="item__image" src="/2.png" alt="plasma"/>
        <h1>PLASMA</h1>
      </div>
      <div className="plasma__mid">
        <input
          type="text"
          placeholder="Search By City or Name"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
         {(searchTerm != "") ? (
            <div  className="twitter__Button twitterbuttonShow">

         
            <a
                href={`https://twitter.com/search?q=${searchTerm}%20plasma%20verified&src=typed_query&f=live`}
               
              > 
              <TwitterIcon
              logofillColor="white"
              round={true}
              size={35}
            
            ></TwitterIcon>
                Live Oxygen Concentrator Results For <h4>  {searchTerm}  
                  </h4>
              </a>
             
            </div>
          ) : (
            <div  className="twitter__Button twitterbuttonHide">

         
          <a
              href={`https://twitter.com/search?q=${searchTerm}%20plasma%20verified&src=typed_query&f=live`}
             
            > 
            <TwitterIcon
            logofillColor="white"
            round={true}
            size={35}
          
          ></TwitterIcon>
              Live Oxygen Concentrator Results For <h4> {searchTerm} 
                </h4>
            </a>
           
          </div>
          )}
        {JSONDATA.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.city.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
          else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          } else if (
            val.name=="In Verification Coming Soon"
          ) {
            return val;
          } else if (
            val.availability.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((item, index) => {
          return (
            <li className={item.cName} key={index}>
            
             

              <h5>{item.verified}</h5>
              <h4>{item.name}</h4>
              
              <a href={`tel:${item.number}`} className="number_icon">
                  <h2>{item.number}</h2>
                  
                </a>
               
              <h6>{item.availability}</h6>
             
              <p>{item.city}</p>
              <a href={item.website} >
                  <p>{item.website}</p>
                 
                </a>
              
            </li>
          );
        })}
        {/* <SocialShare/> */}
      </div>
    </div>
    </IconContext.Provider>
  );
}

export default Plasma;
