"use client";
import React, { useState } from "react";

type PostFormProps = {};

const PostForm: React.FC<PostFormProps> = () => {
  const [title, setTitle] = useState("title test");
  const [content, setContent] = useState("content test");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      fetch("/api/create-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
    } catch (error) {
      console.log("Create Post Error: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Title</p>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>
      <label>
        <p>Content</p>
        <input
          type="text"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </label>
      <button>Push</button>
    </form>
  );
};
export default PostForm;
