import React from "react";
import AngleDown from "./icons/AngleDown";

const AngleBtn = ({ children, ...props }) => {
  return (
    <button
      {...props}
      style={{
        padding: "11px 16px",
        borderRadius: 12,

        display: "inline-flex",
        gap: 12,
        alignItems: "center",

        fontFamily: '"Poppins", sans-serif',
        fontWeight: 600,
        fontSize: 15,
      }}
    >
      {children}
      <AngleDown style={{ color: `${props.angleColor}` }} />
    </button>
  );
};

export default AngleBtn;
