import React, { useState } from "react";
import { connect } from "react-redux";
import { addSentence } from "../actions";

const Input = (props) => {
  const [sentence, setSentence] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSentence(sentence);
    setSentence("");
  };

  return (
    <form className="input" onSubmit={(e) => handleSubmit(e)}>
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
