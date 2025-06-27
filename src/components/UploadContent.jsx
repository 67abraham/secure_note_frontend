import React, { useEffect, useState } from "react";
import { HomeUser } from "./HomeUser";
import { Link } from "react-router-dom";
import { UploadMode } from "./Mode";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const UploadContent = () => {
  const [listDocument, setListDocument] = useState([]);
  const [open, setOpen] = useState(false);

  async function handerContent() {
    try {
      const datatoken = JSON.parse(localStorage.getItem("jwtToken"));
      const token = datatoken.jwtToken;
      const content = await axios.get(
        `${BASE_URL}/api/doc`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (content.data) {
        setListDocument(content.data);
      }
    } catch (error) {
      toast.error("login session expired");
      window.location = "/login_user";
    }
  }

  async function deleteContent(id) {
    try {
      const datatoken = JSON.parse(localStorage.getItem("jwtToken"));
      const token = datatoken.jwtToken;
      const content = await axios.delete(
        `${BASE_URL}/api/doc/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (content.status == 200) {
        toast.success("Done");
        window.location = "/user_dashboard/upload_content";
      }
    } catch (error) {
      toast.error("login session expired");
      window.location = "/login_user";
    }
  }

  function copyLink(link) {
    navigator.clipboard.writeText(link);
    toast.success("Link copied!");
  }
  useEffect(() => {
    toast.promise(handerContent(), {
      loading: "please wait",
    });
  }, []);
  return (
    <div>
      <HomeUser />
      <Toaster />
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
      <div className="uploadDiv">
        <button
          onClick={() => setOpen(true)}
          className="ml-12 my-8 p-2 text-xl font-bold bg-blue-500 rounded text-amber-50 mt-8 cursor-pointer"
        >
          Upload Content
        </button>
        <UploadMode open={open} onClose={() => setOpen(false)} />

        <div class="relative overflow-x-auto tableDev tableMoble">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-600 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Document/Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Owner
                </th>
                <th scope="col" className="px-6 py-3">
                  Date Modified
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {listDocument.map((doc) => (
              <tbody key={doc.documentId}>
                <tr className="bg-white border-b  border-gray-200 text-black">
                  <th
                    scope="row"
                    className="firstCol px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex-wrap"
                  >
                    <Link to={doc.documentUrl} target="_blank">
                      <h1 className="font-bold hover:text-blue-600 cursor-pointer">
                        {" "}
                        {doc.name}
                      </h1>
                    </Link>
                  </th>
                  <td className="px-6 py-4 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-6 inline-block"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>{" "}
                    {doc.ownerName}
                  </td>
                  <td class="px-6 py-4 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-6 inline-block"
                    >
                      <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                      <path
                        fill-rule="evenodd"
                        d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>{" "}
                    {doc.dateCreated}
                  </td>
                  <td class="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-6 cursor-pointer inline-block hover:text-red-600"
                      onClick={() => deleteContent(doc.documentId)}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                        clip-rule="evenodd"
                      />
                    </svg>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-6 inline-block ml-5 hover:text-blue-400 cursor-pointer"
                      onClick={() => copyLink(doc.documentUrl)}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
