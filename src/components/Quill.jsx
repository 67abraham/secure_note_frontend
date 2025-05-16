import React from "react";
import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import { QMenu } from "./QMenu";

export const Quills = () => {
  const [noteContent, setNoteContent] = useState("");
  const [title, setTitle] = useState("");

  const onChange = () => {
    const post = { title, noteContent };
    console.log(post);
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
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
    },
    onUpdate: ({ editor }) => {
      setNoteContent(editor.getHTML());
    },
  });

  return (
    <div>
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
