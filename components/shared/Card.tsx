"use client";
import React from "react";
import { FaShield } from "react-icons/fa6";
import { GiHealthNormal, GiHeavyBullets } from "react-icons/gi";
import { MdDeleteForever } from "react-icons/md";
import Link from "next/link";
import { deletePost } from "@/lib/actions/post.actions";

type CardProps = {
  title: string;
  content?: string | null;
  roles?: string[] | null;
  id: string;
  author: string | null | undefined;
  isAuthor: boolean;
};

let handleClick = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  deletePost(id);
};

const Card: React.FC<CardProps> = ({
  title,
  content,
  roles,
  id,
  author,
  isAuthor,
}) => {
  return (
    <Link
      href={`post/${id}`}
      className="relative flex flex-col justify-between items-center py-4 bg-gray-800 px-4 gap-4"
    >
      {isAuthor && (
        <button
          onClick={(e) => handleClick(id, e)}
          className="absolute top-0 left-0 p-4"
        >
          <MdDeleteForever
            className="text-red-800 z-10 hover:text-red-900"
            size={30}
          />
        </button>
      )}
      <h3>{author}</h3>
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="grid grid-cols-3 gap-4">
        <div
          className={`${
            roles?.includes("tank") || roles?.length === 0
              ? "text-white"
              : "text-gray-600"
          } flex flex-col justify-center items-center gap-4 py-4`}
        >
          <p>Tank</p>
          <FaShield size={25} />
        </div>
        <div
          className={`${
            roles?.includes("damage") || roles?.length === 0
              ? "text-white"
              : "text-gray-600"
          } flex flex-col justify-center items-center gap-4 py-4`}
        >
          <p>Damage</p>
          <GiHeavyBullets size={25} />
        </div>
        <div
          className={`${
            roles?.includes("healer") || roles?.length === 0
              ? "text-white"
              : "text-gray-600"
          } flex flex-col justify-center items-center gap-4 py-4`}
        >
          <p>Healer</p>
          <GiHealthNormal size={25} />
        </div>
      </div>
    </Link>
  );
};
export default Card;
