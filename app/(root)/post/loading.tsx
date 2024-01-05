import React from "react";

type loadingProps = {};

const loading: React.FC<loadingProps> = () => {
  return (
    <div className="min-h-screen w-full text-center flex items-center justify-center text-gray-400">
      <p>...loading</p>
    </div>
  );
};
export default loading;
