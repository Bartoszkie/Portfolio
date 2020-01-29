import styled from "styled-components";
import bgImageHeader from "../../assets/IMG/bg-timeline-why-timeline.jpg";
import { device } from "../../styles/globalSizes";

export const TimelinePage = styled.section`
  grid-column: center-start / full-end;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.laptopS} {
    grid-column: full-start / full-end;
  }
`;

export const TimelinePageHeader = styled.header`
  width: 100%;
  align-self: center;
  padding: 2rem;
  text-align: center;
  border-bottom: 0.3rem solid black;
  position: relative;
  text-shadow: 0.1rem 0.1rem 0.1rem black;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bgImageHeader});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: brightness(0.6);
    z-index: -1;
  }

  @media ${device.mobileL} {
    padding: 1rem;
  }

  @media ${device.mobileS} {
    padding: 0.2rem;
  }
`;

export const TimelineInfo = styled.h1`
  font-size: 3.2rem;
  letter-spacing: 0.2rem;
  font-weight: 600;

  color: #fff;
`;

export const TimelineInfoDescription = styled.p`
  font-size: 1.6rem;
  color: #fff;
  line-height: 2.2rem;
  text-align: center;
  padding: 2rem;
`;

export const TimelineContainer = styled.section`
  background-color: ${({ theme }) => theme.baseWhiteColor};

  display: flex;
  flex-direction: column;
  position: relative;

  &::after {
    background-color: ${({ theme }) => theme.baseRedColor};
    content: "";
    position: absolute;
    left: calc(50% - 0.2rem);
    width: 0.4rem;
    height: 100%;
  }

  display: flex;
  flex-direction: column;
`;
