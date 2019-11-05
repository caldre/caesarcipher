import React, { useState } from "react";

const Navbar = props => {
  return (
    <ul className="navbar">
      {/* <li onClick={props.setOrg} className={props.isOrg ? "pressed" : null}>
        Encrypted Sentences
      </li> */}
      <li onClick={props.setPass} className={props.isPass ? "pressed" : null}>
        No Bullshit
      </li>
      <li onClick={props.setDisc} className={props.isDisc ? "pressed" : null}>
        Bullshit
      </li>
    </ul>
  );
};

export default Navbar;
