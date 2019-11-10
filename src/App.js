import React, { useState } from "react";
import axios from "axios";
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

  async function fetchData() {
    const rootUrl = "https://koodihaaste-api.solidabis.com/bullshit";
    let config = {
      headers: {
        'Authorization':
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJidWxsc2hpdCI6ImJ1bGxzaGl0IiwiaWF0IjoxNTczMzk4MjcwfQ.SGM2omQlNExcGRiAjo1WiPL0XeDC_Ufu8U4I8oKR9Sk'
      }
    };

    const result = await axios.get(rootUrl, config);
    console.log(result.data);
  }

  fetchData();

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
