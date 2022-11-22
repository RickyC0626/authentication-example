import axios from "axios";
import Link from "next/link";
import React from "react";
import { CgSpinner } from "react-icons/cg";
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

export default function LoginForm({ setLoggedIn }: {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const sendRequest = () => {
    axios.post("http://localhost:8000/api/auth/login", { username, password })
      .then((res) => {
        const { username, accessToken } = res.data;
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("access_token", accessToken);
        setLoggedIn(true);
      })
      .catch(() => alert("Incorrect login credentials"))
      .finally(() => setLoading(false));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
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
          {isLoading ?
            <CgSpinner className="animate-spin w-6 h-6 rounded-full text-white m-auto sm:w-7 sm:h-7" />
            :
            <span>Login</span>
          }
        </StyledFormButton>
        <Link href="/signup">
          <StyledFormButton>Sign Up</StyledFormButton>
        </Link>
      </StyledFormButtonSection>
    </StyledForm>
  );
}
