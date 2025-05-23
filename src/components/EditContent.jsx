import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

export const EditContent = () => {
  const { con_id } = useParams();
  const [editTitle, setEditTitle] = useState("");
  const [editCon, setEditCon] = useState("<p>Loading here</p>");
  const [title, setTitle] = useState("");
  const cont = DOMPurify.sanitize(editCon.noteContent);
  console.log(cont);

  async function singleData() {
    try {
      const datatoken = JSON.parse(localStorage.getItem("jwtToken"));
      const token = datatoken.jwtToken;
      const content = await axios.get(
        `http://localhost:8080/api/content/${con_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (content.data) {
        setEditTitle(content.data);
        setEditCon(content.data);
      }
    } catch (error) {
      console.error(error);
      //   window.location = "/login_user";
    }
  }

  useEffect(() => {
    toast.promise(singleData(), {
      loading: "Please wait..",
      error: "fail to get data",
    });
    editor.commands.insertContent(cont);
  }, [cont]);

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
      //   setNoteContent(editor.getHTML());
    },
  });
  return (
    <div>
      <HomeUser />
      <div>
        <Toaster />
        <input
          type="text"
          className="title"
          placeholder="heading"
          value={editTitle.title || ""}
          onChange={(e) => setTitle(e.target.value)}
          contentEditable="true"
        />
        <QMenu editor={editor} />
        {editCon ? <EditorContent editor={editor} /> : <h1>Loading</h1>}
        <button className="btn">Create Plan</button>
        {cont}
      </div>
    </div>
  );
};
