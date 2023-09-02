// import urlFunctionsObject from "api/Uri";
import { urlFunctions } from "@API/functions/createUrl";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";

const SignInWithGoogleButtonStyled = styled.a`
  border: 2px solid #eaefec;
  background: white;
  border-radius: 1rem;
  height: 3.7rem;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SignInWithGoogleButton() {
  return (
    <SignInWithGoogleButtonStyled href={urlFunctions.authenticateWithGoogle()}>
      <FcGoogle style={{ height: "2rem", width: "2rem" }} />
    </SignInWithGoogleButtonStyled>
  );
}

export default SignInWithGoogleButton;
