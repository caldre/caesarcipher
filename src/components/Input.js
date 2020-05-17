import React, { useState } from "react";
import { connect } from "react-redux";
import { addSentence } from "../actions";

const Input = (props) => {
  const [sentence, setSentence] = useState("");
  const [errors, setErrors] = useState({});

  // Check for input errors
  const checkForErrors = (string) => {
    if (string.length <= 20) {
      setErrors({ tooShort: "The sentence is too short" });
      console.log(errors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkForErrors(sentence);
    console.log(errors);
    if (Object.keys(errors).length !== 0) {
      return;
    }
    props.addSentence(sentence);
    setSentence("");
    setErrors({});
  };

  return (
    <form className="input" onSubmit={(e) => handleSubmit(e)}>
      <ul>
        <li>{errors.tooShort}</li>
      </ul>
      <label htmlFor="sentence">Sentence:</label>
      <input
        type="text"
        id="sentence"
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
      ></input>
      <input type="submit"></input>
    </form>
  );
};

export default connect(null, { addSentence })(Input);
