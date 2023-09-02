import { FormEvent, useEffect, useState } from "react";
import CustomHeading from "@lib/microComponents/CustomHeading";
import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
import styled from "styled-components";
import FormSubmitButton from "@components/LogInPages/commonComponents/FormSubmitButton";
import SignInWithGoogleButton from "@components/LogInPages/commonComponents/SignInWithGoogleLink";
import BaseLayout from "@components/LogInPages/BaseLayout";
import FormInput from "@components/LogInPages/commonComponents/FormInput";
import { Link } from "react-router-dom";
import { signupWithPassword } from "@API/services/Auth";
import { ReactToast } from "@lib/toast";
import { getUserProfile } from "@API/services/Data/getUserProfile";
import { mapAPidatatoUserInfo } from "@lib/mapperFunctions/mapAPidatatoUserInfo";
import { useDispatch } from "react-redux";
import { userSlice } from "@app/redux/slices/userSlice";
import { redirectUri } from "../commonComponents/redirectUri";
// import { signUpWithPassword } from "api/services/Auth";

// start of styled-components
const FormContainer = styled.div`
  width: 30.2rem;
  margin: auto;
`;
const SignUpForm = styled.form`
  background: white;
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  font-weight: 600;
`;
const FormLabel = styled.label`
  color: #355f44;
  font-size: 0.9rem;
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
`;
// end of styled-components

function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async function (e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    const signup = await signupWithPassword(name, email, password);
    if (signup) {
      ReactToast("Sign Up Successfull");
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
      ReactToast("SignUp Failed");
    }
    setLoading(false);
  };
  return (
    <BaseLayout>
      <FormContainer>
        <CustomHeading sx={{ marginTop: "1.5rem" }}>
          Create your free account!
        </CustomHeading>
        <SignUpForm onSubmit={onSubmit}>
          <FormLabel htmlFor="nmae">Name</FormLabel>
          <FormInput
            name="name"
            type="name"
            autoComplete="name" // autocomplete="username" is intentional
            id="name"
            value={name}
            placeholder="John Doe"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <FormLabel htmlFor="email" style={{ marginTop: "1.4rem" }}>
            E-mail
          </FormLabel>
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
          />
          <FormLabel htmlFor="password" style={{ marginTop: "1.4rem" }}>
            Password
          </FormLabel>
          <FormInput
            name="new-password"
            type="password"
            autoComplete="new-password"
            id="password"
            value={password}
            style={{ letterSpacing: "0.05rem" }}
            placeholder="••••••••••••••••••••"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <FormSubmitButton loading={loading}>
            Create your account
          </FormSubmitButton>
        </SignUpForm>
        <Divider />
        <SignInWithGoogleButton />
        <SignUpLinkContainer>
          <div>
            Already have an account?{" "}
            <SignUpLink to="/signin">Sign in here!</SignUpLink>
          </div>
        </SignUpLinkContainer>
      </FormContainer>{" "}
    </BaseLayout>
  );
}

export default SignUp;
