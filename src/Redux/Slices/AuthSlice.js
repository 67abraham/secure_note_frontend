import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  jwtToken: localStorage.getItem("jwtToken") || "",
  name: localStorage.getItem("username") || "",
  role: localStorage.getItem("role") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducer: {
    login(state, action) {
      state.isLoggedIn = true;
      state.jwtToken = action.payload.jwtToken;
      state.name = action.payload.name;
      state.role = action.payload.role;

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("jwtToken", action.payload.jwtToken);
      localStorage.setItem("name", action.payload.name);
      localStorage.setItem("role", action.payload.role);
    },

    logout(state) {
      state.isLoggedIn = false;
      state.jwtToken = "";
      state.name = "";
      state.role = "";

      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("name");
      localStorage.removeItem("role");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
