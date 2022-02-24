import React from "react";
import "./Ocean.css";
import Island from "./Island.js";
import Bottle from "./Bottle.js"

function Ocean(props) {
  return (<div className="ocean">
    <Island
    showScroll={props.islandClicked}/>
    <div className="waterline-back">
      <div className="dark-waves"></div>
      <div className="light-waves"></div>
    </div>
    <Bottle
    setMessage={props.bottleClicked}/>
    <div className="waterline-front">
      <div className="dark-waves"></div>
      <div className="light-waves"></div>
    </div>
    <div className="dark-waves bottom"></div>
  </div>);
}

export default Ocean;
