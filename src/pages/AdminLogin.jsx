import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AdminData } from "../utils/axio";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    const data = { email, password };
    toast.promise(AdminData(data), {
      loading: "Please wait..",
    });
  }

  return (
    <div>
      <Toaster />
      <div className="AdminLogin">
        <form>
          <h1>Welcome to Administrator Cycle</h1>
          <input
            type="text"
            placeholder="Admin Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password......."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="AdminBtn" onClick={handleLogin}>
            Login
          </button>
          <p>please keep out, if you are not an administrator</p>
        </form>
      </div>
    </div>
  );
};
