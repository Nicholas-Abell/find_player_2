import { CreateMessage } from "@/lib/actions/message.actions";
import React from "react";

type MessageFormProps = {
  userId: string | undefined;
  postId: string;
};

const MessageForm: React.FC<MessageFormProps> = ({ userId, postId }) => {
  return (
    <div className="px-4 py-8 text-gray-200 border-b-2 border-gray-500">
      <form action={CreateMessage}>
        <div>
          <label
            htmlFor="content"
            className="block text-sm text-gray-200 font-medium leading-6"
          >
            Message:
          </label>
          <div className="mt-2 flex items-center gap-2">
            <input
              id="content"
              name="content"
              type="text"
              placeholder="...message"
              required
              className="block bg-[#0d1117] border border-gray-600 rounded-lg w-full rounded-m py-1.5 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-4"
            />
            <button
              className="border border-gray-600 py-2 px-4 rounded-xl hover:bg-gray-700 ease-in-out"
              type="submit"
            >
              SEND
            </button>
          </div>
        </div>
        <input type="hidden" id="userId" name="userId" value={userId} />
        <input type="hidden" id="postId" name="postId" value={postId} />
      </form>
    </div>
  );
};
export default MessageForm;
