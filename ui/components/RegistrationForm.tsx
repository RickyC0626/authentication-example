import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import {
  StyledForm,
  StyledFormDivider,
  StyledFormFieldSection,
  StyledFormFieldInput,
  StyledFormFieldLabel,
  StyledFormSubmitButton,
  StyledFormTitle
} from "./Form";
import PasswordInputField from "./PasswordInputField";

export default function RegistrationForm() {
  return (
    <StyledForm>
      <StyledFormTitle>Sign Up</StyledFormTitle>
      <StyledFormDivider />
      <StyledFormFieldSection>
        <StyledFormFieldLabel htmlFor="signup_email_field">Email</StyledFormFieldLabel>
        <div className="flex">
          <MdOutlineEmail className="absolute place-self-center w-6 h-6 translate-x-3 text-white/80" />
          <StyledFormFieldInput
            type="email"
            id="signup_email_field"
            name="signup_email_field"
            placeholder="john.doe@email.com"
            required
          />
        </div>
      </StyledFormFieldSection>
      <StyledFormFieldSection>
        <StyledFormFieldLabel htmlFor="signup_password_field">
          Password <span className="text-sm font-normal">(minimum 8 characters)</span>
        </StyledFormFieldLabel>
        <PasswordInputField />
      </StyledFormFieldSection>
      <StyledFormFieldSection>
        <StyledFormFieldLabel htmlFor="signup_confirm_password_field">Confirm Password</StyledFormFieldLabel>
        <PasswordInputField />
      </StyledFormFieldSection>
      <StyledFormSubmitButton
        type="submit"
        value="Create Account"
      />
    </StyledForm>
  );
}
