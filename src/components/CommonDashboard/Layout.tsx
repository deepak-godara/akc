import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";
import React from "react";
import { Outlet } from "react-router-dom";
import { DashBoardNavigationArrayItemType } from "./Types";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div``;
const SideBarAndBodyContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.gray[500]};
  flex-grow: 1;
  height: calc(100vh - 5.0625rem);
`;
const SideBarContainer = styled.div`
  min-width: 20.1875rem;
  margin-top: 2px;
  background: #ffffff;
`;
const BodyContainer = styled.div`
  padding: 3.125rem;
  flex-grow: 1;
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`;
function Layout({
  DashBoardNavigationArray,
}: {
  DashBoardNavigationArray: DashBoardNavigationArrayItemType[];
}) {
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <SideBarAndBodyContainer>
        <SideBarContainer>
          <SideBar DashboardNavigationArray={DashBoardNavigationArray} />
        </SideBarContainer>
        <BodyContainer>
          <Outlet />
        </BodyContainer>
      </SideBarAndBodyContainer>
    </Container>
  );
}

export default Layout;
