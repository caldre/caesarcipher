import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-info">
        <a
          href="https://www.linkedin.com/in/jyrki-riestola-896a50141/"
          className="fab fa-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
        </a>
        <a
          href="https://github.com/caldre/caesarcipher"
          className="fab fa-github-square"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
        </a>
        <a
          className="fas fa-at"
          href="mailto:jyrki.riestola@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
        </a>
      </div>
      <div>© 2019 Jyrki Riestola</div>
    </div>
  );
};

export default Footer;
