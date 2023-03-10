import React from "react";
import { Link } from "react-router-dom";
import HomeImg from "../../assets/homeImg.png";
import "./Header.css";

function Header() {
  return (
    <div>
      <Link to="/" className="HeaderLink">
        <img className="homeImg" src={HomeImg} alt="" />
      </Link>
    </div>
  );
}

export default Header;
