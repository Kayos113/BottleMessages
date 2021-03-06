import React from "react";
import "./Sky.css"
import "./animations.css"

function Sky() {
  return (<div className="sky">
    <div className="sun"></div>
    <img className = "cloud one" src="./images/cloud.svg" alt=""/>
    <img className = "cloud two" src="./images/cloud.svg" alt=""/>
    <img className = "cloud three" src="./images/cloud.svg" alt=""/>
  </div>);
}

export default Sky;
