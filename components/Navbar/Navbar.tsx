import Link from "next/link";
import React from "react";
import SignOutButton from "../shared/SignOutButton";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[[...nextauth]]/options";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = async () => {
  const session = await getServerSession(options);

  return (
    <div className="w-full flex items-center justify-between gap-4 text-gray-200 py-4 px-8 bg-slate-900">
      <Link href="/">Home</Link>
      {session ? (
        <p className="font-bold uppercase">{session.user?.name}</p>
      ) : (
        <Link href="/sign-up">Create an Account</Link>
      )}
      {session ? <SignOutButton /> : <Link href="/sign-in">Sign In</Link>}
    </div>
  );
};
export default Navbar;
