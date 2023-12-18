import React from "react";
import { FaShield } from "react-icons/fa6";
import { GiHealthNormal, GiHeavyBullets } from "react-icons/gi";

type CardProps = {
  gameTitle: string;
  content?: string | null;
};

const Card: React.FC<CardProps> = ({ gameTitle, content }) => {
  return (
    <div className="flex flex-col justify-between items-center py-4 bg-gray-800 px-4 gap-4">
      <h3>{gameTitle}</h3>
      <p>{content}</p>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col justify-between items-center gap-4">
          <p>Tank</p>
          <FaShield size={25} />
          <p>check</p>
        </div>
        <div className="flex flex-col justify-between items-center gap-4">
          <p>Damage</p>
          <GiHeavyBullets size={25} />
          <p>check</p>
        </div>
        <div className="flex flex-col justify-between items-center gap-4">
          <p>Healer</p>
          <GiHealthNormal size={25} />
          <p>check</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
