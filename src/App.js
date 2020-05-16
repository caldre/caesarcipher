import React, { useState } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Messages from "./components/Messages";
import Footer from "./components/Footer";
import { sentences, uncipherSentences } from "./tools/logics";
import "./App.css";

function App({ sentences }) {
  const [showPassed, setShowpassed] = useState(true);
  const [showDiscarded, setShowDiscarded] = useState(true);
  const { passedSentences, discardedSentences } = uncipherSentences(sentences);

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
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  sentences: state.sentenceReducer,
});

export default connect(mapStateToProps)(App);
