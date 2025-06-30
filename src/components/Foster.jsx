import React from "react";
import { Link } from "react-router-dom";

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
          <h2>Social Media</h2>
          <Link
            to={"https://www.facebook.com/aircooo"}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i class="bi bi-facebook" id="ic"></i>
          </Link>
          <Link
            to={
              "https://note-documents.s3.amazonaws.com/d7283e97-233f-496c-a181-08ca45a31112.jpeg"
            }
            className="icon"
          >
            <i class="bi bi-whatsapp" id="ic"></i>
          </Link>
          <Link
            to={"http://www.youtube.com/@aircotech7864"}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i class="bi bi-youtube" id="ic"></i>
          </Link>

          <Link
            to={
              "https://www.linkedin.com/in/abraham-c-sackie-6a893926b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i class="bi bi-linkedin" id="ic"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
