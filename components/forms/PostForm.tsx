"use client";
import { CreatePost } from "@/lib/actions/post.actions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type PostFormProps = {
  id: string;
};

interface FormData {
  title: string;
  content: string;
  roles: any;
  id: string;
}

const PostForm: React.FC<PostFormProps> = ({ id }) => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
    roles: [],
    id
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    CreatePost(formData);
  };

  const toggleRole = (roles: string[], role: string) => {
    return roles.includes(role)
      ? roles.filter((r) => r !== role)
      : [...roles, role];
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Title</p>
        <input
          type="text"
          onChange={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              title: e.target.value,
            }));
          }}
        />
      </label>
      <label>
        <p>Content</p>
        <input
          type="text"
          onChange={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              content: e.target.value,
            }));
          }}
        />
      </label>
      <div>
        <label>Roles:</label>
        <div>
          <label>
            <input
              type="checkbox"
              name="roles"
              value="tank"
              checked={formData.roles.includes("tank")}
              onChange={() =>
                setFormData((prevData) => ({
                  ...prevData,
                  roles: toggleRole(prevData.roles, "tank"),
                }))
              }
            />
            Tank
          </label>
          <label>
            <input
              type="checkbox"
              name="roles"
              value="damage"
              checked={formData.roles.includes("damage")}
              onChange={() =>
                setFormData((prevData) => ({
                  ...prevData,
                  roles: toggleRole(prevData.roles, "damage"),
                }))
              }
            />
            Damage
          </label>
          <label>
            <input
              type="checkbox"
              name="roles"
              value="healer"
              checked={formData.roles.includes("healer")}
              onChange={() =>
                setFormData((prevData) => ({
                  ...prevData,
                  roles: toggleRole(prevData.roles, "healer"),
                }))
              }
            />
            Healer
          </label>
        </div>
      </div>
      <button>Push</button>
    </form>
  );
};
export default PostForm;
