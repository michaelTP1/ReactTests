import { useState } from "react";
import React from "react";

import "./main.css";

function Count(props) {
  const {init, buttonText}=props
  const [counter, setCounter] = useState(init);
  return (
    <div>
      <button
        className="button"
        type="button"
        onClick={() => setCounter((counter) => counter + 1)}>
          {buttonText}
       {counter}
      </button>
    </div>
  );
}
export default Count;