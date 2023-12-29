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
    id,
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
    <div className="w-full px-4 border border-gray-700 py-2">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex flex-col justify-center gap-2"
      >
        <label>
          <p>Title</p>
          <input
            type="text"
            className="text-gray-200 placeholder:text-gray-400 px-1 w-full bg-gray-700 py-2"
            placeholder="Genji"
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
          <textarea
            className="text-gray-200 placeholder:text-gray-400 px-1 w-full bg-gray-700 py-2"
            placeholder="I need healing!"
            rows={8}
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
          <div className="flex justify-between">
            <label>
              <input
                className="bg-gray-700"
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
        <button className="bg-blue-800 rounded hover:bg-blue-900 py-2">
          POST
        </button>
      </form>
    </div>
  );
};
export default PostForm;
