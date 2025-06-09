import React from "react";
import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import { QMenu } from "./QMenu";
import { PostContent } from "../utils/axio";
import toast, { Toaster } from "react-hot-toast";

export const Quills = () => {
  const [noteContent, setNoteContent] = useState("");
  const [title, setTitle] = useState("");

  const onChange = () => {
    let flag = false;
    if (title.trim().length === 0 && noteContent.trim().length === 0) {
      toast.error(" Title/Content is required");
    } else {
      const post = { title, noteContent };
      PostContent(post);

      flag = true;
    }

    if (flag) window.location = "/user_dashboard";
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "write content here.....",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Heading.configure({
        levels: [1, 2, 3],
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

  return (
    <div>
      <Toaster />
      <input
        type="text"
        className="title"
        placeholder="heading"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <QMenu editor={editor} />
      <EditorContent editor={editor} />
      <button onClick={onChange} className="btn">
        Create Plan
      </button>
    </div>
  );
};
