import React from "react";
import Header from "@components/CommonDashboard/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";

// styled-components----
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background: ${(props) => props.theme.colors.gray[500]};
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray[600]};
  margin-bottom: 1rem;
`;
const HomeLink = styled(Link)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.blue[700]};
  &:hover {
    color: ${(props) => props.theme.colors.gray[700]};
  }
`;
// ---------------------

function FOURoFOUR() {
  return (
    <Container>
      <Header />
      <InnerContainer>
        <ContentContainer>
          <Heading>Guess What! You found the end of this website.</Heading>
          <HomeLink to="/">go to home</HomeLink>
        </ContentContainer>
      </InnerContainer>
    </Container>
  );
}

export default FOURoFOUR;
