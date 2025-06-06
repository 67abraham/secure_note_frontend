import axios, { Axios } from "axios";
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

export function logout() {
  const clear = localStorage.removeItem("jwtToken");
  delete axios.defaults.headers.common["Authorization"];
  window.location = "/login_user";
}

export async function PostContent(contents) {
  try {
    const datatoken = JSON.parse(localStorage.getItem("jwtToken"));
    const token = datatoken.jwtToken;
    const content = await axios.post(
      "http://localhost:8080/api/content",
      contents,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const da = content.data;

    if (content.data) {
      toast.success("Created");
    }
    return content.data;
  } catch {
    toast.error("Fail to Create Plane");
  }
}

export async function VisitortorMessage(Data) {
  try {
    const sendFeedback = await axios.post(
      "http://localhost:8080/user/feedback",
      Data
    );

    if (sendFeedback.data) {
      toast.success(`Thank ${Data.visitorName} for reaching us`);
    }
  } catch (error) {
    console.error(error);
  }
}

// adminLogin

export async function AdminData(Data) {
  try {
    const sendlog = await axios.post(
      "http://localhost:8080/api/admin/login",
      Data
    );

    if (sendlog.status == 200) {
      toast.success(`Welcome Administrator`);
      window.location = "/administrator_only";
    }
    localStorage.setItem("admin", JSON.stringify(sendlog.data));
  } catch (error) {
    console.log(error);
    toast.error("Data not correct");
  }
}
