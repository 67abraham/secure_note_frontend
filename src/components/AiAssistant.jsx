import React from "react";
import { HomeUser } from "./HomeUser";
import { HomeLagout } from "./HomeLagout";

export const AiAssistant = () => {
  return (
    <div>
      <HomeUser />
      <div className="pageCont">Page Under Construction</div>
    </div>
  );
};

export const NotFound = () => {
  return (
    <div>
      <HomeLagout />
      <div className="pageCont">404 Page not Found </div>
    </div>
  );
};
