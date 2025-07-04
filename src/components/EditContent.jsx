import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HomeUser } from "./HomeUser";
import axios from "axios";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import { QMenu } from "./QMenu";
import toast, { Toaster } from "react-hot-toast";
import DOMPurify from "dompurify";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const EditContent = () => {
  const { con_id } = useParams();
  const [editTitle, setEditTitle] = useState("");
  const [editCon, setEditCon] = useState("<p>Loading here</p>");
  const [title, setTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const cont = DOMPurify.sanitize(editCon.noteContent);

  async function singleData() {
    try {
      const datatoken = JSON.parse(localStorage.getItem("jwtToken"));
      const token = datatoken.jwtToken;
      const content = await axios.get(`${BASE_URL}/api/content/${con_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (content.data) {
        setEditTitle(content.data);
        setEditCon(content.data);
      }
    } catch (error) {
      console.error(error);
      window.location = "/login_user";
    }
  }

  useEffect(() => {
    toast.promise(singleData(), {
      loading: "Please wait..",
    });

    editor.commands.insertContent(cont);
  }, [cont]);

  async function sendEditData(data) {
    console.log("fuctionCheck: " + data);
    try {
      const datatoken = JSON.parse(localStorage.getItem("jwtToken"));
      const token = datatoken.jwtToken;
      const content = await axios.put(
        `${BASE_URL}/api/content/${con_id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "text/plain",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "write content here.....",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),

      Highlight.configure({ multicolor: true }),
      Underline,
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "tiptap",
      },
      scrollThreshold: 80,
      scrollMargin: 80,
    },
    onUpdate: ({ editor }) => {
      setNoteContent(editor.getHTML());
    },
  });

  const handeUpdatedData = () => {
    toast.promise(sendEditData(noteContent), {
      loading: "Please wait..",
      success: "Saved",
      error: "fail to saved",
    });
  };
  return (
    <div>
      <HomeUser />
      <div>
        <Toaster />
        <div className="backbtn">
          <Link
            to={`/user_dashboard/${con_id}`}
            className="flex m-3 border-amber-50"
          >
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
        <div className="edit">
          <input
            type="text"
            className="title outline-0"
            placeholder="heading"
            value={editTitle.title || ""}
            readOnly
          />
          <QMenu editor={editor} />
          {editCon ? <EditorContent editor={editor} /> : <h1>Loading</h1>}
          <button className="btn" onClick={handeUpdatedData}>
            Save Change
          </button>
        </div>
      </div>
    </div>
  );
};
