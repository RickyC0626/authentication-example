import React from "react";
import {
  StyledForm,
  StyledFormDivider,
  StyledFormFieldSection,
  StyledFormFieldInput,
  StyledFormFieldLabel,
  StyledFormSubmitButton,
  StyledFormTitle
} from "./Form";

export default function RegistrationForm() {
  return (
    <StyledForm>
      <StyledFormTitle>Sign Up</StyledFormTitle>
      <StyledFormDivider />
      <StyledFormFieldSection>
        <StyledFormFieldLabel htmlFor="signup_email_field">Email</StyledFormFieldLabel>
        <StyledFormFieldInput
          type="email"
          id="signup_email_field"
          name="signup_email_field"
          placeholder="john.doe@email.com"
          required
        />
      </StyledFormFieldSection>
      <StyledFormFieldSection>
        <StyledFormFieldLabel htmlFor="signup_password_field">
          Password <span className="text-sm font-normal">(minimum 8 characters)</span>
        </StyledFormFieldLabel>
        <StyledFormFieldInput
          type="password"
          id="signup_password_field"
          name="signup_password_field"
          placeholder="********"
          required
          minLength={8}
          maxLength={40}
          title="8-40 characters"
        />
      </StyledFormFieldSection>
      <StyledFormFieldSection>
        <StyledFormFieldLabel htmlFor="signup_confirm_password_field">Confirm Password</StyledFormFieldLabel>
        <StyledFormFieldInput
          type="password"
          id="signup_confirm_password_field"
          name="signup_confirm_password_field"
          placeholder="********"
          required
          minLength={8}
          maxLength={40}
          title="8-40 characters"
        />
      </StyledFormFieldSection>
      <StyledFormSubmitButton
        type="submit"
        value="Create Account"
      />
    </StyledForm>
  );
}
