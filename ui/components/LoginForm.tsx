import React from "react";
import { MdOutlineEmail } from "react-icons/md";
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

export default function LoginForm({ onClickSignUp }: {
  onClickSignUp: React.MouseEventHandler
}) {
  return (
    <StyledForm>
      <StyledFormTitle>Login</StyledFormTitle>
      <StyledFormDivider />
      <StyledFormFieldSection>
        <StyledFormFieldLabel htmlFor="login_email_field">Email</StyledFormFieldLabel>
        <div className="flex">
          <MdOutlineEmail className="absolute place-self-center w-6 h-6 translate-x-3 text-white/80" />
          <StyledFormFieldInput
            type="email"
            id="login_email_field"
            name="login_email_field"
            placeholder="john.doe@email.com"
            required
          />
        </div>
      </StyledFormFieldSection>
      <StyledFormFieldSection>
        <StyledFormFieldLabel htmlFor="login_password_field">Password</StyledFormFieldLabel>
        <div className="flex">
          <RiLockPasswordLine className="absolute place-self-center w-6 h-6 translate-x-3 text-white/80" />
          <StyledFormFieldInput
            type="password"
            id="login_password_field"
            name="login_password_field"
            placeholder="********"
            required
            minLength={8}
            maxLength={40}
            title="8-40 characters"
          />
        </div>
      </StyledFormFieldSection>
      <StyledFormButtonSection>
        <StyledFormSubmitButton
          type="submit"
          value="Login"
        />
        <StyledFormButton onClick={onClickSignUp}>Sign Up</StyledFormButton>
      </StyledFormButtonSection>
    </StyledForm>
  );
}
