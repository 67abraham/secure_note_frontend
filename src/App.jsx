import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signin } from "./pages/Signin";
import { UserWork } from "./pages/UserWork";
import { SinglePlan } from "./components/SinglePlan";
import { EditContent } from "./components/EditContent";
import { AiAssistant } from "./components/AiAssistant";
import { Admin } from "./pages/Admin";
import { AdminLogin } from "./pages/AdminLogin";

function App() {
  return (
    <Routes>
      {/* <Toaster position="top-center" /> */}
      <Route path="/" element={<Home />} />

      <Route path="/register_user" element={<Login />} />
      <Route path="/login_user" element={<Signin />} />
      <Route path="/user_dashboard" element={<UserWork />} />
      <Route path="/user_dashboard/:id" element={<SinglePlan />} />
      <Route path="/edit_content/:con_id" element={<EditContent />} />
      <Route path="/user_dashboard/ai_prompt" element={<AiAssistant />} />
      <Route path="/administrator_only" element={<Admin />} />
      <Route path="/administrator_login" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
