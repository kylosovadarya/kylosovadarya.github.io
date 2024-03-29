import React from "react";
import classes from "./modal.module.scss";

const Modal = ({ children, visible, setVisible }) => {

  const rootClasses = [classes.modal];
  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.content}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
