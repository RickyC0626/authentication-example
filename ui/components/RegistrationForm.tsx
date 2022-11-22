import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { CgSpinner } from "react-icons/cg";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  StyledForm,
  StyledFormDivider,
  StyledFormFieldSection,
  StyledFormFieldInput,
  StyledFormFieldLabel,
  StyledFormTitle,
  StyledFormFieldInputIcon,
  StyledFormButton
} from "./Form";
import {
  username as usernameRegex,
  password as passwordRegex,
  email as emailRegex
} from "../utils/regex";


const error = {
  invalidUsername: "Must be 3-30 characters (A-Z, a-z, 0-9, _)",
  invalidEmail: "Invalid email",
  invalidPassword: "Must be 8 or more characters and have at least 1 of each (A-Z, a-z, 0-9)",
  passwordsNoMatch: "Passwords must match"
};

export default function RegistrationForm() {
  const router = useRouter();
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");
  const [validUsername, setValidUsername] = React.useState(true);
  const [validEmail, setValidEmail] = React.useState(true);
  const [validPassword, setValidPassword] = React.useState(true);
  const [passwordsMatch, setPasswordsMatch] = React.useState(true);
  const [isLoading, setLoading] = React.useState(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uname = e.target.value;

    setUsername(uname);
    setValidUsername(usernameRegex.test(uname));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const em = e.target.value;

    setEmail(em);
    setValidEmail(emailRegex.test(em));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pass = e.target.value;

    setPassword(pass);
    setValidPassword(passwordRegex.test(pass));
  };

  const sendRequest = () => {
    axios.post("http://localhost:8000/api/auth/signup", { username, email, password })
      .catch((err) => alert("Username or email already in use!"))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
          router.push("/");
        }, 750);
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!validUsername || !validEmail || !validPassword || !passwordsMatch) return;
    setLoading(true);
    sendRequest();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormTitle>Sign Up</StyledFormTitle>
      <StyledFormDivider />
      <StyledFormFieldSection>
        <StyledFormFieldLabel htmlFor="signup_username_field">Username</StyledFormFieldLabel>
        <div className="flex">
          <StyledFormFieldInputIcon Icon={IoMdPerson} />
          <StyledFormFieldInput
            type="text"
            id="signup_username_field"
            name="signup_username_field"
            placeholder="JohnDoe22"
            required
            value={username}
            onChange={handleUsernameChange}
            $isValid={validUsername}
          />
        </div>
        {!validUsername &&
          <span className="text-xs text-red-300 font-medium sm:text-sm">
            {error.invalidUsername}
          </span>
        }
      </StyledFormFieldSection>
      <StyledFormFieldSection>
        <StyledFormFieldLabel htmlFor="signup_email_field">Email</StyledFormFieldLabel>
        <div className="flex">
          <StyledFormFieldInputIcon Icon={MdOutlineEmail} />
          <StyledFormFieldInput
            type="text"
            id="signup_email_field"
            name="signup_email_field"
            placeholder="john.doe@email.com"
            required
            value={email}
            onChange={handleEmailChange}
            $isValid={validEmail}
          />
        </div>
        {!validEmail &&
          <span className="text-xs text-red-300 font-medium sm:text-sm">
            {error.invalidEmail}
          </span>
        }
      </StyledFormFieldSection>
      <StyledFormFieldSection>
        <StyledFormFieldLabel htmlFor="signup_password_field">
          Password <span className="text-sm font-normal sm:text-base">(minimum 8 characters)</span>
        </StyledFormFieldLabel>
        <div className="flex">
          <StyledFormFieldInputIcon Icon={RiLockPasswordLine} />
          <StyledFormFieldInput
            type="password"
            id="signup_password_field"
            name="signup_password_field"
            placeholder="********"
            required
            minLength={8}
            maxLength={40}
            title="8-40 characters"
            value={password}
            onChange={handlePasswordChange}
            $isValid={validPassword}
          />
        </div>
        {!validPassword &&
          <span className="text-xs text-red-300 font-medium sm:text-sm">
            {error.invalidPassword}
          </span>
        }
      </StyledFormFieldSection>
      <StyledFormFieldSection>
        <StyledFormFieldLabel htmlFor="signup_confirm_password_field">Confirm Password</StyledFormFieldLabel>
        <div className="flex">
          <StyledFormFieldInputIcon Icon={RiLockPasswordLine} />
          <StyledFormFieldInput
            type="password"
            id="signup_confirm_password_field"
            name="signup_confirm_password_field"
            placeholder="********"
            required
            minLength={8}
            maxLength={40}
            title="8-40 characters"
            value={confirmPass}
            onChange={(e) => {
              const confirm = e.target.value;

              setConfirmPass(confirm);
              setPasswordsMatch(password === confirm);
            }}
            $isValid={passwordsMatch}
          />
        </div>
        {!passwordsMatch &&
          <span className="text-xs text-red-300 font-medium sm:text-sm">
            {error.passwordsNoMatch}
          </span>
        }
      </StyledFormFieldSection>
      <StyledFormButton type="submit">
        {isLoading ?
          <CgSpinner className="animate-spin w-6 h-6 rounded-full text-white m-auto sm:w-7 sm:h-7" />
          :
          <span>Create Account</span>
        }
      </StyledFormButton>
    </StyledForm>
  );
}
