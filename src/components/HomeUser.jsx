import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserName } from "./UserName";
import { DropDown } from "./DropDown";

export const HomeUser = () => {
  const [openDrop, setOpenDrop] = useState(false);

  const nagivate = useNavigate();
  const name = JSON.parse(localStorage.getItem("jwtToken"));
  if (name == null) {
    window.location = "login_user";
  }
  const getname = name.username;

  //tryig the new branch
  return (
    <div className="overflow-hidden">
      <div className=" bg-[#021526] p-3 shadow-md">
        <div className="absolute left-[20px] flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7 text-white mt-2"
          >
            <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
          </svg>
          <h1 className="rounded-md text-2xl  text-amber-500 font-extrabold px-3 py-2 cursor-pointer">
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
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Calendar
          </a>
          <div className=" flex absolute right-60 space-x-4 mt-0.5">
            <button
              className="flex cursor-pointer hover:underline text-amber-300"
              onClick={() => setOpenDrop((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-white mx-2"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-white">{getname}</h2>
            </button>
          </div>
        </div>
      </div>
      {openDrop && <DropDown />}
    </div>
  );
};

{
}
