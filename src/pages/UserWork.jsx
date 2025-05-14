import React, { useEffect, useState } from "react";
import { HomeUser } from "../components/HomeUser";
import { notes } from "../utils/axio";
import { useNavigate } from "react-router-dom";
// import { DotLottieReact } from "lottie-react/dotlottie-react";

export const UserWork = () => {
  const [note, setNote] = useState([]);
  const nagivate = useNavigate();
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
          <div className="sidebar"></div>
          <div>
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
