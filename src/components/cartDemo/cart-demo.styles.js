import styled from "styled-components";
import { device } from "../../styles/globalSizes";

export const CartDemoContainer = styled.div`
  width: 100%;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);

  &:not(:first-child) {
    margin-top: 4rem;
  }

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr min-content;

  @media ${device.mobileXL} {
    grid-template-rows: 1fr min-content min-content;
  }
`;

export const CartDemoImg = styled.img`
  width: 100%;
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  @media ${device.mobileXL} {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
`;

export const CartDemoDescr = styled.p`
  text-align: justify;

  font-size: 1.6rem;
  color: #333;
  line-height: 2.2rem;

  &:not(:first-child) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

export const CartDemoDetails = styled.div`
  grid-column: 2 / -1;
  grid-row: 1 / 2;

  @media ${device.mobileXL} {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartDemoDetailsName = styled.h4`
  font-size: 2.2rem;
  letter-spacing: 0.4rem;
  margin: 1rem 0.5rem;

  &::after {
    margin-top: 0.7rem;
    content: "";
    height: 0.1rem;
    width: inherit;
    background-color: black;
    display: block;
  }
`;

export const TechNames = styled.h5`
  display: inline-block;
  font-size: 2rem;
  letter-spacing: 0.4rem;
  margin: 0 0.7rem;

  @media ${device.mobileL} {
    font-size: 1.8rem;
    margin-left: 0.9rem;
  }
`;

export const TechNamesP = styled.p`
  font-size: 1.8rem;
  letter-spacing: 0.4rem;
  font-weight: 400;
  margin: 0 0.7rem;

  @media ${device.mobileL} {
    font-size: 1.5rem;
  }
`;

export const CartDemoFooter = styled.footer`
  padding: 2rem 1rem 1rem 1rem;
  grid-column: 1 / -1;
  grid-row: 2 / -1;

  @media ${device.mobileXL} {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
