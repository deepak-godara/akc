import React from "react";
import styled from "styled-components";
import Vector1 from "@images/vector1.svg";
import { Link } from "react-router-dom";
import { selectUser } from "@app/redux/publicSelectors/userSelector";
import { useSelector } from "react-redux";
// styled-components----
const GreetingsContainer = styled.div`
  background: transparent linear-gradient(90deg, #4883c4 0%, #1b67bc 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 20px;
  padding: 1.71875rem 3.125rem;
  display: flex;
  position: relative;
`;
const HeadingsContainer = styled.div``;

const Heading = styled.div`
  font-size: 2rem;
  line-height: 2.8125rem;
  font-weight: 700;
  color: #ffffff;
`;
const LinksContainer = styled.div`
  margin-top: 0.6875rem;
`;
const Vector = styled.img`
  height: 9.375rem;
  position: absolute;
  bottom: 0;
  right: 8.875rem;
`;

const SignUpLink = styled(Link)`
  padding: 0.5rem 1.875rem;
  background: ${(props) => props.theme.colors.green[600]};
  font-size: 18px;
  line-height: 25px;
  border-radius: 12px;
  font-weight: 700;
  color: #ffffff;
`;
const SignInLink = styled(Link)`
  padding: 0.5rem 1.875rem;
  background: #ffffff26;
  font-size: 18px;
  line-height: 25px;
  border-radius: 12px;
  color: #ffffff;
  margin-left: 1.25rem;
`;
//----------------------

function GreetingsComponent() {
  const userInfo = useSelector(selectUser);
  return !userInfo.loggedIn ? (
    <GreetingsContainer>
      <HeadingsContainer>
        <Heading>Create a student account</Heading>
        <LinksContainer>
          <SignUpLink to="/signup">Create an account</SignUpLink>
          <SignInLink to="/signin">Sign in</SignInLink>
        </LinksContainer>
      </HeadingsContainer>
      <Vector src={Vector1} />
    </GreetingsContainer>
  ) : (
    <></>
  );
}

export default GreetingsComponent;
