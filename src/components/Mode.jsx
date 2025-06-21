import React, { useState } from "react";
import { Quills } from "./Quill";
import toast, { Toaster } from "react-hot-toast";
import { DocumentData } from "../utils/axio";

export const Mode = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="container">
        <div className="modelRight">
          <p className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 closeBtn"
              onClick={onClose}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </p>
        </div>
        <div className="modelData">
          <h2>AirNote Text Editor</h2>
        </div>
        <div>
          <Quills />
        </div>
      </div>
    </div>
  );
};

export const UploadMode = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  const [document, setDocument] = useState(null);
  const [name, setName] = useState("");

  function sendDocument(e) {
    e.preventDefault();

    if (document != null) {
      setName((preName) => (preName ? preName : document.name));
    }
    console.log("size: " + document.size);

    if (name.trim().length > 0) {
      const formdata = new FormData();
      formdata.append("description", JSON.stringify(name));
      formdata.append("file", document);
      toast.promise(DocumentData(formdata), {
        loading: "Please wait ....",
      });
      // if (document.size <= 1000000) {
      // } else toast.error("file size too large");
    }
  }

  return (
    <div className="overlay">
      <Toaster />
      <div onClick={(e) => e.stopPropagation()} className="upContainer">
        <div className="modelRight">
          <p className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 closeBtn"
              onClick={onClose}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </p>
        </div>
        <div className="modelData">
          <h2>AirNote</h2>
        </div>
        <div>
          <form className="uploadForm">
            <label htmlFor="name" className="ml-2 font-bold my-[6px]">
              Document Name(Auto Fill)
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="file name..."
              value={name || (document ? document.name : "")}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <h2 className="ml-2 font-bold">Click to Upload</h2>
            <p>format: pdf,images,docx,xml,doc,pptx </p>
            <label
              htmlFor="image"
              className="cursor-pointer hover:text-blue-400"
            >
              {document ? (
                document.name
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-9 cursor-pointer hover:coloe[red]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6.905 9.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V18a.75.75 0 0 0 1.5 0v-4.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                    clip-rule="evenodd"
                  />
                  <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                </svg>
              )}
            </label>

            <input
              type="file"
              name="image"
              id="image"
              accept=".pdf, .doc, .docx, .pptx, .ppt, image/*"
              hidden
              required
              onChange={(e) => setDocument(e.target.files[0])}
            />
            <br />

            <button className="upBTN" onClick={sendDocument}>
              {" "}
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
