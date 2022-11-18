import React from "react";

export default function RegistrationForm() {
  return (
    <form className="
      w-72 h-fit p-6 rounded-md bg-white/25 backdrop-blur-sm text-white
      grid grid-cols-1 gap-5 sm:w-80
    ">
      <h2 className="text-center text-2xl font-semibold sm:text-3xl">
        Sign Up
      </h2>
      <div className="h-[1px] w-5/6 bg-white/25 m-auto"></div>
      <div>
        <label
          htmlFor="registration_email_field"
          className="font-semibold"
        >
          Email
        </label>
        <br />
        <input
          type="email"
          id="registration_email_field"
          name="registration_email_field"
          required
          placeholder="john.doe@email.com"
          className="
            w-full h-10 p-2 bg-transparent rounded-md
            border-2 border-neutral-200
            focus-visible:outline-none valid:focus-visible:border-green-300
            invalid:focus-visible:border-red-300 placeholder:text-white/50
          "
        />
      </div>
      <div>
        <label
          htmlFor="registration_password_field"
          className="font-semibold"
        >
          Password <span className="text-sm font-normal">(min 8 characters)</span>
        </label>
        <br />
        <input
          type="password"
          id="registration_password_field"
          name="registration_password_field"
          minLength={8}
          maxLength={40}
          title="8-40 characters"
          required
          placeholder="********"
          className="
            w-full h-10 p-2 bg-transparent rounded-md
            border-2 border-neutral-200
            focus-visible:outline-none valid:focus-visible:border-green-300
            invalid:focus-visible:border-red-300 placeholder:text-white/50
          "
        />
      </div>
      <div>
        <label
          htmlFor="registration_confirm_password_field"
          className="font-semibold"
        >
          Confirm Password
        </label>
        <br />
        <input
          type="password"
          id="registration_confirm_password_field"
          name="registration_confirm_password_field"
          minLength={8}
          maxLength={40}
          title="8-40 characters"
          required
          placeholder="********"
          className="
            w-full h-10 p-2 bg-transparent rounded-md
            border-2 border-neutral-200
            focus-visible:outline-none valid:focus-visible:border-green-300
            invalid:focus-visible:border-red-300 placeholder:text-white/50
          "
        />
      </div>
      <input
        type="submit"
        value="Create Account"
        className="
          px-4 py-2 rounded-md bg-white/20 font-semibold cursor-pointer
          hover:outline outline-2 outline-white
        "
      />
    </form>
  );
}
