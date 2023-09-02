import Header from "@components/CommonDashboard/Header";
import React, { ReactNode } from "react";
import styled from "styled-components";

// styled-components----
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.gray[500]};
`;
const HeaderContainer = styled.div``;
const PageContainer = styled.div`
  height: calc(100vh - 5.1875rem);
`;
const LineBreak = styled.div`
  height: 2px;
  background: ${(props) => props.theme.colors.gray[500]};
`;
// ---------------------

function Layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <LineBreak />
      <PageContainer>{children}</PageContainer>
    </Container>
  );
}

export default Layout;
