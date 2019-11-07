import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Messages from "./components/Messages";
import { sentences } from "./tools/logics";
import "./App.css";

function App() {
  const [showPassed, setShowpassed] = useState(false);
  const [showDiscarded, setShowDiscarded] = useState(false);
  const { passedSentences, discardedSentences } = sentences;

  return (
    <div className="app">
      <Header />
      <Navbar
        setPass={() => setShowpassed(!showPassed)}
        isPass={showPassed}
        setDisc={() => setShowDiscarded(!showDiscarded)}
        isDisc={showDiscarded}
      />
      <div className="message-lists">
        {showPassed ? (
          <Messages
            className="fas fa-check-circle"
            header="No Bullshit"
            messages={passedSentences}
            color="lightgreen"
          />
        ) : null}
        {showDiscarded ? (
          <Messages
            className="fas fa-times-circle"
            header="Bullshit"
            messages={discardedSentences}
            color="red"
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
