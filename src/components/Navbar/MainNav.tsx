import styled from "styled-components";
import { MEDIA_QUERIES, colorScheme } from "../../helpers/constants";
import Drawerbar from "./Drawerbar";

const MainNav = () => {
  return (
    <NavWrapper>
      <Drawerbar />
      <img src="/images/logo.svg" alt="logo" className="logo" />
      <NavList>
        <ListItem>home</ListItem>
        <ListItem>shop</ListItem>
        <ListItem>about</ListItem>
        <ListItem>contact</ListItem>
      </NavList>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background-color: transparent;
  color: ${colorScheme.white};
  display: flex;
  justify-content: start;
  align-items: left;
  padding: 43px 0 0 64px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 999;

  & .nav-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  & .logo {
    width: 61px;
    height: 13px;
    margin-right: 56px;
    /* padding: 0 0 20px 0; */
  }

  & .menu-btn {
    display: none;
    cursor: pointer;
  }

  ${MEDIA_QUERIES.MOBILE} {
    & {
      padding: 43px 0 0 32px;
    }
    & .logo {
      width: 45px;
      height: 10px;
      margin-left: calc(100% / 3);
    }
  }
  ${MEDIA_QUERIES.TABLET} {
    & {
      padding: 43px 0 0 32px;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      display: none;
    }
  }
`;

const ListItem = styled.li`
  list-style-type: none;
  letter-spacing: -0.67px;
  font-size: 16;
  font-weight: 500;
  margin-right: 31px;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  padding: 0 0 20px 0;
  display: inline-block;
  position: relative;

  &:hover {
    opacity: 1;
  }

  &::before {
    width: 100%;
    bottom: 5px;
    opacity: 0;
    transition: 300ms;
    height: 3px;
    content: "";
    position: absolute;
    background-color: #fff;
  }

  &:hover::before {
    bottom: 10px;
    opacity: 1;
  }
`;

export default MainNav;
