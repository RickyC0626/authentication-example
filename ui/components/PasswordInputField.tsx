import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { StyledFormFieldInput } from "./Form";

export default function PasswordInputField() {
  return (
    <div className="flex">
      <RiLockPasswordLine className="absolute place-self-center w-6 h-6 translate-x-3 text-white/80" />
      <StyledFormFieldInput
        type="password"
        placeholder="********"
        required
        minLength={8}
        maxLength={40}
        title="8-40 characters"
      />
    </div>
  );
}
