import SignUpForm from "@/components/forms/SignUpForm";
import Link from "next/link";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create an Account
        </h2>
      </div>

      <div className="bg-slate-800 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <SignUpForm />

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account{" "}
          <Link
            href="/sign-in"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};
export default page;
