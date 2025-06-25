import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
import toast from "react-hot-toast";
import { Foster } from "../components/Foster";

export const Admin = () => {
  const [commet, setComment] = useState([]);
  const [count, setCount] = useState(0);
  const adminData = JSON.parse(localStorage.getItem("admin"));
  const [user, setUser] = useState([]);
  const len = user.length;

  async function sendId(id) {
    try {
      const getResponse = await axios.delete(
        `${process.env.BASE_URL_DOC}/api/admin/${id}`
      );

      toast.success("Done");
    } catch (error) {
      console.error(error);
    }
    console.log(id);
  }

  async function getAllUser() {
    try {
      const getResponse = await axios.get(
        `${process.env.BASE_URL_DOC}/api/admin/getuser`
      );

      if (getResponse.data) {
        setUser(getResponse.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function getAllMessage() {
    try {
      const getResponse = await axios.get(
        `${process.env.BASE_URL_DOC}/api/admin/comment`
      );

      if (getResponse.data) {
        setComment(getResponse.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleLogout() {
    const clear = localStorage.removeItem("admin");
    const clear2 = localStorage.removeItem("isLoggedIn");
    window.location = "/";
  }

  useEffect(() => {
    getAllUser();
    getAllMessage();
  }, []);
  return (
    <div className="adMain">
      <div className="containerDiv">
        <div className="adminHere">
          <div className="adminBtn">
            <ul>
              <li
                className="cursor-pointer hover:text-gray-500"
                onClick={handleLogout}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-5 inline-block mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <Link to="/">Back to Home</Link>
              </li>
              <li className="cursor-pointer hover:text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-5 inline-block mr-2"
                >
                  <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                </svg>
                Create Admin
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 inline-block mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Current Admin: {adminData.email}
              </li>
              <li
                className="cursor-pointer hover:text-gray-500"
                onClick={handleLogout}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5 inline-block mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>
                Logout
              </li>
            </ul>
          </div>
          <div className="totalUser">
            <h1>Total User</h1>
            <h1 className="text-6xl font-bold m-3 center text-white">{len}</h1>
            <h2>
              Total FeedBback Message: <b>{commet.length}</b>{" "}
            </h2>
          </div>
        </div>
        <div className="userList">
          <h1 className="text-white text-2xl p-3 uppercase font-bold">
            Active user
          </h1>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-[15px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    User Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Date of Creation
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              {user.map((person) => (
                <tbody key={person.userId}>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-4 inline-block mr-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      {person.username}
                    </th>
                    <td class="px-6 py-4">{person.email}</td>
                    <td class="px-6 py-4">{person.dateCreatedAt}</td>
                    <td class="px-6 py-4">
                      <Link
                        onClick={() => sendId(person.userId)}
                        class="font-medium flex cursor-pointer text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="size-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                            clip-rule="evenodd"
                          />
                        </svg>{" "}
                        <h2 className="text-[17px]">Delete</h2>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
        <div className="comment">
          <h1 className="text-white text-2xl p-3 uppercase mt-10 font-bold">
            Visitor Commitment
          </h1>
          <div className="visitorDiv">
            {commet.map((msg) => (
              <div className="VisitorData" key={msg.id}>
                {msg.feedMessage} <br /> <br />
                {msg.datedCreated} <br />
                {msg.visitorName}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Foster />
    </div>
  );
};
