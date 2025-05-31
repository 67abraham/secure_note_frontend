import React, { useEffect, useState } from "react";
import { HomeUser } from "../components/HomeUser";
import { Link, useNavigate } from "react-router-dom";
import { Mode } from "../components/Mode";
import axios, { Axios } from "axios";
import parse from "html-react-parser";
import toast from "react-hot-toast";
// import { DotLottieReact } from "lottie-react/dotlottie-react";

export const UserWork = () => {
  const [note, setNote] = useState([]);
  const nagivate = useNavigate();
  const [openModel, setOpenModel] = useState(false);
  const [url, setUrl] = useState(null);
  // const [loading, setloading] = useState("");

  async function getContent() {
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
      if (response) {
        setNote(response.data);
      }
    } catch (e) {
      toast.error("fail");
      window.location = "/login_user";
    }
  }

  useEffect(() => {
    getContent();
  }, []);

  let loading;
  if (note.length > 0) {
    loading = "Please Wait...";
  }
  if (note.length == 0) {
    loading = "No Content";
  }

  return (
    <div>
      <HomeUser />
      <div>
        <div className="content">
          <div className="overde">
            <button
              className="cursor-pointer add"
              onClick={() => setOpenModel(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Add Content
            </button>
          </div>
          <Mode open={openModel} onClose={() => setOpenModel(false)} />
          <div className="sidebar">
            <div className="p-4 mt-20">
              <h2 className="text-3xl border-b-1 border-gray-500 font-extrabold  sm:xl md:xl">
                Welcome Back Onboard!!
              </h2>

              <Link to={"/user_dashboard/ai_prompt"}>
                <h2 className="mt-10 p-2 hover:bg-gray-500 rounded text-xl w-full inline-block">
                  <a href="#" className="flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="@max-sm:size-5 text-amber-700 button inline-block size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    Ai Assistant
                  </a>{" "}
                </h2>
              </Link>
            </div>
          </div>
          <div>
            <div className="item">
              {note.length > 0 ? (
                note.map((data) => (
                  <div key={data.noteId} className="data">
                    <Link to={`/user_dashboard/${data.noteId}`}>
                      <div className="dataCont">
                        <h1 className="ml-3 p-2 font-bold text-xl">
                          {data.title}
                        </h1>
                        <p className="w-full text-gray-400 border-b text-m mb-3">
                          {data.dateCreatedAt}
                        </p>
                        <div className="cont">{parse(data.noteContent)}</div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <h1 className="loading">{loading}</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
