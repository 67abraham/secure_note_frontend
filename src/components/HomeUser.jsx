import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserName } from "./UserName";
import { DropDown } from "./DropDown";
import { MobieIcon2 } from "./MobieIcon";

export const HomeUser = () => {
  const [openDrop, setOpenDrop] = useState(false);
  const [openIcon, setOpenIcon] = useState(false);

  const nagivate = useNavigate();
  const name = JSON.parse(localStorage.getItem("jwtToken"));
  if (name == null) {
    window.location = "login_user";
  }
  const getname = name.username;

  return (
    <div>
      <div className=" bg-[#021526] p-4 wideScreen">
        <div className="left-[20px] flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7 text-white inline-block"
          >
            <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
          </svg>
          <h1 className="inline-block rounded-md text-2xl  text-amber-500 ml-1 font-extrabold  cursor-pointer">
            AirNote
          </h1>
        </div>
        <div className="flex center m-0 text-center relative mobile">
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
            href="/user_dashboard"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Dashboard
          </a>
        </div>
        <div className="combine">
          <div className=" flex mr-5 icoDev1">
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
              <h2 className="text-white mobile">{getname}</h2>
            </button>
          </div>
          {openDrop && <DropDown />}
          <div className="icoDev">
            {openIcon ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 icon"
                onClick={() => setOpenIcon(false)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 icon"
                onClick={() => setOpenIcon(true)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <MobieIcon2 open={openIcon} />
      <div className="w-full bg-amber-500 text-center">
        <h2 className="ml-5 text-gray-600 font-bold p-2">
          Marking Down the Future is the unique way of putting your mind on the
          path Toward the Future{" "}
        </h2>
      </div>
    </div>
  );
};

{
}
