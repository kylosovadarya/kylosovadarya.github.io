import React from "react";
import classes from "./cartIndicator.module.scss";


const CartIndicator = () => {
  let quantity = 9;
  return <span className={classes.cartIndicator}>{quantity}</span>;
};

export default CartIndicator;
