import React from "react";

type loadingProps = {};

const loading: React.FC<loadingProps> = () => {
  return (
    <section className="text-gray-200">
      <div className="w-full text-gray-200 flex justify-center items-center text-center py-4">
        <h1 className="text-xl font-bold">Over Where?</h1>
      </div>
      <div className="w-full min-h-screen text-gray-200 grid md:grid-cols-2 xl:grid-cols-3 grid-rows-3 r gap-4 p-4">
        <div className="bg-gray-400 animate-pulse" />
        <div className="bg-gray-400 animate-pulse" />
        <div className="bg-gray-400 animate-pulse" />
        <div className="bg-gray-400 animate-pulse" />
        <div className="bg-gray-400 animate-pulse" />
        <div className="bg-gray-400 animate-pulse" />
      </div>
    </section>
  );
};
export default loading;
