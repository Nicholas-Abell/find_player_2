import { FetchMessages } from "@/lib/actions/message.actions";
import { fetchPost } from "@/lib/actions/post.actions";
import React from "react";
import { FaShield } from "react-icons/fa6";
import { GiHeavyBullets, GiHealthNormal } from "react-icons/gi";

type pageProps = {};

async function page({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);
  const messages = await FetchMessages(params.id);

  return (
    <div>
      <div className="flex flex-col justify-between items-center py-4 bg-gray-800 px-4 gap-4 text-white">
        <h3>{post?.title}</h3>
        <p>{post?.content}</p>
        <div className="grid grid-cols-3 gap-4">
          <div
            className={`${
              post?.role?.includes("tank") || post?.role?.length === 0 || null
                ? "text-white"
                : "text-gray-600"
            } flex flex-col justify-center items-center gap-4 py-4`}
          >
            <p>Tank</p>
            <FaShield size={25} />
          </div>
          <div
            className={`${
              post?.role?.includes("damage") || post?.role?.length === 0 || null
                ? "text-white"
                : "text-gray-600"
            } flex flex-col justify-center items-center gap-4 py-4`}
          >
            <p>Damage</p>
            <GiHeavyBullets size={25} />
          </div>
          <div
            className={`${
              post?.role?.includes("healer") || post?.role?.length === 0 || null
                ? "text-white"
                : "text-gray-600"
            } flex flex-col justify-center items-center gap-4 py-4`}
          >
            <p>Healer</p>
            <GiHealthNormal size={25} />
          </div>
        </div>
      </div>
      <div className="w-full text-gray-200 border-b border-slate-700 py-4 px-8">
        {messages?.map((message: any, key: number) => (
          <p key={key}>
            {message.author.username}: {message.content}
          </p>
        ))}
      </div>
    </div>
  );
}
export default page;
