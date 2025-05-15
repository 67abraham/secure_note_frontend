import React, { useEffect, useState } from "react";
import { HomeUser } from "../components/HomeUser";
import { notes } from "../utils/axio";
import { useNavigate } from "react-router-dom";
import { Mode } from "../components/Mode";
// import { DotLottieReact } from "lottie-react/dotlottie-react";

export const UserWork = () => {
  const [note, setNote] = useState([]);
  const nagivate = useNavigate();
  const [openModel, setOpenModel] = useState(false);
  const user = [
    {
      id: 1,
      name: "John Brown",
      Age: 45,
      Location: " Kakata",
    },
    {
      id: 2,
      name: "Paul John",
      Age: 44,
      Location: "Liberia",
    },
    {
      id: 3,
      name: "John Brown",
      Age: 45,
      Location: " Kakata",
    },
    {
      id: 4,
      name: "Paul John",
      Age: 44,
      Location: "Liberia",
    },
    {
      id: 5,
      name: "John Brown",
      Age: 45,
      Location: " Kakata",
    },
    {
      id: 6,
      name: "Paul John",
      Age: 44,
      Location: "Liberia",
    },
  ];

  useEffect(() => {
    const userNote = user;
    // notes();
    if (userNote) {
      setNote(userNote);
    }

    console.log("Note: " + note);
  }, []);

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
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                    />
                  </svg>
                  Graph Statistic
                </a>{" "}
              </h2>
            </div>
          </div>
          <div>
            <div className="w-full bg-amber-500">
              <h2>Making our idea safe and secure for future implementation</h2>
            </div>
            <div className="item">
              {note.map((data) => (
                <div key={data.id} className="data">
                  {data.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
