import axios from "axios";
import { toast } from "react-hot-toast";

export async function creatUser(userData) {
  //try the apil again
  // const creatUserApi = import.meta.env.CREATE_URL;
  // const signUserAPI = import.meta.env.SIGNIN_URL;

  try {
    const response = await axios.post(
      "http://localhost:8080/user/register",
      userData
    );

    if (response.status === 200) {
      toast.success("Account created successful");
      window.location = "/login_user";
    }
    if (response.status === 409) {
      toast.error("Email already taken");
    }
    if (response.status === 401) {
      toast.error("Password not Correct");
    }
  } catch (error) {
    if (!response) {
      toast.error(
        `Error: ${error.response.data.message} || Oop! Something went wrong`
      );
    } else {
      toast.error("Network problem");
    }
  }
}

export async function loginData(Data) {
  try {
    const response = await axios.post(
      "http://localhost:8080/user/signin",
      Data
    );
    const token = response.data;
    if (token) {
      localStorage.setItem("jwtToken", JSON.stringify(token));
    } else {
      toast.error("token is not coming");
    }

    if (response.status === 200) {
      toast.success("Login successful");
      window.location = "/user_dashboard";
    }
    if (response.status === 401) {
      toast.error("Password not Correct");
    }
    if (response.status === 404) {
      toast.error("Account not Found");
    }
  } catch (error) {
    if (error.response) {
      toast.error("Invalid Email/Password");
    } else {
      toast.error("Network problem");
    }
  }
}

export async function notes() {
  try {
    const datatoken = JSON.parse(localStorage.getItem("jwtToken"));
    const token = datatoken.jwtToken;
    const response = await axios.get(
      "http://localhost:8080/api/content/list-note",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(token);
  } catch (e) {
    toast.error("fail");
    window.location = "/login_user";
  }
}

export function logout() {
  const clear = localStorage.removeItem("jwtToken");
  delete axios.defaults.headers.common["Authorization"];
  window.location = "/login_user";
}
