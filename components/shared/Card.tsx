"use client";
import { DeletePost } from "@/lib/prisma/actions/user.actions";
import React from "react";
import { FaShield } from "react-icons/fa6";
import { GiHealthNormal, GiHeavyBullets } from "react-icons/gi";

type CardProps = {
  title: string;
  content?: string | null;
  roles?: string[] | null;
  id: string;
};

const Card: React.FC<CardProps> = ({ title, content, roles, id }) => {
  return (
    <div className="flex flex-col justify-between items-center py-4 bg-gray-800 px-4 gap-4">
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
    </div>
  );
};
export default Card;
