import React, { useState } from "react";

const Navbar = props => {
  return (
    <ul className="navbar">
      <li onClick={props.setOrg} className={props.isOrg ? "pressed" : null}>
        Show Original Sentences
      </li>
      <li onClick={props.setPass} className={props.isPass ? "pressed" : null}>
        Show Passed Sentences
      </li>
      <li onClick={props.setDisc} className={props.isDisc ? "pressed" : null}>
        Show Discarded Sentences
      </li>
    </ul>
  );
};

export default Navbar;
