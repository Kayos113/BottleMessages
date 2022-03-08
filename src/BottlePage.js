import  React, { useState } from "react";
import axios from "axios";
import "./BottlePage.css";
import Sky from "./Sky"
import Ocean from "./Ocean";
import db from "./api.js";

function BottlePage() {

  const [messageString, setMessageString] = useState("");
  const [islandActive, setIslandActive] = useState("inactive");
  const [messageActive, setMessageActive] = useState("inactive");

  function bottleClicked(event) {
    let message;
    axios({
      method: 'get',
      url: 'https://bottle-backend-api.herokuapp.com/messages/rand',
      responseType: 'json'
    })
    .then(function (response) {
      console.log("RESPONSE:");
      console.log(response);
      message = response.data.message;
    })
    .catch( err => {
      console.log(err);
      message = "Oops. Wrong Bottle."
    }).then( () => {
      setMessageString(message);
    });
    setMessageActive("active");
    setTimeout(function () {
      setMessageActive("inactive")
    }, 10000);
  }

  function islandClicked() {
    setIslandActive("active");
  }

  function buttonClicked() {
    setIslandActive("inactive");
  }

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
<div className="canvas">
  <Sky />
  <Ocean
    bottleClicked={bottleClicked}
    islandClicked={islandClicked}
  />
  <div id="message-scroll" className={messageActive}>
    <img className = "message-scroll-image" src="https://assets.codepen.io/3073193/scroll-top.svg" />
    <div className = "message-scroll-bg">
      <h1 id="scrollText" className="message">{messageString}</h1>
    </div>
  </div>
  <div id="form-scroll" className={islandActive}>
    <img className = "form-scroll-image" src="https://assets.codepen.io/3073193/scroll-top.svg" />
    <div className = "form-scroll-bg">
      <form className="form" method="post" onSubmit={onSubmit}>
        <div className="container">
          <textarea className="textarea" name="name" rows="12" cols="36"></textarea>
          <button onClick={buttonClicked} className="submit-button" type="submit" name="button">Put In Bottle</button>
        </div>
      </form>
    </div>
  </div>
</div>);
}

export default BottlePage;
