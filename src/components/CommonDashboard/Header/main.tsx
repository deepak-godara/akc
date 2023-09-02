import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import Logo from "@images/logo2.svg";
import {
  FaMagnifyingGlass,
  FaBars,
  FaBell,
  FaRegBell,
  FaAngleDown,
} from "react-icons/fa6";
import { GB } from "country-flag-icons/react/3x2";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { selectUser } from "@app/redux/publicSelectors/userSelector";
import { useDispatch, useSelector } from "react-redux";
import SamplePersonImage from "@images/demo-teacher-image.png";
import Cookies from "js-cookie";
import {
  UserRole,
  setUserInfoActionCreator,
} from "@app/redux/slices/userSlice";
import { dashboardUri } from "@app/CONSTANTS";
// TO-DO connect the language indicator button to redux

const HeaderContainer = styled.div`
  padding: 0rem 3rem;
  height: 5.0625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  z-index: 2000;
`;
const LogoImage = styled.img`
  height: 2.3rem;
`;
const SearchInput = styled.input`
  flex-grow: 1;
  border-radius: 0 12px 12px 0;
  background: ${(props) => props.theme.colors.gray[500]};
  font-family: ${(props) => props.theme.font.font};
  padding-right: 1rem;
  color: ${(props) => props.theme.colors.gray[800]};
  &::placeholder {
    font-family: ${(props) => props.theme.font.font};
    color: ${(props) => props.theme.colors.gray[600]};
  }
`;

const LogoAndSearchInputContainer = styled.div`
  display: flex;
  width: 47.8rem;
`;
const IconContainer = styled.div`
  margin-left: 3.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
  border-radius: 12px 0 0 12px;
  background: ${(props) => props.theme.colors.gray[500]};
`;

const TopBarInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const FlagIconContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 1rem;
  width: 1rem;
  text-align: center;
  position: relative;
`;
const LanguageIndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;
const LanguageIndicatorText = styled.span`
  color: ${(props) => props.theme.colors.gray[800]};
  font-weight: 700;
  font-family: ${(props) => props.theme.font.font};
  display: inline-block;
  margin-left: 0.5rem;
  font-size: 0.8rem;
`;
const SignInLink = styled(Link)`
  text-decoration: none;
  background: ${(props) => props.theme.colors.blue[700]};
  height: 2.5rem;
  border-radius: 12px;
  color: #ffffff;
  width: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.font.font};
  margin-left: 3rem;
`;
const MenuButton = styled.button`
  background: ${(props) => props.theme.colors.gray[500]};
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: ${(props) => props.theme.colors.gray[800]};
  width: 8rem;
  font-family: ${(props) => props.theme.font.font};
  margin-left: 1.5625rem;
`;
const BarsContainer = styled.span`
  display: inline-block;
  margin-left: 0.6rem;
`;
const NotificationsContainer = styled.div`
  margin-left: 3.125rem;
  display: flex;
  align-items: center;
`;
const NotificationIcon = styled(FaRegBell)`
  height: 26px;
  width: 23px;
  color: ${(props) => props.theme.colors.gray[800]};
`;
const ProfilePicContainer = styled.div`
  height: 2.625rem;
  width: 2.625rem;
  border-radius: 1.3125rem;
  overflow: hidden;
  margin-left: 3.125rem;
`;
const ProfilePic = styled.img`
  height: 100%;
  width: 100%;
`;
const NameContainer = styled.div`
  font-size: 1.125rem;
  line-height: 1.5625rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.gray[800]};
  margin-left: 1rem;
`;
const DropDownButtonContainer = styled.div`
  position: relative;
`;
const DropDownButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1rem;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;
const DropDownIcon = styled(FaAngleDown)`
  width: 1.125rem;
`;
const DropDownMenuContainer = styled.div`
  position: absolute;
  bottom: -4.5rem;
  right: 0;
  border-radius: 5px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 0px 25px #00000040;
  z-index: 1001;
`;
interface DashBoardLinkPropsType {
  $active: boolean;
}
const DashBoardLink = styled.div<DashBoardLinkPropsType>`
  background: ${(props) =>
    props.$active ? props.theme.colors.gray[600] : "#ffffff"};
  padding: 0.5rem 1rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.gray[400]};
  color: ${(props) =>
    props.$active ? "#ffffff" : props.theme.colors.gray[800]};
`;
const LogOutButton = styled.button`
  padding: 0.5rem 1rem;
  width: 100%;
  color: ${(props) => props.theme.colors.gray[800]};

  background: #ffffff;
`;
function DropDownMenu({
  hide,
}: {
  hide: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  return (
    <DropDownMenuContainer>
      <NavLink to={userInfo.role ? dashboardUri[userInfo.role] : "/error"}>
        {({ isActive }) => (
          <DashBoardLink $active={isActive}>Dashboard</DashBoardLink>
        )}
      </NavLink>
      <LogOutButton
        onClick={() => {
          Cookies.remove("token");
          dispatch(setUserInfoActionCreator(false));
        }}
      >
        Log out
      </LogOutButton>
    </DropDownMenuContainer>
  );
}
function Header() {
  const theme = useTheme();
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const userInfo = useSelector(selectUser);
  return (
    <HeaderContainer>
      <LogoAndSearchInputContainer>
        <Link to="/">
          <LogoImage src={Logo} alt="logo" />
        </Link>
        <IconContainer>
          <FaMagnifyingGlass
            style={{ height: "1rem", color: `${theme.colors.gray[600]}` }}
          />
        </IconContainer>
        <SearchInput placeholder="Zoeken" />
      </LogoAndSearchInputContainer>
      <TopBarInfoContainer>
        <LanguageIndicatorContainer>
          <FlagIconContainer>
            <GB
              style={{
                height: "100%",
                display: "inline-block",
                position: "absolute",
                transform: "translate(-50%,-50%)",
                top: "50%",
                left: "50%",
              }}
            />
          </FlagIconContainer>
          <div>
            <LanguageIndicatorText>EN</LanguageIndicatorText>
          </div>
        </LanguageIndicatorContainer>
        {userInfo.loggedIn ? (
          <>
            <NotificationsContainer>
              <NotificationIcon />
            </NotificationsContainer>
            <ProfilePicContainer>
              <ProfilePic src={userInfo.profileUrl} />
            </ProfilePicContainer>
            <NameContainer>{userInfo.name}</NameContainer>
            <DropDownButtonContainer>
              <DropDownButton
                type="button"
                onClick={() => {
                  setIsDropDownOpen((value) => !value);
                }}
              >
                <DropDownIcon />
              </DropDownButton>
              {isDropDownOpen && <DropDownMenu hide={setIsDropDownOpen} />}
            </DropDownButtonContainer>
          </>
        ) : (
          <SignInLink to="/signin">Sign In</SignInLink>
        )}

        <MenuButton>
          Menu
          <BarsContainer>
            <FaBars />
          </BarsContainer>
        </MenuButton>
      </TopBarInfoContainer>
    </HeaderContainer>
  );
}

export default Header;
