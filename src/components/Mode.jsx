import React from "react";
import { Quills } from "./Quill";

export const Mode = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="container">
        <div className="modelRight">
          <p className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 closeBtn"
              onClick={onClose}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </p>
        </div>
        <div className="modelData">
          <h2>AirNote Text Editor</h2>
        </div>
        <div>
          <Quills />
        </div>
      </div>
    </div>
  );
};
