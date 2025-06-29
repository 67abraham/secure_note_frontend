import React from "react";
import { useNavigate } from "react-router-dom";

export const MobieIcon = ({ open }) => {
  const nagivate = useNavigate();
  if (!open) {
    return null;
  }
  return (
    <div className="MobDisplayIcon">
      <div className="Mobile_item">
        <a href="/" className="items" aria-current="page">
          Home
        </a>
        <a href="#about" className="items">
          About-Us
        </a>
        <a href="#" className="items text-gray-500">
          Projects
        </a>
        <a href="/user_dashboard" className=" items">
          Dashboard
        </a>
        <div className="mobileBtn">
          <button className="btn1" onClick={() => nagivate("/register_user")}>
            Sign-Up
          </button>
          <button className="btn1" onClick={() => nagivate("/login_user")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export const MobieIcon2 = ({ open }) => {
  const nagivate = useNavigate();
  if (!open) {
    return null;
  }
  return (
    <div className="MobDisplayIcon">
      <div className="Mobile_item">
        <a href="/" className="items" aria-current="page">
          Home
        </a>
        <a href="/" className="items">
          About-Us
        </a>
        <a href="#" className="items text-gray-500">
          Projects
        </a>
        <a href="/user_dashboard" className=" items">
          Dashboard
        </a>
      </div>
    </div>
  );
};
