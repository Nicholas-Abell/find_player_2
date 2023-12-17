import React from "react";

type CardProps = {};

const Card: React.FC<CardProps> = () => {
  return (
    <div className="flex flex-col justify-between items-center py-4 bg-gray-800 px-4 gap-4">
      <h3>Game</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        quidem corrupti consequuntur vero iusto saepe error sunt culpa.
        Provident reiciendis doloribus, cupiditate impedit facilis animi!
        Corporis quas voluptatem excepturi maxime?
      </p>
      <p>asdf asdf asdf asdf asdf</p>
    </div>
  );
};
export default Card;
