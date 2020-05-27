import React from "react";
import { cipher } from "../tools/logics";

const CipherTools = (props) => {
  return (
    <div className="tools-container">
      <button className="button button-left" onClick={props.decrease}>
        DECREASE
      </button>
      <p className="text-demo">
        A --> {cipher("A", props.cipherKey).toLocaleUpperCase()}
      </p>
      <button className="button button-right" onClick={props.increase}>
        INCREASE
      </button>
    </div>
  );
};

export default CipherTools;
