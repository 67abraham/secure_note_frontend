import React, { useState } from "react";
import { HomeLagout } from "../components/HomeLagout2";
import { useNavigate } from "react-router-dom";
import DateCom from "../components/DateCom";
import { loginData } from "../utils/axio";
import toast, { Toaster } from "react-hot-toast";
import { Foster } from "../components/Foster";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate();

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function formValid() {
    let valid = true;
    const errorCopy = { ...error };
    if (email.length > 0) {
      regex.test(email)
        ? (valid = true)
        : (errorCopy.email = "email is not valid");
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
    console.log(errorCopy);
    console.log(valid);
    return valid;
  }

  function handFormSubmit(e) {
    e.preventDefault();
    const userData = { email, password };
    if (formValid()) {
      toast.promise(loginData(userData), {
        loading: "Please Wait...",
        // success: <b>Login Success!</b>,
        error: <b>Login fail!!.</b>,
      });
    }
    console.log(userData);
  }

  return (
    <div className="w-screen relative bg-amber-50">
      <Toaster />
      <HomeLagout />
      <div className="flex items-center justify-center">
        <div className="mt-20 w-110 h-150 rounded overflow-hidden bg-[#021a37] shadow-2xl signBox">
          <div className="flex items-center justify-center mt-4">
            <h1 className="rounded-md text-2xl  text-amber-500 font-extrabold px-3 py-2 cursor-pointer ">
              AirNote
            </h1>
          </div>
          <h2 className="text-center text-gray-100 mt-3 font-medium text-lg">
            Welcome onboard
            <DateCom />
          </h2>
          <br />
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

            <label htmlFor="password" className="text-amber-500 font-medium">
              Password:
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="......."
                value={password}
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 rounded  w-full box-border h-10 p-2 mt-2 bg-gray-100 placeholder:text-gray-400 focus:outline-amber-800 outline-gray-600"
              />
              {error.password && (
                <div className="text-red-500">{error.password}</div>
              )}
            </div>

            <h2 className=" text-right text-teal-50 mt-2 p-2 italic hover:text-amber-600">
              <a href="/verify_email">Forget Password?</a>
            </h2>
            <button
              type="submit"
              className="w-full box-border rounded h-8 bg-amber-600 font-medium size-[14px] text-white hover:bg-amber-500 cursor-pointer"
              onClick={handFormSubmit}
            >
              Login
            </button>
            <p className="text-center text-white mt-2">
              Don't Have an Account:{" "}
              <a
                href="#"
                className="hover:text-amber-600"
                onClick={() => nevigate("/register_user")}
              >
                SignUp Here
              </a>
            </p>
          </form>
        </div>
      </div>
      <Foster />
    </div>
  );
};
