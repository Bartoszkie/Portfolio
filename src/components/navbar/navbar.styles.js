import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { device } from "../../styles/globalSizes";

export const NavbarContainer = styled.section`
  grid-column: full-start / center-start;
  height: 100vh;
  background-color: ${({ theme }) => theme.baseRedColor};

  @media ${device.laptopS} {
    grid-column: none;
    position: fixed;
    background-color: transparent;
    left: ${({ isopen }) => (isopen ? "80%" : "100%")};
    right: 0;
    top: 0;
    z-index: 10;
  }
`;

export const BackgroundForMobileNav = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;

  backface-visibility: hidden;
  border-radius: 50%;
  transform: ${({ isopen }) => (isopen ? "scale(120)" : "scale(0)")};
  transition: ${({ change }) =>
    change
      ? "all 0s cubic-bezier(0.86, 0, 0.07, 1);"
      : "all 0.6s cubic-bezier(0.86, 0, 0.07, 1);"};
  height: 3rem;
  width: 3rem;
  background-color: #000;
`;

export const BackgroundNav = styled.nav`
  height: 100vh;
  width: ${({ isopen }) => (isopen ? "100%" : "0")};
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${({ isopen }) => (isopen ? "1" : "0")};
  transition-duration: 1.2s;
  text-align: center;

  z-index: -100;
  @media ${device.laptopS} {
    z-index: 10;
  }
`;

export const BackgroundForMobileList = styled.ul`
  list-style-type: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;

  @media ${device.laptopS} {
    display: unset;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-size: 1.5rem;
    color: #fff;
  }

  & p:first-child {
    font-size: 1.7rem;
    padding-bottom: 0.5rem;
    border-bottom: 0.1rem solid #950740;
    margin-bottom: 1rem;
  }

  & > span {
    & > a {
      text-decoration: none;
      color: #fff;
    }

    & > i {
      margin-right: 0.5rem;
      color: #950740;
    }
    margin: 0.9rem 0;
    text-align: center;
    color: #fff;
    font-size: 1.4rem;
  }
`;

export const ContactDetailsMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 10rem;

  & > p {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-size: 1.5rem;
    color: #fff;
  }

  & p:first-child {
    font-size: 3rem;
    padding-bottom: 0.5rem;
    border-bottom: 0.1rem solid #950740;
    margin-bottom: 1rem;
  }

  & > span {
    & > a {
      text-decoration: none;
      color: #fff;
    }

    & > i {
      margin-right: 0.5rem;
      color: #950740;
    }
    margin: 0.9rem 0;
    text-align: center;
    color: #fff;
    font-size: 1.4rem;
  }
`;

export const MobileListItem = styled.li`
  cursor: pointer;
  transform: ${({ isopen }) =>
    isopen ? "translateX(0)" : "translateX(150vw)"};
  transition-duration: 0.8s;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const AnimatedHref = styled(HashLink)`
  font-size: 3rem;
  font-weight: 300;
  padding: 1rem 2rem;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 230%;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;
    color: ${({ theme }) => theme.baseRedColor};
    transform: translateX(1rem);
  }
`;

export const NavbarDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 16.66666667%;
  background-color: ${({ theme }) => theme.baseRedColor};

  z-index: 200;

  @media ${device.laptopS} {
    visibility: hidden;
    background-color: transparent;
  }

  padding: 5rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarMainContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PictureOfMe = styled.img`
  width: 15rem;
  height: 15rem;
  background-color: #fff;
`;

export const Signature = styled.h5`
  text-align: center;

  font-size: 1.6rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  margin: 1.5rem 0 1rem;
  color: ${({ theme }) => theme.colorBaseWhite};
`;

export const MenuListWrapper = styled.section`
  display: block;
`;

export const MenuListFooter = styled.footer`
  display: block;
`;

export const MenuList = styled.ul`
  list-style-type: none;
`;

export const MenuListItem = styled.li`
  text-align: center;
  margin: 2rem 0;
`;

export const MenuLink = styled(Link)`
  text-align: center;

  color: ${({ theme }) => theme.colorBaseWhite};

  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 1.5rem;
  transition: 0.2s ease-in-out all;

  &::after {
    content: "";
    display: block;
    background-color: #950740;
    width: 0%;
    height: 0.2rem;
    margin-top: 0.2rem;
    transition: 0.2s ease-in-out all;
  }

  &:hover::after {
    width: 100%;
  }
`;
