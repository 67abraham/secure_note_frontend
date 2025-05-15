import React from "react";

export const Mode = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  return (
    <div className="overlay">
      <div className="container">
        <div className="modelRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
        </div>
        <div className="modelData">
          <h2>all model is here</h2>
        </div>
      </div>
    </div>
  );
};
