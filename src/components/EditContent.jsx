import React from "react";
import { useParams } from "react-router-dom";
import { Mode } from "./Mode";
import { HomeUser } from "./HomeUser";

export const EditContent = () => {
  const { con_id } = useParams();
  console.log("id:" + con_id);

  return (
    <div>
      <HomeUser />
      <h1>editconet</h1>
      <Mode />
    </div>
  );
};
