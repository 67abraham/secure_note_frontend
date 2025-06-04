import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Admin = () => {
  const [commet, useComment] = useState([]);
  const user = [
    {
      id: 1,
      name: "John Dolo",
      email: "airco170@gmail.com",
      dateCreated: "January 1, 2024",
    },
    {
      id: 2,
      name: "Henry Sackie",
      email: "airco170@gmail.com",
      dateCreated: "January 1, 2024",
    },

    {
      id: 3,
      name: "Peter Sackie",
      email: "airco170@gmail.com",
      dateCreated: "January 1, 2024",
    },
  ];
  async function sendId(id) {
    console.log(id);
  }
  return (
    <div className="adMain">
      <div className="containerDiv">
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
                <tbody key={person.id}>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {person.name}
                    </th>
                    <td class="px-6 py-4">{person.email}</td>
                    <td class="px-6 py-4">{person.dateCreated}</td>
                    <td class="px-6 py-4">
                      <Link
                        onClick={() => sendId(person.id)}
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
        </div>
      </div>
    </div>
  );
};
