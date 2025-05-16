import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signin } from "./pages/Signin";
import { UserWork } from "./pages/UserWork";
import { Quills } from "./components/Quill";

function App() {
  return (
    <Routes>
      {/* <Toaster position="top-center" /> */}
      <Route path="/" element={<Home />} />

      <Route path="/register_user" element={<Login />} />
      <Route path="/login_user" element={<Signin />} />
      <Route path="/user_dashboard" element={<UserWork />} />
    </Routes>
  );
}

export default App;
