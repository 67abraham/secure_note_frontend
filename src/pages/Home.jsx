import React, { useState } from "react";
import { HomeLagout } from "../components/HomeLagout";
import handWriting from "../assets/hand.png";
import { useNavigate } from "react-router-dom";
import { Foster } from "../components/Foster";
import { toast, Toaster } from "react-hot-toast";
import { VisitortorMessage } from "../utils/axio";

export const Home = () => {
  const nagivate = useNavigate();
  const [visitorName, setVisitorName] = useState("");
  const [feedMessage, setFeedMessage] = useState("");

  function handleMessage(e) {
    e.preventDefault();

    const visitorFeedBack = { visitorName, feedMessage };
    console.log(visitorFeedBack);
    toast.promise(VisitortorMessage(visitorFeedBack), {
      loading: "Please wait..",
      error: "Message Fail, Please Try Again",
    });

    setFeedMessage("");
    setVisitorName("");
  }

  return (
    <div className="w-screen relative mainHome">
      <HomeLagout />
      <Toaster />
      <div className="bg-[#021a37] home relative ">
        <div className="flex place-content-center">
          <div className=" relative mobCont">
            <h1 className="text-white text-7xl welText">
              Welcome to{" "}
              <span className="text-amber-500 font-bold">AIRNOTE</span>
            </h1>

            <p className="text-gray-500 text-2xl py-2">
              The Best Place for Handing What{" "}
              <b className="text-white">MATTER</b>
            </p>
            <div className="mobTextDes">
              <div className="mobText">
                <h2 className="text-gray-300 font-medium text-2xl flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-amber-400 stroke-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Todo Plan
                </h2>
                <h2 className="text-gray-300 font-medium text-2xl flex px-10 p-2 futurep">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-amber-400 stroke-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Future Plan
                </h2>
                <h2 className="text-gray-300 font-medium text-2xl flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-amber-400 stroke-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Ideas Plan
                </h2>
              </div>
              <div className=" right-0">
                <img src={handWriting} alt="" width={400} />
              </div>
            </div>
            <div className="relative SignUp_bt">
              <button
                className="bg-amber-600 text-white p-2 px-5 rounded-md text-2xl hover:bg-amber-500 pointer font-bold"
                onClick={() => nagivate("/register_user")}
              >
                Sign-Up for free
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="spir">
        <h2 className="spirText">
          A dream written down with a date become a goal. A goal broken down
          into steps becomes a plan. Aplan backed by action makes your dreams
          come true.
        </h2>
      </div>
      <div className="About-Use">
        <div className="contentHere">
          <h2 className="AbutText">About Us</h2>
          <p>
            "Huangdao, Qingdao is the home of [Your Company Name]. We're
            passionate about [your industry/product] and believe in [your core
            values]. Our team, led by [Founder's Name], is dedicated to [mission
            statement]. We've been serving [target audience] for [number of
            years], helping them [benefit/solution]. We're constantly innovating
            and growing to provide [unique value proposition]. Join us on our
            journey, and explore our [products/services]." 
          </p>
        </div>
        <div className="feedback">
          <form action="#" className="feedCon">
            <h2 className="AbutText">FeedBack</h2>
            <p>Please tell us your experience about our website</p>
            <p>Your feedback Help for Future improvement</p>
            <input
              type="text"
              placeholder="Please enter email for personal appreciation"
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
            />
            <textarea
              name="commit"
              maxLength={500}
              placeholder="feedback/commitment"
              value={feedMessage}
              onChange={(e) => setFeedMessage(e.target.value)}
            ></textarea>
            <button className="feedBtn" onClick={handleMessage}>
              - Submit -{" "}
            </button>
          </form>
        </div>
      </div>
      <Foster />
    </div>
  );
};
