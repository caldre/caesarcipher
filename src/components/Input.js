import React, { useState } from "react";
import { connect } from "react-redux";
import { addSentence } from "../actions";
import CipherTools from "./CipherTools";
import { cipher } from "../tools/logics";

const Input = (props) => {
  const [sentence, setSentence] = useState({ sentence: "" });
  const [originalSentence, setOriginalSentence] = useState({ sentence: "" });
  const [cipherKey, setCipherKey] = useState(0);
  const [errors, setErrors] = useState({});

  // Check for input errors
  const checkForErrors = () => {
    if (sentence.sentence.length <= 20) {
      setErrors({ tooShort: "The sentence is too short" });
      console.log(errors);
    }
  };

  const handleDecrease = () => {
    if (cipherKey === 0) {
      return;
    }

    setSentence({ sentence: cipher(originalSentence, cipherKey - 1) });
    setCipherKey(cipherKey - 1);
  };

  const handleIncrease = () => {
    if (cipherKey === 28) {
      return;
    }
    setSentence({ sentence: cipher(originalSentence, cipherKey + 1) });
    setCipherKey(cipherKey + 1);
  };

  const handleChange = async (e) => {
    setSentence({ sentence: e.target.value });
    setOriginalSentence({ sentence: e.target.value });
    console.log(originalSentence.sentence + sentence.sentence);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkForErrors(sentence);
    console.log(errors);
    if (Object.keys(errors).length !== 0) {
      return;
    }
    props.addSentence(sentence.sentence);
    setSentence({ sentence: "" });
    setOriginalSentence({ sentence: "" });
    setErrors({});
  };

  return (
    <div className="input-container">
      <CipherTools
        decrease={handleDecrease}
        increase={handleIncrease}
        cipherKey={cipherKey}
      />
      <form className="input" onSubmit={(e) => handleSubmit(e)}>
        <ul>
          <li className="errors">{errors.tooShort}</li>
        </ul>
        <label htmlFor="input">Sentence</label>
        <textarea
          cols="50"
          rows="15"
          type="text"
          id="input"
          value={sentence.sentence}
          placeholder="Add your sentence here."
          autoFocus={true}
          onChange={handleChange}
        ></textarea>
        <input
          className="button submit"
          type="submit"
          value="AUTOSOLVE"
        ></input>
      </form>
    </div>
  );
};

export default connect(null, { addSentence })(Input);
