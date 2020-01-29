import styled from "styled-components";
import bgImageHeader from "../../assets/IMG/bg-header-about-me.webp";
import { device } from "../../styles/globalSizes";

export const AboutMeContainer = styled.section`
  grid-column: center-start / full-end;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 30vh 1fr 20vh;
  background-color: transparent;

  @media ${device.laptopS} {
    grid-column: full-start / full-end;
  }
`;

export const AboutMeHeader = styled.header`
  grid-column: 1 / -1;
  grid-row: 1 / 2;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

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
    z-index: -1;
    filter: brightness(0.70);
  }
`;

export const AboutMeHeaderSection = styled.section`
  padding: 3rem;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-shadow: .1rem .1rem .1rem black;
`;

export const AboutMeH6 = styled.h6`
  font-weight: 100;
  color: ${({ theme }) => theme.colorBaseWhite};
  font-size: 1.4rem;
  letter-spacing: 0.2rem;
`;

export const AboutMeH1 = styled.h1`
  color: ${({ theme }) => theme.colorBaseWhite};
  font-size: 3.2rem;
  letter-spacing: 0.2rem;
  font-weight: 600;
`;

export const AboutMeH2 = styled.h2`
  color: ${({ theme }) => theme.baseRedColor};
  font-size: 3rem;
`;

export const AboutMeP = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.colorBaseWhite};
`;

export const AboutSection = styled.section`
  grid-column: 1 / -1;
  grid-row: 2 / 3;

  display: grid;
  grid-template-columns: 30vw 1fr;
  width: 100%;
`;

export const AboutMeSectionCol1 = styled.div`
  padding-left: 4rem;
  padding-right: 3rem;
  grid-column: 1 / 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & h6 {
    color: #777;
  }

  @media ${device.mobileXL} {
    text-align: center;
    align-items: center;
    padding: 1rem 5rem;
    grid-column: 1 / -1;
  }

  @media ${device.mobileXL} {
    margin-top: 3rem;
  }
`;

export const AboutMeSectionCol2 = styled.div`
  grid-column: 2 / -1;
  padding: 1rem 5rem 1rem 0.1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.mobileXL} {
    padding: 3rem 5rem;
    grid-column: 1 / -1;
  }

  @media ${device.mobileM} {
    padding: 3rem 3.5rem;
  }
`;

export const AboutMeParagraph = styled.p`
  text-align: justify;

  font-size: 1.6rem;
  color: #333;
  line-height: 2.2rem;
`;

export const AboutFooter = styled.footer`
  margin: 0 15rem;

  grid-column: 1 / -1;
  grid-row: 3 / -1;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content min-content;
  align-items: start;
  justify-content: center;

  @media ${device.laptopL} {
    margin: 0 5rem;
  }

  @media ${device.laptop} {
    margin: 0 1rem;
  }

  @media ${device.tablet} {
    margin: 0;
  }
`;

export const AboutFooterHeader = styled.h5`
  text-align: center;
  font-size: 2.5rem;
  letter-spacing: 0.3rem;

  justify-self: center;

  margin: 0 0 3rem 0;

  grid-column: 1 / -1;
  grid-row: 1 / 2;
`;

export const AboutFooterContent = styled.section`
  grid-column: 1 / -1;
  grid-row: 2 / -1;

  padding-bottom: 6rem;

  display: grid;
  justify-content: center;
  align-content: center;
  row-gap: 2rem;
  grid-template-columns: repeat(3, minmax(25rem, 1fr));

  @media ${device.laptopS}  {
    grid-template-columns: repeat(2, minmax(25rem, 1fr));
  }

  @media ${device.mobileL}  {
    grid-template-columns: repeat(1, minmax(25rem, 1fr));
    row-gap: 5rem;
  }
`;

export const AboutFooterItem = styled.div`
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: min-content 1fr; 
  row-gap: .8rem;

  & > div {
    grid-column: 1 / -1; 
    grid-row: 1 / 2;
    justify-self: center;
    color: #950740;
  }
`;


export const AboutFooterItemDesc = styled.small`
  padding: 0rem 5rem;
  text-align: center;
  font-size: 1.6rem;
  color: #333;
`;
