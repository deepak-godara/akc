import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import CustomHeading from "@lib/microComponents/CustomHeading";
import { redirect, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
import styled from "styled-components";
import FormSubmitButton from "@components/LogInPages/commonComponents/FormSubmitButton";
import SignInWithGoogleButton from "@components/LogInPages/commonComponents/SignInWithGoogleLink";
import BaseLayout from "@components/LogInPages/BaseLayout";
import FormInput from "@components/LogInPages/commonComponents/FormInput";
import { Link } from "react-router-dom";
import { loginWithPassword } from "@API/services/Auth";
import { getUserProfile } from "@API/services/Data/getUserProfile";
import { userSlice } from "@app/redux/slices/userSlice";
import { redirectUri } from "../commonComponents/redirectUri";
import { useDispatch } from "react-redux";
import { mapAPidatatoUserInfo } from "@lib/mapperFunctions/mapAPidatatoUserInfo";
import { ReactToast } from "@lib/toast";
// import { loginWithPassword } from "api/services/Auth";
// start of styled-components

const FormContainer = styled.div`
  width: 30.2rem;
  margin: auto;
`;
const SignInForm = styled.form`
  background: white;
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  font-weight: 600;
`;
const FormLabel = styled.label`
  color: ${(props) => props.theme.colors.gray[800]};
  font-size: 0.9rem;
  font-family: ${(props) => props.theme.font.font};
`;

const ForgotPasswordLink = styled(Link)`
  font-size: 0.8rem;
  text-decoration: underline;
  margin-top: 1.1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.gray[700]};
  font-family: ${(props) => props.theme.font.font};
`;
const Divider = styled.div`
  margin: 1.6rem 0rem;
  height: 2px;
  background: #eaefec;
`;
const SignUpLinkContainer = styled.div`
  margin: auto;
  margin-top: 2.5rem;
  color: ${(props) => props.theme.colors.gray[800]};

  font-size: 0.82rem;
  font-weight: 700;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SignUpLink = styled(Link)`
  color: #355f44;
  font-weight: 400;
  font-family: ${(props) => props.theme.font.font};
`;

// end of styled-components

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async function (e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    const login = await loginWithPassword(email, password);
    if (login) {
      ReactToast("Login Successfull");
      const userInfo = await getUserProfile();

      if (userInfo.success) {
        const formattedData = mapAPidatatoUserInfo(userInfo.data);
        dispatch(userSlice.actions.setUserInfo(formattedData));
        navigate(redirectUri[userInfo.data.role]);
      } else {
        ReactToast("Error in getting user info");
      }
      setLoading(false);
    } else {
      ReactToast("bad credentials");
    }
    setLoading(false);
  };
  return (
    <BaseLayout>
      <FormContainer>
        <CustomHeading sx={{ marginTop: "1.5rem" }}>Testing</CustomHeading>
        <SignInForm onSubmit={onSubmit}>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <FormInput
            name="email"
            type="email"
            autoComplete="username" // autocomplete="username" is intentional
            id="email"
            value={email}
            placeholder="thom@4yourbrand.io"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            disabled={loading}
          />
          <FormLabel htmlFor="password" style={{ marginTop: "1.4rem" }}>
            Password
          </FormLabel>
          <FormInput
            name="current- password"
            type="password"
            autoComplete="current-password"
            id="password"
            value={password}
            style={{ letterSpacing: "0.05rem" }}
            placeholder="••••••••••••••••••••"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            disabled={loading}
          />
          <ForgotPasswordLink to="/forgot-password">
            Forgot your password?
          </ForgotPasswordLink>
          <FormSubmitButton loading={loading}>Sign in</FormSubmitButton>
        </SignInForm>
        <Divider />
        <SignInWithGoogleButton />
        <SignUpLinkContainer>
          <div>
            New to AKC?{" "}
            <SignUpLink to="/signup">Create a free account!</SignUpLink>
          </div>
        </SignUpLinkContainer>
      </FormContainer>{" "}
    </BaseLayout>
  );
}

export default SignIn;
