import axios, { Axios } from "axios";
import { toast } from "react-hot-toast";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function creatUser(userData) {
  try {
    const response = await axios.post(`${BASE_URL}/user/register`, userData);

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
    const response = await axios.post(`${BASE_URL}/user/signin`, Data);
    const token = response.data;
    if (token) {
      localStorage.setItem("jwtToken", JSON.stringify(token));
      localStorage.setItem("isLoggedIn", "true");
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
  const clear2 = localStorage.removeItem("isLoggedIn"); ///pass here
  delete axios.defaults.headers.common["Authorization"];
  window.location = "/login_user";
}

export async function PostContent(contents) {
  try {
    const datatoken = JSON.parse(localStorage.getItem("jwtToken"));
    const token = datatoken.jwtToken;
    const content = await axios.post(`${BASE_URL}/api/content`, contents, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const da = content.data;

    if (content.data) {
      toast.success("Created");
    }
    return content.data;
  } catch {
    toast.error("session expired");
    const clear = localStorage.removeItem("jwtToken");
    const clear2 = localStorage.removeItem("isLoggedIn");
  }
}

export async function VisitortorMessage(Data) {
  console.log("BaseURL: ", import.meta.env.VITE_API_BASE_URL);
  console.log("BaseURL: ", BASE_URL);
  try {
    const sendFeedback = await axios.post(`${BASE_URL}/user/feedback`, Data);

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
    const sendlog = await axios.post(`${BASE_URL}/api/admin/login`, Data);

    if (sendlog.status == 200) {
      toast.success(`Welcome Administrator`);
      window.location = "/administrator_only";
    }
    localStorage.setItem("admin", JSON.stringify(sendlog.data));
    localStorage.setItem("isLoggedIn", "true");
  } catch (error) {
    console.log(error);
    toast.error("Data not correct");
  }
}

//up load  document

export async function DocumentData(Data) {
  try {
    const datatoken = JSON.parse(localStorage.getItem("jwtToken"));
    const token = datatoken.jwtToken;
    const sendlog = await axios.post(`${BASE_URL}/api/doc`, Data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    if (sendlog.status == 200) {
      toast.success(`upload successful`);
      window.location = "/user_dashboard/upload_content";
    }

    if (sendlog.status == 401) {
      toast.error(error.message);
      // window.location = "/login_user";
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("isLoggedIn");
  }
}

export async function resetData(Data) {
  try {
    const response = await axios.post(`${BASE_URL}/user/verify_email`, Data);

    if (response) {
      toast.success("Email Send");
      window.location = "/verify_email/:verify";
    } else {
      toast.error("token is not coming");
    }
  } catch (error) {
    if (error.response) {
      toast.error("Invalid Email");
    } else {
      toast.error("Network problem");
    }
  }
}

export async function resetPassData(Data) {
  try {
    const response = await axios.post(`${BASE_URL}/user/reset`, Data);

    if (response) {
      window.location = "/reset_password/success";
    }
  } catch (error) {
    if (error.response) {
      toast.error("OOp Try Again");
    } else {
      toast.error("Network problem");
    }
  }
}
