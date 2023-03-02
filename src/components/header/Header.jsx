import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../public/images/carrinho.gif";
import logo from "../../public/images/logo.png";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <button className="left-button">Left Button</button>

      <button className="right-button">Right Button</button>
    </div>
  );
}

export default Header;
