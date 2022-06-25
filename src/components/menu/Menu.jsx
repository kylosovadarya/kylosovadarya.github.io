import React from "react";
import AngleBtn from "../../trifles/AngleBtn";
import classes from "./menu.module.scss";

function Menu({ menu }) {
  return (
    <div className={classes.menu}>
      <h3>{menu.title}</h3>
      <ul>
        {menu.points.map((point) => (
          <li key={Date.now() + Math.random()}>{point}</li>
        ))}
      </ul>
      <AngleBtn className={classes.btn}>{menu.button}</AngleBtn>
    </div>
  );
}

export default Menu;
