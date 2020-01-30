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
  AboutFooterItemDesc,
  AboutFooterHeader,
  AboutFooterContent
} from "./about-me.styles";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeHeader id="aboutMe">
        <AboutMeHeaderSection>
          <AboutMeH6>Bartosz Słysz</AboutMeH6>
          <AboutMeH1>FrontEnd Developer</AboutMeH1>
          <AboutMeP>
            If you do what you love, you'll never work a day in your life
            <br></br>
            <i>~~Marc Anthony</i>
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
            So, just like in header my name is Bartosz Słysz, I am 21, I am IT
            student at University of Rzeszow and I am Junior Frontend Developer.
            My adventure with programming started in middle school when I was
            participating in programming contest. C++ came up and my
            programing-skills curve was born.
            <br></br>
            <br></br>
            Later in high school I have discovered Java. OOP paradigm was so
            beautifull to me that I couldn't resist to stop learning it. But my
            "thing" came up when I have came across on advanced HTML and CSS.
            Simplicity of creation astonishing websites just enchanted me. I
            wanted to learn more about it. So then JavaScript came up in my
            desktop. Speed of development even more complicated programs in JS
            was so astonishing that I made decision that this is "my" language.
            <br></br>
            <br></br>
            And according to that decision, during second year of colleague
            React.js, Sass, Node.js bring me here where I am now and my goal is
            to get as much knoweldge about web technologies as it is possible.
          </AboutMeParagraph>
        </AboutMeSectionCol2>
      </AboutSection>
      <AboutFooter>
        <AboutFooterHeader>What are my superpowers?</AboutFooterHeader>
        <AboutFooterContent>
          <AboutFooterItem>
            <div>
              <i className="fab fa-html5 fa-9x"></i>
            </div>
            <AboutFooterItemDesc>
              HTML 5 and its APIs are known to me very well. In my projects I am
              using as much semantic HTML / JSX as it is possible.
            </AboutFooterItemDesc>
          </AboutFooterItem>
          <AboutFooterItem>
            <div>
              <i className="fab fa-css3 fa-9x"></i>
            </div>
            <AboutFooterItemDesc>
              CSS 3 is also no secret to me. Mechanism of cascade, BEM, Sass -
              it is all in my "styling" equipment.
            </AboutFooterItemDesc>
          </AboutFooterItem>
          <AboutFooterItem>
            <div>
              <i className="fab fa-js fa-9x"></i>
            </div>
            <AboutFooterItemDesc>
              There it is, my main superpower. Closures, scopes, prototypal
              inheritance, OOP, functional programing - I know it all and I am
              still learning it all.
            </AboutFooterItemDesc>
          </AboutFooterItem>
          <AboutFooterItem>
            <div>
              <i className="fab fa-react fa-9x"></i>
            </div>
            <AboutFooterItemDesc>
              In 2020 there is no way we can skip JS framework. Mine is
              React.js. Speed of development, ease of scaling project
              capabilities bring me to that force side.
            </AboutFooterItemDesc>
          </AboutFooterItem>
          <AboutFooterItem>
            <div>
              <i className="fas fa-mobile-alt fa-9x"></i>
            </div>
            <AboutFooterItemDesc>
              In 2020 you can not go online without having a mobile responsive
              website, so here it is in my skills pack.
            </AboutFooterItemDesc>
          </AboutFooterItem>
          <AboutFooterItem>
            <div>
              <i className="fab fa-node fa-9x"></i>
            </div>
            <AboutFooterItemDesc>
              Lately for backend development I have been using Spring Boot. But
              when I have known JS better than Java it is easier to me to
              develop JS backend as well.
            </AboutFooterItemDesc>
          </AboutFooterItem>
        </AboutFooterContent>
      </AboutFooter>
    </AboutMeContainer>
  );
};

export default AboutMe;
