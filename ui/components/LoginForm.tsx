import React from "react";
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
        <StyledFormFieldInput
          type="email"
          id="login_email_field"
          name="login_email_field"
          placeholder="john.doe@email.com"
          required
        />
      </StyledFormFieldSection>
      <StyledFormFieldSection>
        <StyledFormFieldLabel htmlFor="login_password_field">Password</StyledFormFieldLabel>
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
