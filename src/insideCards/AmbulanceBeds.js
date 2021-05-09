import React, { useState } from "react";
import JSONDATA from "../JSON/AMBULANCE_BED_DATA.json";
import "./bedscommon.css";
import { IconContext } from "react-icons";
import { TwitterIcon } from "react-share";

function AmbulanceBeds() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
   
      <div className="icubeds">
        <div className="icubeds__top">
          <img className="item__image" src="/9.png" alt="icubeds" />
          <h1>AMBULANCE BEDS</h1>
        </div>
        <div className="icubeds__mid">
          <input
            type="text"
            placeholder="Search By City or Name"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          ></input>
<div >
  <h1 style={{color: "red"}}>check</h1>
            </div>

          {(searchTerm != "" )? (
            <div className="twitterButton twitterbuttonShow">
              <a
                href={`https://twitter.com/search?q=${searchTerm}%20ambulance%20verified&src=typed_query&f=live`}
              >
                <TwitterIcon
                  logofillColor="white"
                  round={true}
                  size={35}
                ></TwitterIcon>
                Live Ambulance Results For <h4> {searchTerm}</h4>
              </a>
            </div>
          ) : (
            <div className="twitterButton twitterbuttonHide">
              <a
                href={`https://twitter.com/search?q=${searchTerm}%20ambulance%20verified&src=typed_query&f=live`}
              >
                <TwitterIcon
                  logofillColor="white"
                  round={true}
                  size={35}
                ></TwitterIcon>
                Live Ambulance Results For <h4> {searchTerm}</h4>
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
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            } else if (val.name == "In Verification Coming Soon") {
              return val;
            }
          }).map((item, index) => {
            return (
              <li className={item.cName} key={index}>
                {/* <a href="tel:123-456-7890"> */}

                <h5>{item.verified}</h5>
                <h4>{item.name}</h4>
                <a href={`tel:${item.number}`} className="number_icon">
                  <h2>{item.number}</h2>
                  <div>{/* <FiIcon.FiPhoneCall /> */}</div>
                </a>
                <h6>{item.availability}</h6>
                <p>{item.city}</p>
              </li>
            );
          })}
          {/* <SocialShare/> */}
        </div>
      </div>
   
  );
}

export default AmbulanceBeds;
