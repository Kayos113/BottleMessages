import React from "react";
import "./Island.css";

function Island(props) {
  return(<img className="interactable" id="island" onClick={props.showScroll} src="./images/island-colorized.svg" />);
}

export default Island;
