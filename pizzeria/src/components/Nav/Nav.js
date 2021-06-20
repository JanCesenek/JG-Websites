import React from "react";

import classes from "./Nav.module.css";

const nav = () => (
  <nav className={classes.Nav}>
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">Deals</a>
    </li>
    <li>
      <a href="#">Why choose us?</a>
    </li>
    <li>
      <a href="#">History of our brand</a>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
  </nav>
);

export default nav;
