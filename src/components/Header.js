import React from "react";
import Input from "./Input";

const Header = () => {
  return (
    <header className="header">
      <h1>DO YOU EVEN FINNISH?!</h1>
      <br></br>
      <p>
        So here's the common problem we all have. Your friend just sent you a
        message, but it's full of gibberish. Knowing your friends strange habits
        you immediately presume he has crypted the message. This application
        lets you uncrypt it, as long as it is Finnish and using Caesar cipher.
        Enjoy!
        <br></br>
        <br></br>
        Wanna try it for yourself?
        <br></br>
        <a
          href="https://cryptii.com/pipes/caesar-cipher"
          target="_blank"
          rel="noopener noreferrer"
        >
          CLICK ME!
        </a>
      </p>
      <Input />
    </header>
  );
};

export default Header;
