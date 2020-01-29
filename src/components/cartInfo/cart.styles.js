import styled from "styled-components";
import { device } from "../../styles/globalSizes";

export const CartContainer = styled.div`
  display: flex;
  width: 50%;
  align-self: ${({ right }) => (right ? "flex-end" : "none")};
  justify-content: ${({ right }) => (right ? "flex-start" : "flex-end")};

  margin-bottom: 5rem;
  &:first-child {
    margin-top: 3rem;
  }
`;

export const CartContainerContent = styled.div`
  padding: 1rem 1rem 1rem 2rem;
  margin-left: ${({ right }) => (right ? "3rem" : "0rem")};
  margin-right: ${({ right }) => (right ? "0rem" : "3rem")};
  width: 60%;
  background-color: ${({ theme }) => theme.colorBaseWhite};
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  position: relative;

  @media ${device.laptop} {
    width: 80%;
  }

  &::after {
    content: "";
    width: 1rem;
    height: 1rem;

    position: absolute;
    left: ${({ right }) => (right ? "-.001" : "auto")};
    top: 50%;
    right: ${({ right }) => (right ? "auto" : "-1rem")};

    box-shadow: ${({ right }) =>
      right
        ? "-1px 1px 1px rgba(0, 0, 0, .2); "
        : "1px -1px 1px rgba(0, 0, 0, .2); "};
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: ${({ theme }) => theme.colorBaseWhite};
  }
`;

export const DateTag = styled.time`
  grid-column: ${({ right }) => (right ? "1/2" : "2 / -1")};
  color: ${({ theme }) => theme.greyDateColor};
  font-size: 1.2rem;
  justify-self: ${({ right }) => (right ? "start" : "end")};
  text-align: ${({ right }) => (right ? "left" : "right")};
`;

export const PlatformTag = styled.span`
  grid-row: 1 / 2;
  grid-column: ${({ right }) => (right ? "2 / -1" : "1 / 2")};
  justify-self: ${({ right }) => (right ? "end" : "start")};
  align-self: center;

  font-size: 1.2rem;
`;

export const InfoTag = styled.p`
  border-top: 0.1rem solid rgba(0, 0, 0, 0.3);

  padding: 1rem 0 0.5rem;
  grid-column: 1 / -1;
  font-size: 1.6rem;
  text-align: ${({ right }) => (right ? "left" : "right")};

  justify-self: ${({ right }) => (right ? "start" : "end")};
`;

export const LinkTag = styled.a`
  grid-column: 1 / -1;
  font-size: 1.4rem;
  padding: 0.3rem;
  justify-self: ${({ right }) => (right ? "start" : "end")};
  background-color: ${({ bgColor }) => (bgColor ? "#950740" : "transparent")};
  color: ${({ bgColor }) => (bgColor ? "#fff" : "transparent")};
  border-radius: 0.2rem;
  cursor: pointer;

  @media ${device.mobileL} {
    justify-self: center;
    width: 100%;
    text-align: center;
  }
`;

export const Circle = styled.span`
  position: absolute;
  left: ${({ right }) => (right ? "-2.999rem" : "auto")};
  right: ${({ right }) => (right ? "auto" : "-4.999rem")};
  top: 50%;
  transform: translate(-50%, -50%);

  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.baseRedColor};

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;

  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colorBaseWhite};
  }
`;
