import React from "react";

export const Foster = () => {
  return (
    <div>
      <div className="footBase">
        <div className="ml-[10px]">
          <h1 className="rounded-md text-2xl  text-amber-500 font-extrabold px-3 py-2 ">
            AirNote
          </h1>
          <br />
          <div className="footText">
            <h2>Developer</h2>
            <p>@AircoTeam</p>
            <p>
              Abraham C. Sackie <br /> S W E: Junior Backend Engineer
            </p>
          </div>
        </div>
        <div className="terms">
          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Conpyright Information</li>
            <li>Terms & Policy</li>
            <li>
              <a href="administrator_login" target="_blank">
                <i>Admin</i>
              </a>
            </li>
          </ul>
        </div>
        <div className="socialIcon">
          <h2>Social Medial</h2>
          <i class="bi bi-facebook" id="ic"></i>
          <i class="bi bi-whatsapp" id="ic"></i>
          <i class="bi bi-youtube" id="ic"></i>
          <i class="bi bi-linkedin" id="ic"></i>
        </div>
      </div>
    </div>
  );
};
