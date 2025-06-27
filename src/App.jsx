import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signin } from "./pages/Signin";
import { UserWork } from "./pages/UserWork";
import { SinglePlan } from "./components/SinglePlan";
import { EditContent } from "./components/EditContent";
import { AiAssistant, NotFound } from "./components/AiAssistant";
import { Admin } from "./pages/Admin";
import { AdminLogin } from "./pages/AdminLogin";
import { ProtectedRout } from "./Redux/ProtectedRout";
import { UploadContent } from "./components/UploadContent";
import {
  Message,
  ResetPassword,
  SuccessMessage,
  Token,
  VertifyEmail,
} from "./components/ResetPassword";

function App() {
  return (
    <Routes>
      {/* <Toaster position="top-center" /> */}
      <Route path="/" element={<Home />} />

      <Route path="/register_user" element={<Login />} />
      <Route path="/login_user" element={<Signin />} />
      <Route path="/verify_email" element={<VertifyEmail />} />
      <Route path="/verify_email/verify" element={<Message />} />
      <Route path="/verify/:id" element={<Token />} />
      <Route path="/reset_password" element={<ResetPassword />} />
      <Route path="/reset_password/:success" element={<SuccessMessage />} />

      <Route element={<ProtectedRout />}>
        <Route path="/user_dashboard" element={<UserWork />} />
        <Route path="/user_dashboard/:id" element={<SinglePlan />} />
        <Route path="/edit_content/:con_id" element={<EditContent />} />
        <Route path="/user_dashboard/ai_prompt" element={<AiAssistant />} />
        <Route
          path="/user_dashboard/upload_content"
          element={<UploadContent />}
        />
        <Route path="/administrator_only" element={<Admin />} />
      </Route>
      <Route path="/administrator_login" element={<AdminLogin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
