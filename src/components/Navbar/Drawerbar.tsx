import React from "react";
import styled from "styled-components";
import { MEDIA_QUERIES, colorScheme } from "../../helpers/constants";

const Drawerbar = () => {
  const [drawer, setDrawer] = React.useState(false);

  return (
    <DrawerWrapper>
      <IconButton onClick={() => setDrawer(true)}>
        <img src="/images/icon-hamburger.svg" alt="menu-button" />
      </IconButton>
      <DrawerContentWrapper $drawer={drawer}>
        <MobileNavWrapper>
          <IconButton className="close-btn" onClick={() => setDrawer(false)}>
            <img src="/images/icon-close.svg" alt="close-button" />
          </IconButton>
          <NavList>
            <ListItem>home</ListItem>
            <ListItem>shop</ListItem>
            <ListItem>about</ListItem>
            <ListItem>contact</ListItem>
          </NavList>
        </MobileNavWrapper>
      </DrawerContentWrapper>
    </DrawerWrapper>
  );
};

const DrawerWrapper = styled.div`
  display: none;
  position: relative;

  ${MEDIA_QUERIES.MOBILE} {
    display: block;
  }
`;

const DrawerContentWrapper = styled.div<{ $drawer: boolean }>`
  width: 375px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: hidden;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.$drawer ? "0" : "-375px")});
`;

const IconButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  &:hover {
    & img {
      opacity: 0.7;
    }
  }
`;

const MobileNavWrapper = styled.nav`
  background-color: ${colorScheme.white};
  color: black;
  display: flex;
  justify-content: start;
  align-items: left;
  padding: 43px 0 23px 32px;
  width: 100%;

  & .nav-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  & .close-btn {
    margin-right: 60px;
    padding: 0 0 20px 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
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
  color: black;

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
    background-color: black;
  }

  &:hover::before {
    bottom: 10px;
    opacity: 1;
  }
`;

export default Drawerbar;
