import React from "react";
import classes from "./navbar.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.contacts}>
        <span>Chat with us</span>
        <span>+420 336 775 664</span>
        <span>info@freshenesscom.com</span>
      </div>
      <nav>
        <Link to="/">Blog</Link>
        <Link to="/category">About us</Link>
        <Link to="/description">Careers</Link>
      </nav>
    </div>
  );
}

export default Navbar;
