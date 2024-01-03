"use client";
import React from "react";

type errorProps = {};

const error: React.FC<errorProps> = () => {
  return (
    <div className="h-screen w-full text-center">
      <p>Something went wrong...</p>
    </div>
  );
};
export default error;
