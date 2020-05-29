import React, { useState } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Messages from "./components/Messages";
import Footer from "./components/Footer";
import { uncipherSentences } from "./tools/logics";
import "./App.css";

function App({ sentences }) {
  const { passedSentences, discardedSentences } = uncipherSentences(sentences);

  return (
    <div className="container">
      <Header />

      <div className="message-area">
        <Messages
          className="fas fa-check-circle"
          header="Might be Finnish"
          messages={passedSentences}
          color="lightgreen"
          style={{
            display: passedSentences.length ? "" : "none",
          }}
        />

        <Messages
          className="fas fa-times-circle"
          header="Not sure about these"
          messages={discardedSentences}
          color="red"
          style={{
            display: discardedSentences.length ? "" : "none",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  sentences: state.sentenceReducer,
});

export default connect(mapStateToProps)(App);
