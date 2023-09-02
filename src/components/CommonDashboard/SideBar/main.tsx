import { useState } from "react";
import {
  FaTableColumns,
  FaGraduationCap,
  FaBasketShopping,
  FaUser,
  FaGear,
} from "react-icons/fa6";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { IconType } from "react-icons";
import { DashBoardNavigationArrayItemType } from "../Types";

// styled-components-----
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.375rem 1.25rem;
`;
interface LinkProps {
  $isActive: boolean;
}
const DashboardLink = styled.div<LinkProps>`
  padding: 1rem 1.375rem;
  display: block;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.125rem;
  text-decoration: none;
  color: ${(props) =>
    props.$isActive ? "#ffffff" : props.theme.colors.gray[800]};
  background: ${(props) =>
    props.$isActive ? props.theme.colors.blue[700] : "#ffffff"};
`;

const ListItem = styled.li``;
const LinkText = styled.span`
  display: inline-block;
  margin-left: 1.5rem;
  font-family: ${(props) => props.theme.font.font};
`;
// ----------------------
function SideBar({
  DashboardNavigationArray,
}: {
  DashboardNavigationArray: DashBoardNavigationArrayItemType[];
}) {
  const [active, setActive] = useState<number>(0);
  return (
    <Container>
      <ul>
        {DashboardNavigationArray.map((e) => {
          return (
            <ListItem
              key={e.id}
              style={{ marginTop: `${e.id === 0 ? "0" : "1.1rem"}` }}
              onClick={() => {
                setActive(e.id);
              }}
            >
              <NavLink to={e.link}>
                {({ isActive }) => {
                  return (
                    <DashboardLink $isActive={isActive} id={e.id.toString()}>
                      <e.Icon
                        style={{ height: "1.125rem", width: "1.125rem" }}
                      />
                      <LinkText>{e.name}</LinkText>
                    </DashboardLink>
                  );
                }}
              </NavLink>
            </ListItem>
          );
        })}
      </ul>
    </Container>
  );
}

export default SideBar;
