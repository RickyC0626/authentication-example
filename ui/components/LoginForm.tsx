import React from "react";
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
