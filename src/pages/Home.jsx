import React from "react";
import { HomeLagout } from "../components/HomeLagout";
import handWriting from "../assets/hand.png";
import { useNavigate } from "react-router-dom";
import { Foster } from "../components/Foster";

export const Home = () => {
  const nagivate = useNavigate();
  return (
    <div className="w-screen relative mainHome">
      <HomeLagout />
      <div className="bg-[#021a37] home relative ">
        <div className="flex place-content-center">
          <div className=" relative top-40">
            <h1 className="text-white text-7xl">
              Welcome to{" "}
              <span className="text-amber-500 font-bold">AIRNOTE</span>
            </h1>

            <p className="text-gray-500 text-2xl py-2">
              The Best Place for Handing What{" "}
              <b className="text-white">MATTER</b>
            </p>

            <h2 className="text-gray-300 font-medium text-2xl flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-amber-400 stroke-5"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
              Todo Plan
            </h2>
            <h2 className="text-gray-300 font-medium text-2xl flex px-10 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-amber-400 stroke-5"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
              Future Plan
            </h2>
            <h2 className="text-gray-300 font-medium text-2xl flex p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-amber-400 stroke-5"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
              Ideas Plan
            </h2>
            <div className="relative space-x-4 mt-3 p-5">
              <button
                className="bg-amber-600 text-white p-2 px-5 rounded-md text-2xl hover:bg-amber-500 pointer font-bold"
                onClick={() => nagivate("/register_user")}
              >
                Sign-Up for free
              </button>
            </div>
          </div>
          <div className="absolute right-0 mt-60">
            <img src={handWriting} alt="" width={400} />
          </div>
        </div>
      </div>
      <div className="spir">
        <h2>
          A dream written down with a date become a goal. A goal broken down
          into steps becomes a plan. Aplan backed by action makes your dreams
          come true.
        </h2>
      </div>
      <Foster />
    </div>
  );
};
