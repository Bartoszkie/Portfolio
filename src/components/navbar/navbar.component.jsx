import React, { useState } from "react";
import {
  NavbarContainer,
  NavbarMainContainer,
  MenuList,
  MenuListWrapper,
  Signature,
  PictureOfMe,
  MenuListItem,
  BackgroundForMobileNav,
  BackgroundForMobileList,
  MobileListItem,
  BackgroundNav,
  AnimatedHref,
  NavbarDiv,
  MenuListFooter,
  MenuLink
} from "./navbar.styles";
import Hamburger from "../hamburger/hamburger.component";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer isOpen={isOpen}>
      <NavbarDiv>
        <NavbarMainContainer>
          <PictureOfMe></PictureOfMe>
          <Signature>Bartosz Słysz</Signature>
        </NavbarMainContainer>
        <MenuListWrapper>
          <MenuList>
            <MenuListItem>
              <MenuLink to="/">About Me</MenuLink>
            </MenuListItem>
            <MenuListItem>
              <MenuLink to="/realizations">Realizations</MenuLink>
            </MenuListItem>
            <MenuListItem>
              <MenuLink to="/timeline">Timeline</MenuLink>
            </MenuListItem>
          </MenuList>
        </MenuListWrapper>
        <MenuListFooter>
          <MenuList>
            <MenuListItem>
              <MenuLink to="/">Contact Me</MenuLink>
            </MenuListItem>
          </MenuList>
        </MenuListFooter>
      </NavbarDiv>

      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <BackgroundForMobileNav isOpen={isOpen} />
      <BackgroundNav isOpen={isOpen}>
        <BackgroundForMobileList>
          <MobileListItem>
            <AnimatedHref>O mnie</AnimatedHref>
          </MobileListItem>
          <MobileListItem>
            <AnimatedHref>Timeline</AnimatedHref>
          </MobileListItem>
        </BackgroundForMobileList>
      </BackgroundNav>
    </NavbarContainer>
  );
};

export default Navbar;
