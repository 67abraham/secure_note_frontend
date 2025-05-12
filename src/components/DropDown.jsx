import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../utils/axio";
import toast, { Toaster } from "react-hot-toast";

export const DropDown = () => {
  function handleLogout() {
    toast.promise(logout(), {
      loading: "Please Wait...",
      success: <b>Logout Success!</b>,
      error: <b>Login fail!!.</b>,
    });
  }
  return (
    <div className="flex flex-col gap-7 absolute top-14 bg-[#021526] w-40.5 right-[30px] rounded ">
      <Toaster />
      <ul>
        <li className="text-gray-500 m-2 p-2 border-b-1 border-gray-400">
          <a href="#">Profile</a>
        </li>
        <button onClick={handleLogout}>
          <li className="flex m-2 p-2 text-white cursor-pointer hover:bg-gray-600 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-white "
            >
              <path
                fill-rule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
            Logout
          </li>
        </button>
      </ul>
    </div>
  );
};
