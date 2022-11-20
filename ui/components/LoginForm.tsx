import Link from "next/link";
import React from "react";
import { IoMdPerson } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  StyledForm,
  StyledFormButton,
  StyledFormButtonSection,
  StyledFormDivider,
  StyledFormFieldSection,
  StyledFormFieldInput,
  StyledFormFieldLabel,
  StyledFormSubmitButton,
  StyledFormTitle
} from "./Form";

export default function LoginForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormTitle>Login</StyledFormTitle>
      <StyledFormDivider />
      <StyledFormFieldSection>
        <StyledFormFieldLabel htmlFor="login_username_field">Username</StyledFormFieldLabel>
        <div className="flex">
          <IoMdPerson className="absolute place-self-center w-6 h-6 translate-x-3 text-white/80" />
          <StyledFormFieldInput
            type="text"
            id="login_username_field"
            name="login_username_field"
            placeholder="JohnDoe22"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            $isValid={true}
          />
        </div>
      </StyledFormFieldSection>
      <StyledFormFieldSection>
        <StyledFormFieldLabel>Password</StyledFormFieldLabel>
        <div className="flex">
          <RiLockPasswordLine className="absolute place-self-center w-6 h-6 translate-x-3 text-white/80" />
          <StyledFormFieldInput
            type="password"
            placeholder="********"
            required
            minLength={8}
            maxLength={40}
            title="8-40 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            $isValid={true}
          />
        </div>
      </StyledFormFieldSection>
      <StyledFormButtonSection>
        <StyledFormSubmitButton
          type="submit"
          value="Login"
        />
        <Link href="/signup">
          <StyledFormButton>Sign Up</StyledFormButton>
        </Link>
      </StyledFormButtonSection>
    </StyledForm>
  );
}
