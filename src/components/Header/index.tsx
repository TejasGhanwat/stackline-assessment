import "./styles.css";
import logo from "../../img/stackline_logo.svg";
import React from "react";

function Header() {
  return (
    <div className='sta-header'>
      <img src={logo} alt='logo' />
    </div>
  );
}

export default Header;
