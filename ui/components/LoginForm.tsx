import React from "react";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
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
import PasswordInputField from "./PasswordInputField";

export default function LoginForm({ onClickSignUp }: {
  onClickSignUp: React.MouseEventHandler
}) {
  return (
    <StyledForm>
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
          />
        </div>
      </StyledFormFieldSection>
      <StyledFormFieldSection>
        <StyledFormFieldLabel>Password</StyledFormFieldLabel>
        <PasswordInputField />
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
