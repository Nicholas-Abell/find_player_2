import { options } from "@/app/api/auth/[[...nextauth]]/options";
import { fetchPost } from "@/lib/actions/post.actions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { FaShield } from "react-icons/fa6";
import { GiHeavyBullets, GiHealthNormal } from "react-icons/gi";

type pageProps = {};

async function page({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);
  return (
    <div className="flex flex-col justify-between items-center py-4 bg-gray-800 px-4 gap-4 text-white">
      <h3>{post?.title}</h3>
      <p>{post?.content}</p>
      <div className="grid grid-cols-3 gap-4">
        <div
          className={`${
            post?.roles?.includes("tank") || post?.roles?.length === 0 || null
              ? "text-white"
              : "text-gray-600"
          } flex flex-col justify-center items-center gap-4 py-4`}
        >
          <p>Tank</p>
          <FaShield size={25} />
        </div>
        <div
          className={`${
            post?.roles?.includes("damage") || post?.roles?.length === 0 || null
              ? "text-white"
              : "text-gray-600"
          } flex flex-col justify-center items-center gap-4 py-4`}
        >
          <p>Damage</p>
          <GiHeavyBullets size={25} />
        </div>
        <div
          className={`${
            post?.roles?.includes("healer") || post?.roles?.length === 0 || null
              ? "text-white"
              : "text-gray-600"
          } flex flex-col justify-center items-center gap-4 py-4`}
        >
          <p>Healer</p>
          <GiHealthNormal size={25} />
        </div>
      </div>
    </div>
  );
}
export default page;
