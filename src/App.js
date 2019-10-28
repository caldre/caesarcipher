import React from "react";
import { sentences } from "./tools/logics";
import "./App.css";

const { passedSentences, discardedSentences } = sentences;

const renderSentences = strings =>
  strings.map(sentence => {
    return (
      <li key={sentence} className="sentence">
        {sentence}
      </li>
    );
  });

function App() {
  return (
    <div className="app">
      <ol className="message">{renderSentences(passedSentences)}</ol>
    </div>
  );
}

export default App;
