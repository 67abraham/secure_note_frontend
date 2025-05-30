"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import { HomeUser } from "./HomeUser";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import toast, { Toaster } from "react-hot-toast";

export function SinglePlan() {
  const { id } = useParams();
  const [spa, setspa] = useState({});
  const content = DOMPurify.sanitize(spa.noteContent);

  async function singleData() {
    try {
      const datatoken = JSON.parse(localStorage.getItem("jwtToken"));
      const token = datatoken.jwtToken;
      const content = await axios.get(
        `http://localhost:8080/api/content/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (content.data) {
        setspa(content.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    singleData();
  }, []);

  async function deleteData() {
    try {
      const datatoken = JSON.parse(localStorage.getItem("jwtToken"));
      const token = datatoken.jwtToken;
      const delecontent = await axios.delete(
        `http://localhost:8080/api/content/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (delecontent.data) {
        toast.success("Delete complete");
        window.location = "/user_dashboard";
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <HomeUser />
      <Toaster />
      <div className="btn1">
        <div className="backbtn">
          <Link to="/user_dashboard" className="flex m-3 border-amber-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 flex ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <h1 className="font-bold ml-3 hover:underline">Back</h1>
          </Link>
        </div>
        <div className="blocks">
          <button className="inline-block">
            <Link to={`/edit_content/${id}`}>Edit </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>

          <button className="inline-block" onClick={deleteData}>
            Delete{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 inline-block relative"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="plan">
        <h1 className="font-black text-3xl m-3">{spa.title}</h1>
        <h1 className="text-xl">{parse(content)}</h1>
        <p>{spa.dateCreatedAt}</p>
      </div>
    </div>
  );
}
