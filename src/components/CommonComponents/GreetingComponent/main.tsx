import React from "react";
import styled from "styled-components";
import Vector1 from "@images/vector1.svg";
import getGreetings from "./getGreetings";
import { selectUser } from "@app/redux/publicSelectors/userSelector";
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
const GreetingText = styled.h3`
  color: #ffffff;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.8125rem;
`;
const SubGreeting = styled.h1`
  line-height: 1.4375rem;
  font-size: 1rem;
  color: #ffffff;
`;
const Vector = styled.img`
  height: 9.375rem;
  position: absolute;
  bottom: 0;
  right: 8.875rem;
`;
//----------------------

function GreetingsComponent({
  username,
  message,
}: {
  username: string;
  message: string;
}) {
  return (
    <GreetingsContainer>
      <HeadingsContainer>
        <GreetingText>
          {getGreetings()} {username}!
        </GreetingText>
        <SubGreeting>{message}</SubGreeting>
      </HeadingsContainer>
      <Vector src={Vector1} />
    </GreetingsContainer>
  );
}

export default GreetingsComponent;
