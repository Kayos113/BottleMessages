import React from "react";
import "./Bottle.css";

function Bottle(props) {
  return (<img className="interactable" id="bottle" onClick={props.setMessage} src="./images/yellow-bottle.svg" />);
}

export default Bottle;
