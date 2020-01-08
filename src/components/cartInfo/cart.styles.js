import styled from "styled-components";
import { device } from "../../styles/globalSizes";

export const CartContainer = styled.div`
  display: flex;
  width: 50%;
  align-self: ${({ right }) => (right ? "flex-end" : "none")};
  justify-content: ${({ right }) => (right ? "flex-start" : "flex-end")};

  margin-bottom: 5rem;
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
  z-index: 10;

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
`;

export const PlatformTag = styled.span`
  grid-row: 1 / 2;
  grid-column: ${({ right }) => (right ? "2 / -1" : "1 / 2")};
  justify-self: ${({ right }) => (right ? "end" : "start")};

  font-size: 1.2rem;
`;

export const InfoTag = styled.p`
  grid-column: 1 / -1;
  font-size: 1.6rem;

  justify-self: ${({ right }) => (right ? "start" : "end")};
`;

export const LinkTag = styled.a`
  grid-column: 1 / -1;
  font-size: 1.4rem;
  justify-self: ${({ right }) => (right ? "start" : "end")};
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
  z-index: 10;

  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colorBaseWhite};
  }
`;
