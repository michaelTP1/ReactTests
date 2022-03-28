import React from "react";

import "./main.css";

function CountButton(props) {
  
  return(<button onClick={props.onClick}>{props.buttonText}</button>)
  
}
export default CountButton;