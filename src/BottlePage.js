import  React, { useState } from "react";
import "./BottlePage.css";
import Sky from "./Sky"
import Ocean from "./Ocean";

function BottlePage() {

  const [messageString, setMessageString] = useState("");
  const [islandActive, setIslandActive] = useState("inactive");

  function bottleClicked(event) {
    alert("hi");
    setMessageString("Hi");
  }

  function islandClicked() {
    setIslandActive("active");
  }

  return (
<div className="canvas">
  <Sky />
  <Ocean
    bottleClicked={bottleClicked}
    islandClicked={islandClicked}
  />
  <div id="message-scroll" className="message-scroll inactive">
    <img className = "message-scroll-image" src="https://assets.codepen.io/3073193/scroll-top.svg" />
    <div className = "message-scroll-bg">
      <h1 id="scrollText" className="message inactive">{messageString}</h1>
    </div>
  </div>
  <div id="form-scroll" className={islandActive}>
    <img className = "form-scroll-image" src="https://assets.codepen.io/3073193/scroll-top.svg" />
    <div className = "form-scroll-bg">
      <form className="form" method="post">
        <div className="container">
          <textarea className="textarea" name="name" rows="12" cols="36"></textarea>
          <button className="submit-button" type="submit" name="button">Put In Bottle</button>
        </div>
      </form>
    </div>
  </div>
</div>);
}

export default BottlePage;
