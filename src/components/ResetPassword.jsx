import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { resetData, resetPassData } from "../utils/axio";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const VertifyEmail = () => {
  const [email, setEmail] = useState("");
  const nevigate = useNavigate();

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  function formValid() {
    let valid = true;
    const errorCopy = { ...error };
    if (email.length > 0) {
      errorCopy.email = " ";
    } else {
      errorCopy.email = "email is required";
      valid = false;
    }
    setError(errorCopy);
    return valid;
  }

  function handFormSubmit(e) {
    e.preventDefault();
    const userData = { email };
    if (formValid()) {
      toast.promise(resetData(userData), {
        loading: "Please Wait...",
        error: <b>Account don't exist.</b>,
      });
    }
  }

  return (
    <div className="w-screen relative ">
      <Toaster />
      <div className="flex items-center justify-center">
        <div className="mt-20 w-100 h-120 rounded overflow-hidden  shadow-2xl signBox">
          <div className="flex items-center justify-center mt-4">
            <h1 className="rounded-md text-2xl  text-amber-500 font-extrabold px-3 py-2 cursor-pointer ">
              AirNote
            </h1>
          </div>
          <h2 className="text-center text-gray-600 mt-3 font-medium text-lg">
            Verify Email Account
          </h2>

          <br />
          <form className="m-5">
            <label htmlFor="email" className="text-amber-500 font-medium top-4">
              Email:
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                value={email}
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 rounded  w-full box-border h-10 p-2 mt-2 bg-gray-100 placeholder:text-gray-400 focus:outline-amber-800 outline-gray-600"
              />
              {error.email && <div className="text-red-500">{error.email}</div>}
            </div>
            <br />
            <br />
            <button
              type="submit"
              className="w-full box-border rounded h-8 bg-amber-600 font-medium size-[14px] text-white hover:bg-amber-500 cursor-pointer"
              onClick={handFormSubmit}
            >
              Verify Email
            </button>
            <p className="text-center  mt-2">
              Don't Have an Account:{" "}
              <a
                href="#"
                className="hover:text-amber-600"
                onClick={() => nevigate("/register_user")}
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export const Message = () => {
  return (
    <div className="w-screen relative ">
      <div className="flex items-center justify-center">
        <div className="mt-20 w-100 h-50 rounded overflow-hidden  shadow-2xl signBox">
          <div className="flex items-center justify-center mt-4">
            <h1 className="rounded-md text-2xl  text-amber-500 font-extrabold px-3 py-2 cursor-pointer ">
              AirNote
            </h1>
          </div>
          <h2 className="text-center text-gray-600 mt-3 font-medium text-lg">
            Check Your Email to Reset Password.
          </h2>

          <br />
          <form className="m-5">
            <button
              type="submit"
              className="w-full box-border rounded h-8 bg-amber-600 font-medium size-[14px] text-white hover:bg-amber-500 cursor-pointer"
            >
              <a href="/">Back Home</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  function formValid() {
    let valid = true;
    const errorCopy = { ...error };
    if (email.length > 0) {
      errorCopy.email = " ";
    } else {
      errorCopy.email = "email is required";
      valid = false;
    }
    if (password.length > 0) {
      errorCopy.password = " ";
    } else {
      errorCopy.password = "password is required";
      valid = false;
    }
    setError(errorCopy);
    return valid;
  }

  function handFormSubmit(e) {
    e.preventDefault();
    const userData = { email, password };

    if (formValid()) {
      toast.promise(resetPassData(userData), {
        loading: "Please Wait...",
        error: <b>Fail to Reset Password</b>,
      });
    }
  }

  return (
    <div className="w-screen relative ">
      <Toaster />
      <div className="flex items-center justify-center">
        <div className="mt-20 w-100 h-120 rounded overflow-hidden  shadow-2xl signBox">
          <div className="flex items-center justify-center mt-4">
            <h1 className="rounded-md text-2xl  text-amber-500 font-extrabold px-3 py-2 cursor-pointer ">
              AirNote
            </h1>
          </div>
          <h2 className="text-center text-gray-600 mt-3 font-medium text-lg">
            Create New Password
          </h2>

          <br />
          <form className="m-5">
            <label htmlFor="email" className="text-amber-500 font-medium top-4">
              Email:
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter old Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 rounded  w-full box-border h-10 p-2 mt-2 bg-gray-100 placeholder:text-gray-400 focus:outline-amber-800 outline-gray-600"
              />
              {error.email && <div className="text-red-500">{error.email}</div>}
            </div>
            <br />
            <label
              htmlFor="password"
              className="text-amber-500 font-medium top-4"
            >
              Enter New Password:
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password.."
                value={password}
                autoComplete="password"
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 rounded  w-full box-border h-10 p-2 mt-2 bg-gray-100 placeholder:text-gray-400 focus:outline-amber-800 outline-gray-600"
              />
              {error.password && (
                <div className="text-red-500">{error.password}</div>
              )}
            </div>
            <br />
            <br />
            <button
              type="submit"
              className="w-full box-border rounded h-8 bg-amber-600 font-medium size-[14px] text-white hover:bg-amber-500 cursor-pointer"
              onClick={handFormSubmit}
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const SuccessMessage = () => {
  return (
    <div className="w-screen relative ">
      <div className="flex items-center justify-center">
        <div className="mt-20 w-100 h-70 rounded overflow-hidden  shadow-2xl signBox">
          <div className="flex items-center justify-center mt-4">
            <h1 className="rounded-md text-2xl  text-amber-500 font-extrabold px-3 py-2 cursor-pointer ">
              AirNote
            </h1>
          </div>
          <h2 className="text-center text-gray-600 mt-3 font-medium text-lg">
            Password Reset Successful 🎉
          </h2>
          <Link to={"/login_user"}>
            <h2 className="text-center text-blue-500 underline mt-3 font-medium text-[16px]">
              Click to Login
            </h2>
          </Link>

          <br />
          <form className="m-5">
            <button
              type="submit"
              className="w-full box-border rounded h-8 bg-amber-600 font-medium size-[14px] text-white hover:bg-amber-500 cursor-pointer"
            >
              <a href="/">Back Home</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
