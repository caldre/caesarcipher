import React from "react";
// import axios from "axios";
import "./App.css";

import { cipher } from "./tools/abc";

function App() {
  let oldWord =
    "Åcglsftfzzf vkvålåhhu ucrcffu zvzphhspzääååh qh rcrcf lzppuåcf åhp hpuhrpu åhyöpååhlzzh wpåff äzrhsåhh höhåh zääuzh rvrvärzpzzh.";
  let cipherKey = 22;

  //cipher(oldWord, cipherKey);

  return (
    <div className="App">
      <header className="App-header">This is a sample for caesar cipher</header>
    </div>
  );
}

export default App;
