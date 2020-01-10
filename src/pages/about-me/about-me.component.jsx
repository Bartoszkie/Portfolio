import React from "react";
import {
  AboutMeContainer,
  AboutMeHeader,
  AboutMeH1,
  AboutMeH2,
  AboutMeH6,
  AboutMeHeaderSection,
  AboutMeP,
  AboutMeParagraph,
  AboutSection,
  AboutMeSectionCol1,
  AboutMeSectionCol2,
  AboutFooter,
  AboutFooterItem,
  AboutFooterItemPic,
  AboutFooterItemDesc,
  AboutFooterHeader,
  AboutFooterContent
} from "./about-me.styles";

import HtmlLogo from "../../assets/IMG/html-icon.png";
import CssLogo from "../../assets/IMG/sass-icon.png";
import JsLogo from "../../assets/IMG/js-icon.png";
import JavaLogo from "../../assets/IMG/java-icon.png";
import ReactLogo from "../../assets/IMG/react-icon.png";
import RwdLogo from "../../assets/IMG/rwd-icon.png";
import NodeLogo from "../../assets/IMG/node-icon.png";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeHeader>
        <AboutMeHeaderSection>
          <AboutMeH6>Bartosz Słysz</AboutMeH6>
          <AboutMeH1>FrontEnd Developer</AboutMeH1>
          <AboutMeP>
            If you are going to do what you love, you will never be even one day
            in work.
          </AboutMeP>
        </AboutMeHeaderSection>
      </AboutMeHeader>

      <AboutSection>
        <AboutMeSectionCol1>
          <AboutMeH6>How it all started</AboutMeH6>
          <AboutMeH2>A long time ago in a galaxy far, far away....</AboutMeH2>
        </AboutMeSectionCol1>

        <AboutMeSectionCol2>
          <AboutMeParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </AboutMeParagraph>
        </AboutMeSectionCol2>
      </AboutSection>

      <AboutFooter>
        <AboutFooterHeader>What are my superpowers?</AboutFooterHeader>
        <AboutFooterContent>
          <AboutFooterItem>
            <div>
              <AboutFooterItemPic src={HtmlLogo} />
            </div>
            <AboutFooterItemDesc>
              HTML, CSS (Bootstrap, Foundation), JavaScript (React, Node,
              Express, MongoDB) ? You name it. I have it all covered!
            </AboutFooterItemDesc>
          </AboutFooterItem>
          <AboutFooterItem>
            <div>
              <AboutFooterItemPic src={CssLogo} />
            </div>
            <AboutFooterItemDesc>
              In 2020 you can't go online without having a mobile responsive
              website. Let me take care of that for you!
            </AboutFooterItemDesc>
          </AboutFooterItem>
          <AboutFooterItem>
            <div>
              <AboutFooterItemPic src={JsLogo} />
            </div>
            <AboutFooterItemDesc>
              Millions of website are built on top of Wordpress, yours can
              become the next one!
            </AboutFooterItemDesc>
          </AboutFooterItem>
          <AboutFooterItem>
            <div>
              <AboutFooterItemPic src={ReactLogo} />
            </div>
            <AboutFooterItemDesc>
              Do you have a nice design in photoshop or even sketch? Contact me
              and I'll convert them into fully responsive, nice looking
              websites!
            </AboutFooterItemDesc>
          </AboutFooterItem>
          <AboutFooterItem>
            <div>
              <AboutFooterItemPic src={RwdLogo} />
            </div>
            <AboutFooterItemDesc>
              Do you have a nice design in photoshop or even sketch? Contact me
              and I'll convert them into fully responsive, nice looking
              websites!
            </AboutFooterItemDesc>
          </AboutFooterItem>
          <AboutFooterItem>
            <div>
              <AboutFooterItemPic src={NodeLogo} />
            </div>
            <AboutFooterItemDesc>
              In 2020 you can't go online without having a mobile responsive
              website. Let me take care of that for you!
            </AboutFooterItemDesc>
          </AboutFooterItem>
        </AboutFooterContent>
      </AboutFooter>
    </AboutMeContainer>
  );
};

export default AboutMe;
