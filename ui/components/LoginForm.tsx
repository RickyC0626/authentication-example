import React from "react";

export default function LoginForm() {
  return (
    <form className="
      w-72 h-fit p-6 rounded-md bg-white/25 backdrop-blur-sm text-white
      grid grid-cols-1 gap-6 sm:w-80
    ">
      <div>
        <label
          htmlFor="email_field"
          className="font-semibold"
        >
          Email
        </label>
        <br />
        <input
          type="email"
          id="email_field"
          required
          className="
            w-full h-10 p-2 bg-transparent rounded-md
            border-2 border-neutral-200
            focus-visible:outline-none valid:focus-visible:border-green-300
            invalid:focus-visible:border-red-300
          "
        />
      </div>
      <div>
        <label
          htmlFor="password_field"
          className="font-semibold"
        >
          Password <span className="text-sm font-normal">(min 8 characters)</span>
        </label>
        <br />
        <input
          type="password"
          id="password_field"
          pattern=".{8,}"
          title="8 characters minimum"
          required
          className="
            w-full h-10 p-2 bg-transparent rounded-md
            border-2 border-neutral-200
            focus-visible:outline-none valid:focus-visible:border-green-300
            invalid:focus-visible:border-red-300
          "
        />
      </div>
      <div className="flex gap-6 m-auto">
        <input
          type="submit"
          value="Login"
          className="
            px-4 py-2 rounded-md bg-white/20 font-semibold cursor-pointer
            hover:outline outline-2 outline-white
          "
        />
        <button
          className="
            px-4 py-2 rounded-md bg-white/20 font-semibold cursor-pointer
            hover:outline outline-2 outline-white
          "
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
