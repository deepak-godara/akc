import styled from "styled-components";
import BackgroundImage from "@images/login-page.png";
import name from "@images/logo2.png";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
`;

const SignInPageLeftContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent linear-gradient(180deg, #e6ebf0 0%, #a8bace 100%) 0%
    0% no-repeat padding-box;
`;
const LeftImage = styled.img`
  height: 32.25rem;
`;

const SignInPageRightContainer = styled.div`
  flex-grow: 1;
  padding: 2.3rem;
  width: 50%;
`;
const SignInPageRightInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const TopRightImageContainer = styled.div`
  display: flex;
  justify-content: end;
`;
const TopRightLogoImage = styled.img`
  width: 9.375rem;
  height: 3.25rem;
`;
const BottomRightLinkContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 2.4rem;
`;
const SupportLink = styled(Link)`
  text-decoration: none;
  background: #355f44;
  height: 2.4rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: white;
  padding: 0.8rem 2.6rem;
  border-radius: 12px 12px 0px 12px;
  background: ${(props) => props.theme.colors.gray[600]};
`;
const AdminLoginLink = styled(SupportLink)`
  background: ${(props) => props.theme.colors.gray[500]};
`;
function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <SignInPageLeftContainer>
        <LeftImage src={BackgroundImage} />
      </SignInPageLeftContainer>
      <SignInPageRightContainer>
        <SignInPageRightInnerContainer>
          <TopRightImageContainer>
            <Link to="/">
              <TopRightLogoImage src={name} alt="named-logo" />
            </Link>
          </TopRightImageContainer>

          {children}
          <BottomRightLinkContainer>
            <SupportLink to="/support">Trouble with logging in?</SupportLink>
          </BottomRightLinkContainer>
        </SignInPageRightInnerContainer>
      </SignInPageRightContainer>
    </Container>
  );
}

export default BaseLayout;
