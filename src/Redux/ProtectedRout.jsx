import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRout = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn != null) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login_user"} />;
  }
};
