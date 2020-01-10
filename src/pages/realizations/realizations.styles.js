import styled from "styled-components";
import { device } from "../../styles/globalSizes";

export const RealizationsContainer = styled.section`
  grid-column: center-start / full-end;
  background-color: transparent;

  padding: 2rem 3rem;

  @media ${device.laptopS} {
    grid-column: full-start / full-end;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RealizationsHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    margin: 2rem 0 5rem;
`;

export const RealizationsP = styled.p`
    font-size: 1.6rem;
    color: #333;
    line-height: 2.2rem;
`;

export const RealizationsH2 = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 0.3rem;
`;

export const RealizationsContent = styled.section``;
