import React from "react";
import Input from "./Input";

const Header = () => {
  return (
    <header className="header">
      <h1>DO YOU EVEN FINNISH?!</h1>
      <br></br>
      <p>
        This app lets you crypt a message using simple Caesar cipher (with
        Finnish alphabets). It's originated from a code challenge I did a while
        back, but they took down their message-API, so I had to make some other
        use for this <br></br>¯\_(ツ)_/¯<br></br>
        P.S Autosolve-button is the real prize here - it runs some tests on
        message and decides if it's Finnish! Sadly I made some "imporovements"
        and kinda broke it. Try to test it, or sample the code instead for
        getting better picture
      </p>
      <br></br>
      <Input />
    </header>
  );
};

export default Header;
