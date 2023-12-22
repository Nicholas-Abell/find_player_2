'use client'
import React from "react";
import { signOut } from "next-auth/react";

type SignOutButtonProps = {};

const SignOutButton: React.FC<SignOutButtonProps> = () => {
  return (
    <button
      onClick={() => signOut()}
      className="bg-red-600 font-bold text-lg border shadow-md shadow-gray-400"
    >
      Sign Out
    </button>
  );
};
export default SignOutButton;
