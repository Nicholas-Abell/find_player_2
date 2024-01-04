import { CreateUser } from "@/lib/actions/user.actions";
import React from "react";

type SignUpFormProps = {};

const SignUpForm: React.FC<SignUpFormProps> = async () => {
  return (
    <form
      className="space-y-6 bg-[#0d1117] rounded-3xl text-white px-4 py-8"
      action={CreateUser}
      method="POST"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6">
          Name:
        </label>
        <div className="mt-2">
          <input
            id="name"
            name="name"
            type="text"
            required
            className="block bg-[#0d1117] border border-gray-600 rounded-lg w-full rounded-m py-1.5 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-4"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6"
        >
          Username:
        </label>
        <div className="mt-2">
          <input
            id="username"
            name="username"
            type="text"
            required
            className="block bg-[#0d1117] border border-gray-600 rounded-lg w-full rounded-m py-1.5 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-4"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6">
          Email address:
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block bg-[#0d1117] border border-gray-600 rounded-lg w-full rounded-m py-1.5 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-4"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6"
          >
            Password:
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block bg-[#0d1117] border border-gray-600 rounded-lg w-full rounded-m py-1.5 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-4"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md border border-gray-800 hover:bg-slate-800 px-3 py-3 font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};
export default SignUpForm;
