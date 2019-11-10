import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Messages from "./components/Messages";
import Footer from "./components/Footer";
import { sentences } from "./tools/logics";
import "./App.css";

function App() {
  const [showPassed, setShowpassed] = useState(false);
  const [showDiscarded, setShowDiscarded] = useState(false);
  const { passedSentences, discardedSentences } = sentences;

  return (
    <div className="container">
      <Header />
      <Navbar
        setPass={() => setShowpassed(!showPassed)}
        isPass={showPassed}
        setDisc={() => setShowDiscarded(!showDiscarded)}
        isDisc={showDiscarded}
      />
      <div className="message-area">
        {showPassed ? (
          <Messages
            className="fas fa-check-circle"
            header="No Bullshit"
            messages={passedSentences}
            color="lightgreen"
          />
        ) : (
          <div></div>
        )}
        {showDiscarded ? (
          <Messages
            className="fas fa-times-circle"
            header="Bullshit"
            messages={discardedSentences}
            color="red"
          />
        ) : (
          <div></div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
