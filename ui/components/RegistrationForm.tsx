import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
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
        <div className="flex">
          <RiLockPasswordLine className="absolute place-self-center w-6 h-6 translate-x-3 text-white/80" />
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
        </div>
      </StyledFormFieldSection>
      <StyledFormFieldSection>
        <StyledFormFieldLabel htmlFor="signup_confirm_password_field">Confirm Password</StyledFormFieldLabel>
        <div className="flex">
          <RiLockPasswordLine className="absolute place-self-center w-6 h-6 translate-x-3 text-white/80" />
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
        </div>
      </StyledFormFieldSection>
      <StyledFormSubmitButton
        type="submit"
        value="Create Account"
      />
    </StyledForm>
  );
}
