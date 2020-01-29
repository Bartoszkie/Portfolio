import React, { useState, useRef, useEffect } from "react";
import { useOnClckOutside } from "../../hooks/useOnClickOutside";

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
  MenuLink,
  ContactDetails, 
  ContactDetailsMobile
} from "./navbar.styles";
import Hamburger from "../hamburger/hamburger.component";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [change, setChange] = useState(false);
  const node = useRef();
  useOnClckOutside(node, () => setIsOpen(false));

  useEffect(() => {
    updatePredicate();
    window.addEventListener("resize", updatePredicate);
  }, []);

  useEffect(() => {
    return () => window.removeEventListener("resize", updatePredicate);
  }, []);

  const updatePredicate = () => {
    if (window.innerWidth > 809) {
      setIsOpen(false);
      setChange(true);
    } else if (window.innerWidth < 809) {
      setChange(false);
    }
  };
  console.log(isOpen);

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
          <ContactDetails>
            <p>Contact</p>
            <span>
              <i class="fas fa-envelope-open-text"></i> bartek.slysz@gmail.com
            </span>
            <span>
              <i class="fas fa-phone"></i> +48 662 920 264
            </span>
            <span>
              <i class="fab fa-github"></i>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements">
                My Github
              </a>
            </span>
          </ContactDetails>
        </MenuListFooter>
      </NavbarDiv>

      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <BackgroundForMobileNav change={change} isOpen={isOpen} />
      <BackgroundNav change={change} isOpen={isOpen}>
        <BackgroundForMobileList change={change} isOpen={isOpen}>
          <MobileListItem isOpen={isOpen}>
            <AnimatedHref
              onClick={() => setIsOpen(!isOpen)}
              isOpen={isOpen}
              to="/"
            >
              About Me
            </AnimatedHref>
          </MobileListItem>
          <MobileListItem isOpen={isOpen}>
            <AnimatedHref
              onClick={() => setIsOpen(!isOpen)}
              isOpen={isOpen}
              to="/realizations"
            >
              Realizations
            </AnimatedHref>
          </MobileListItem>
          <MobileListItem isOpen={isOpen}>
            <AnimatedHref
              onClick={() => setIsOpen(!isOpen)}
              isOpen={isOpen}
              to="/timeline"
            >
              Timeline
            </AnimatedHref>
          </MobileListItem>
          <MobileListItem isOpen={isOpen}>
            <ContactDetailsMobile>
              <p>Contact</p>
              <span>
                <i class="fas fa-envelope-open-text"></i> bartek.slysz@gmail.com
              </span>
              <span>
                <i class="fas fa-phone"></i> +48 662 920 264
              </span>
              <span>
                <i class="fab fa-github"></i>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements">
                  My Github
                </a>
              </span>
            </ContactDetailsMobile>
          </MobileListItem>
        </BackgroundForMobileList>
      </BackgroundNav>
    </NavbarContainer>
  );
};

export default Navbar;
