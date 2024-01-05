import { CreatePost } from "@/lib/actions/post.actions";
import React from "react";

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
  const toggleRole = (roles: string[], role: string) => {
    return roles.includes(role)
      ? roles.filter((r) => r !== role)
      : [...roles, role];
  };

  return (
    <div className="w-full px-4 border border-gray-700 py-2">
      <form
        action={CreatePost}
        className="mx-auto flex flex-col justify-center gap-2"
      >
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            className="text-gray-200 placeholder:text-gray-400 px-1 w-full bg-gray-700 py-2"
            placeholder="Genji"
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            className="text-gray-200 placeholder:text-gray-400 px-1 w-full bg-gray-700 py-2"
            placeholder="I need healing!"
            name="content"
            id="content"
            rows={8}
          />
        </div>
        <div>
          <label>Roles:</label>
          <div className="flex justify-between">
            <label htmlFor="tank" className="hover:cursor-pointer flex gap-1">
              <input type="checkbox" name="tank" value="tank" id="tank" />
              Tank
            </label>
            <label htmlFor="damage" className="hover:cursor-pointer flex gap-1">
              <input type="checkbox" name="damage" value="damage" id="damage" />
              Damage
            </label>
            <label htmlFor="healer" className="hover:cursor-pointer flex gap-1">
              <input type="checkbox" name="healer" value="healer" id="healer" />
              Healer
            </label>
          </div>
        </div>
        <input type="hidden" id="authorId" name="authorId" value={id} />
        <button className="bg-blue-800 rounded hover:bg-blue-900 py-2">
          POST
        </button>
      </form>
    </div>
  );
};
export default PostForm;
