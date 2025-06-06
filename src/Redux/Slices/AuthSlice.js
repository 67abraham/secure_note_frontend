import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.setItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data") || {},
};
