import React, { useEffect, useState } from "react";
import { HomeLagout } from "../components/HomeLagout";
import handWriting from "../assets/hand.png";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
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
    if (visitorName.trim().length != 0 && feedMessage.trim().length != 0) {
      toast.promise(VisitortorMessage(visitorFeedBack), {
        loading: "Please wait..",
        error: "Message Fail, Please Try Again",
      });
    } else {
      toast.error("Name/Email & feedback is required");
    }

    setFeedMessage("");
    setVisitorName("");
  }

  // scrolling image start here
  useEffect(() => {
    const scroller = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAmination();
    }

    function addAmination() {
      scroller.forEach((scroll) => {
        scroll.setAttribute("data-animated", true);

        const scrollerInner = scroll.querySelector(".scroller_inner");
        const scrollContent = Array.from(scrollerInner.children);

        scrollContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  //scrolling image end end
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
          "A dream written down with a date become a goal. A goal broken down
          into steps becomes a plan. A plan backed by action makes your dreams
          come true."
        </h2>
      </div>
      <div className="imageScroller">
        <h1>Inspiration</h1>
        <div className="tag scroller">
          <ul className=" tagList scroller_inner">
            <li>
              <img src={img2} width={400} />
            </li>
            <li>
              <img src={img3} width={400} />
            </li>
            <li>
              <img src={img4} width={400} />
            </li>

            <li>
              <img src={img6} width={400} />
            </li>

            <li>
              <img src={img8} width={400} />
            </li>
            <li>
              <img src={img9} width={400} />
            </li>
            <li>
              <img src={img10} width={400} />
            </li>
          </ul>
        </div>
      </div>
      <div className="About-Use" id="about" name="about">
        <div className="contentHere">
          <h2 className="AbutText">About Us</h2>
          <p>
            "Liberia & China is the home of <b>AirNote.</b> We're passionate
            about bringing your idea to live and also believe in your concept.
            Our team, led by SWE: Abraham C. Sackie, is dedicated to Customer
            value and the value of the product to the world. We've been serving
            multiple Businesses for over 7year, helping them achieve their goal
            in the online world. We're constantly innovating and growing to
            provide the <b>Best out of the Best to our Customer</b>. Join us on
            our journey, and explore our Product."
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
