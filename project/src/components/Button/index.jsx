import React from "react";
import "./button.scss";

function Button({ children, href, disabled = false }) {
  return (
    <>
      <button
        disabled={disabled}
        onClick={() => (window.location.href = href)}
        className="btn"
      >
        {children}
      </button>
    </>
  );
}

export default Button;
