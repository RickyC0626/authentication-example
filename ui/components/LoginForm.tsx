import axios from "axios";
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
  StyledFormTitle,
  StyledFormFieldInputIcon
} from "./Form";

export default function LoginForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const sendRequest = () => {
    axios.post("http://localhost:8000/api/auth/login", { username, password })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => alert("Incorrect login credentials"));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendRequest();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormTitle>Login</StyledFormTitle>
      <StyledFormDivider />
      <StyledFormFieldSection>
        <StyledFormFieldLabel htmlFor="login_username_field">Username</StyledFormFieldLabel>
        <div className="flex">
          <StyledFormFieldInputIcon Icon={IoMdPerson} />
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
          <StyledFormFieldInputIcon Icon={RiLockPasswordLine} />
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
        <StyledFormButton type="submit">
          <span>Login</span>
        </StyledFormButton>
        <Link href="/signup">
          <StyledFormButton>Sign Up</StyledFormButton>
        </Link>
      </StyledFormButtonSection>
    </StyledForm>
  );
}
