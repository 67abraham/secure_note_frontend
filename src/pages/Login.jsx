import React, { useState } from "react";
import { HomeLagout } from "../components/HomeLagout2";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { creatUser } from "../utils/axio";

export const Login = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate();

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const errorCopy = { ...error };

  function formValid() {
    let valid = true;
    if (username.length > 0) {
      username.trim().length > 0
        ? (errorCopy.name = " ")
        : (errorCopy.name = "invalid name!!");
    } else {
      errorCopy.name = "name is required";
      valid = false;
    }
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
    // console.log(errorCopy);
    console.log(valid);
    return valid;
  }

  function handFormSubmit(e) {
    e.preventDefault();
    const userData = { username, email, password };
    let process = true;
    if (formValid()) {
      toast.promise(creatUser(userData), {
        loading: "SignUp...",
        success: <b>SignUp Success!</b>,
        error: <b>Email is taken.</b>,
      });

      console.log(userData);
    }

    setError(errorCopy);
  }

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-amber-50">
      <Toaster />
      <HomeLagout />
      <div className="flex items-center justify-center">
        <div className="mt-20 w-110 rounded overflow-hidden bg-[#021a37] shadow-2xl">
          <div className="flex items-center justify-center mt-4">
            <h1 className="rounded-md text-2xl  text-amber-500 font-extrabold px-3 py-2 cursor-pointer ">
              AirNote
            </h1>
            <p className="text-gray-200">
              Registrar for free to gain access to secure plan writting
            </p>
          </div>
          <br />
          <br />
          <form className="m-5">
            <label htmlFor="Username" className="text-amber-500 font-medium">
              Full Name:
            </label>
            <div className="relative">
              <input
                type="text"
                name="username"
                id="Username"
                placeholder="John Dole"
                value={username}
                autoComplete="name"
                onChange={(e) => setName(e.target.value)}
                className="pl-10 rounded  w-full box-border h-10 p-2 mt-2 bg-gray-100 placeholder:text-gray-400 focus:outline-amber-800 outline-gray-600"
              />
              {error.name && <div className="text-red-500">{error.name}</div>}
            </div>

            <br />

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
                onChange={(e) => setEmail(e.target.value.trim())}
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
                onChange={(e) => setPassword(e.target.value.trim())}
                className="pl-10 rounded  w-full box-border h-10 p-2 mt-2 bg-gray-100 placeholder:text-gray-400 focus:outline-amber-800 outline-gray-600"
              />
              {error.password && (
                <div className="text-red-500">{error.password}</div>
              )}
            </div>

            <button
              type="submit"
              className="w-full box-border rounded h-8 bg-amber-600 font-medium size-[14px] text-white hover:bg-amber-500 cursor-pointer mt-10"
              onClick={handFormSubmit}
            >
              Create Account
            </button>
            <p className="text-center text-white mt-2">
              Already a member:{" "}
              <a
                href="#"
                className="hover:text-amber-600"
                onClick={() => nevigate("/login_user")}
              >
                Login in here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
