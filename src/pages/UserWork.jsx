import React, { useEffect, useState } from "react";
import { HomeUser } from "../components/HomeUser";
import { notes } from "../utils/axio";
import { useNavigate } from "react-router-dom";

export const UserWork = () => {
  const [note, setNote] = useState([]);
  const nagivate = useNavigate();

  useEffect(() => {
    const userNote = notes();
    if (userNote) {
      setNote(userNote);
    }
    console.log("Note: " + note);
  }, []);

  return (
    <div>
      <HomeUser />
      UserWork
    </div>
  );
};
