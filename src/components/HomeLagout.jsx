import React from "react";
import { useNavigate } from "react-router-dom";

export const HomeLagout = () => {
  const nagivate = useNavigate();
  return (
    <div>
      <div className=" bg-[#021526] p-3 shadow-md sticky">
        <div className="absolute left-[20px] flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7 text-white mt-2"
          >
            <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
          </svg>
          <h1 className="rounded-md text-2xl  text-amber-500 font-extrabold px-3 py-2 ">
            AirNote
          </h1>
        </div>
        <div className="flex center m-0 text-center relative left-50">
          <a
            href="/"
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            About-Us
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 "
          >
            Projects
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 "
          >
            Calendar
          </a>
          <div className="absolute right-55 space-x-4 mt-0.5">
            <button
              className="bg-amber-600 text-white p-2 px-5 rounded-md text-sm hover:bg-amber-500 cursor-pointer"
              onClick={() => nagivate("/register_user")}
            >
              Sign-Up
            </button>
            <button
              className="bg-amber-600 text-white p-2 px-5 rounded-md  text-sm hover:bg-amber-500 cursor-pointer"
              onClick={() => nagivate("/login_user")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
