import React from "react";
import { cipher } from "../tools/logics";

const CipherTools = (props) => {
  const demoText = { id: "1", sentence: "A" };
  return (
    <div className="tools-container">
      <button className="button button-left" onClick={props.decrease}>
        DECREASE
      </button>
      <p className="text-demo">
        {`Cipher key: ${props.cipherKey}`}
        <br></br>A --> {cipher(demoText, props.cipherKey).toLocaleUpperCase()}
      </p>
      <button className="button button-right" onClick={props.increase}>
        INCREASE
      </button>
    </div>
  );
};

export default CipherTools;
